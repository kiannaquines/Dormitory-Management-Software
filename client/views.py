from django.shortcuts import render,get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from dormitory.models import Room
from reservation.models import Reservation
from accounts.models import Account,Billing
from authentication.models import CustomUser, EmergencyInformation
from .forms import ClientReservationForms,CustomerPaymentForm,UserForm,CustomPasswordChangeForm
from dms_main.utils import format_date,date_converter
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth import update_session_auth_hash
from django.db.models import Count

def check_if_already_reserved(request):
    try:
        count_already_reserved = Reservation.objects.filter(user_id=request.user.id).filter(is_deleted=False).filter(reservation_status='ACCEPTED').count()
    except Reservation.DoesNotExist:
        count_already_reserved = None

    return count_already_reserved

@login_required(login_url="/")
def client_index(request):

    my_billing = Billing.objects.filter(month__gt=request.user.date_joined).all()
    context = {
        "billing_list":my_billing,
        "count_already_reserved":check_if_already_reserved(request),
    }
    return render(request,"client_index.html",context)

@login_required
def my_profile(request):

    user_info = CustomUser.objects.get(id=request.user.id)
    current_user_form = UserForm(instance=user_info)
    password_form = CustomPasswordChangeForm(request.user)

    try:
        emergency_info = EmergencyInformation.objects.get(user_id=request.user.id)
    except EmergencyInformation.DoesNotExist:
        emergency_info = None

    try:
        list_payments = Account.objects.filter(user_id=request.user.id)
    except Account.DoesNotExist:
        list_payments = None

    if request.method == "POST":

        if 'password_change' in request.POST:

            password_form = CustomPasswordChangeForm(request.user, request.POST)

            if password_form.is_valid():
                user = password_form.save()
                update_session_auth_hash(request, user)
                messages.success(request, "Password changed successfully.")
                return HttpResponseRedirect('/client/myprofile/')
            else:
                messages.error(request, "The password you trying to use, is considered weak, doesn't follow the rules, or doesn't match. Please try again.")

        if 'update_info' in request.POST:   
            form = UserForm(request.POST,request.FILES,instance=user_info)
 
            if form.is_valid():
                form.save()
                messages.success(request,"You have successfully update your information.")
                return HttpResponseRedirect('/client/myprofile/')
            else:
                messages.error(request,"Having an error in adding your information, please try again.")
                return HttpResponseRedirect('/client/myprofile/')

        if 'update_emerg_info' in request.POST:
            update_emerg_info = EmergencyInformation.objects.get(user_id=request.POST.get("user_id"))

            update_emerg_info.emergency_detail_name = request.POST.get("emergency_detail_name")
            update_emerg_info.emergency_detail_middlename = request.POST.get("emergency_detail_middlename")
            update_emerg_info.emergency_detail_lastname = request.POST.get("emergency_detail_lastname")
            update_emerg_info.emergency_detail_mobile_number = request.POST.get("emergency_detail_mobile_number")
            update_emerg_info.emergency_detail_relation = request.POST.get("emergency_detail_relation")
            update_emerg_info.emergency_detail_address = request.POST.get("emergency_detail_address")

            update_emerg_info.save()
            messages.success(request,"You have successfully update your emergency information.")
            return HttpResponseRedirect('/client/myprofile/')

        if 'add_emerg_info' in request.POST:
            add_emerg_info = EmergencyInformation.objects.create(
                user_id = CustomUser.objects.get(id=request.user.id), 
                emergency_detail_name = request.POST.get("emergency_detail_name"),
                emergency_detail_middlename = request.POST.get("emergency_detail_middlename"),
                emergency_detail_lastname = request.POST.get("emergency_detail_lastname"),
                emergency_detail_mobile_number = request.POST.get("emergency_detail_mobile_number"),
                emergency_detail_relation = request.POST.get("emergency_detail_relation"),
                emergency_detail_address = request.POST.get("emergency_detail_address"),
            )

            if add_emerg_info:
                messages.success(request,"You have successfully added your emergency information. You can now update the information if something wrong.")
                return HttpResponseRedirect('/client/myprofile/')
            else:
                messages.error(request,"Having an error in adding your emergency information, please try again.")
                return HttpResponseRedirect('/client/myprofile/')
            
    context = {
        "list_payments":list_payments,
        "emergency_info":emergency_info,
        "user_info":user_info,
        "current_user_form":current_user_form,
        "password_form":password_form,
        "count_already_reserved":check_if_already_reserved(request),
    }


    return render(request,"view_myprofile.html",context)

@login_required(login_url="/")
def client_reservations(request): 
    my_reservations = Reservation.objects.filter(user_id=request.user.id).filter(is_deleted=False)
    context = {
        "my_reservations":my_reservations,
        "count_already_reserved":check_if_already_reserved(request),

    }
    return render(request,"client_reservation.html",context)

@login_required(login_url="/")
def client_create_reservation(request): 
    if request.method == "POST":
        reservation_form = ClientReservationForms(request.POST)
        if reservation_form.is_valid():

            room_info = Room.objects.get(id=request.POST.get("room_id"))

            count_reservation_per_room = Reservation.objects.filter(room_id=reservation_form.cleaned_data['room_id']).annotate(
                reservation_count=Count('reservation_id')
            ).count()

            if count_reservation_per_room > room_info.room_capacity:
                messages.error(request,"The room is already has it's maximum occupants, please try again and select new room.")
                return HttpResponseRedirect('/client/create_reservation/')
            else:
                reservation_form.save()
                messages.success(request,"Reservation has been saved, please wait until manager of the dormitory, approve your reservation.")
                return HttpResponseRedirect('/client/create_reservation/')

        else:
            
            error_message = ""
            for field_name, error_list in reservation_form.errors.items():
                for _ in error_list:
                    error_message = _

            messages.error(request,error_message)
            return HttpResponseRedirect('/client/create_reservation/')
        
    
    reservation_form = ClientReservationForms(initial={'user_id': request.user.id})
    
    context = {
        "reservation_form":reservation_form,
        "count_already_reserved":check_if_already_reserved(request),
    }   
    
    return render(request,"client_create_reservation.html",context)


@login_required(login_url="/")
def client_delete_reservation(request,id):
    current_reservation_id = id
    current_reservation = get_object_or_404(Reservation, reservation_id=current_reservation_id)
    current_reservation.is_deleted = True

    current_reservation.save()
    messages.success(request,"You have successfully marked as deleted your reservation.")
    return HttpResponseRedirect("/client/client_deleted_reservation/")


@login_required(login_url="/")
def client_deleted_reservation(request):

    my_deleted_reservation =  Reservation.objects.filter(is_deleted=True).filter(user_id=request.user.id)

    context = {
        "deleted_reservations":my_deleted_reservation,
        "count_already_reserved":check_if_already_reserved(request),
    }
    return render(request,"client_deleted_reservation.html",context)


@login_required(login_url="/")
def client_edit_reservation(request,id):

    current_instance_reservation = Reservation.objects.filter(is_deleted=False).get(reservation_id=id)
    
    initial_data = {
        'user_id': current_instance_reservation.user_id,
        'dorm_id': current_instance_reservation.dorm_id,
        'room_id': current_instance_reservation.room_id,
        'reservation_fee': current_instance_reservation.reservation_fee,
        'move_in_date': format_date(str(current_instance_reservation.move_in_date)),
    }

    
    reservation_form = ClientReservationForms(initial=initial_data)

    if request.method == "POST":

        save_reservation = ClientReservationForms(request.POST,instance=current_instance_reservation)
        
        if save_reservation.is_valid():
            save_reservation.save()
            messages.success(request,"Reservation has been updated, please wait until manager of the dormitory, approve your reservation.")
            return HttpResponseRedirect("/client/create_reservations/")
        else:
            print(save_reservation.errors)

    context = {
        "reservation_form":reservation_form,
        "reservation_id":id,
        "count_already_reserved":check_if_already_reserved(request),
    }

    return render(request,"client_edit_reservation.html",context)


@login_required(login_url="/")
def my_payments(request):
    current_id = request.user.id
    all_my_payments = Account.objects.filter(user_id=current_id).filter(is_deleted=False) 

    context = {
        "payments":all_my_payments,
        "count_already_reserved":check_if_already_reserved(request),
    }

    return render(request,"my_payments.html",context)


@login_required(login_url="/")
def add_payments(request):
    
    if request.method == "GET":
        if "billing" in request.GET:
            billing_id = request.GET.get("billing",None)
            if billing_id is not None:
                billing = get_object_or_404(Billing,id=billing_id)
                form = CustomerPaymentForm(initial={'user_id':request.user.id,'billing_id':billing_id,'amount_paid':billing.amount})
        else:
            form = CustomerPaymentForm(initial={'user_id':request.user.id})
    
    if request.method == "POST":
        my_payment = CustomerPaymentForm(request.POST,request.FILES)
        
        if my_payment.is_valid():
            
            if Account.objects.filter(billing_id=request.POST.get("billing_id")).filter(user_id=request.user.id):
                messages.error(request,"You already paid this month, please wait until the new billing release.")
                return HttpResponseRedirect("/client/")
            else:
                messages.success(request,"You successfully paid this month, please wait until the new billing release.")
                my_payment.save()
                return HttpResponseRedirect("/client/")


        else:
            print(my_payment.errors)

    context = {
        "form":form,
        "count_already_reserved":check_if_already_reserved(request),
    }
    
    return render(request,"add_payments.html",context)


@login_required(login_url="/")
def edit_payments(request,id):
    my_payment_data = Account.objects.get(id=id)

    initial_data = {
        "ref_code":my_payment_data.ref_code,
        "amount_paid": my_payment_data.amount_paid,
        "payment_type": my_payment_data.payment_type,
        "billing_id": my_payment_data.billing_id,
        "payment_receipt_image": my_payment_data.payment_receipt_image
    }

    account_form = CustomerPaymentForm(initial=initial_data)

    if request.method == "POST":

        current_payment = Account.objects.get(id=id)

        current_payment.ref_code = request.POST.get("ref_code")
        current_payment.payment_as_of = date_converter(request.POST.get("payment_as_of"))
        current_payment.payment_to = date_converter(request.POST.get("payment_to"))
        current_payment.amount_paid = request.POST.get("amount_paid")
        current_payment.payment_type = request.POST.get("payment_type")

        if 'payment_receipt_image' in request.FILES:
            current_payment.payment_receipt_image = request.FILES['payment_receipt_image']
        
        current_payment.save()

        messages.success(request,"You have successfully updated your reservation.")
        return HttpResponseRedirect("/client/my_payments/")

    context = {
        "account_form":account_form,
        "account_id":id,
        "count_already_reserved":check_if_already_reserved(request),
    }

    return render(request,"edit_payment.html",context)


@login_required(login_url="/")
def view_more_info_payment(request,id):
    payment = Account.objects.get(id=id)
    context = {
        "payment":payment,
        "count_already_reserved":check_if_already_reserved(request),
    }
    return render(request,"payment_more_info.html",context)


@login_required(login_url="/")
def deleted_payment(request):

    deleted_accounts =  Account.objects.filter(is_deleted=True)
    context = {
        "deleted_accounts":deleted_accounts,
        "count_already_reserved":check_if_already_reserved(request),
    }
    return render(request,"client_deleted_account.html",context)


@login_required(login_url="/")
def delete_payment(request,id):
    current_id = id
    current_payment = get_object_or_404(Account,id=current_id)
    current_payment.is_deleted = True

    current_payment.save()

    messages.success(request,"You have successfully marked as deleted your payment.")
    return HttpResponseRedirect("/client/deleted_payment/")
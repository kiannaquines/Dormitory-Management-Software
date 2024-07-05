from django.shortcuts import render
from .models import Reservation
from .forms import ReservationForm
from django.http import HttpResponseRedirect,HttpResponse
from django.contrib.auth.decorators import login_required
from dms_main.decorators import check_user_client_redirect
from django.contrib import messages

@check_user_client_redirect
@login_required(login_url="/")
def reservation_view(request):
    reservations_info = Reservation.objects.all()

    context = {
        "reservations_info":reservations_info,
    }
    return render(request,"reservation.html",context)

@check_user_client_redirect
@login_required(login_url="/")
def add_reservation_view(request):
    reservation_form = ReservationForm()

    if request.method == "POST":
        add_reservation_form = ReservationForm(request.POST)

        if add_reservation_form.is_valid():
            add_reservation_form.save()
            messages.success(request,"You successfully added a new reservation")
            return HttpResponseRedirect("/dms/reservation/")
        
    context = {
        "reservation_form":reservation_form,
    }
    
    return render(request,"add_reservation.html",context)

@check_user_client_redirect
@login_required(login_url="/")
def edit_reservation_view(request,id):
    reservation_instance = Reservation.objects.get(reservation_id=id)
    reservation_form = ReservationForm(instance=reservation_instance)

    if request.method == "POST":
        save_reservation = ReservationForm(request.POST,instance=reservation_instance)

        if save_reservation.is_valid():
            save_reservation.save()
            messages.success(request,"You have successfully updated the reservation information")
            return HttpResponseRedirect("/dms/reservation/")
        else:
            messages.success(request,"Having an error in updating the information, please try again.")
            return HttpResponseRedirect("/dms/reservation/")
        
    context = {
        "reservation_form":reservation_form,
        "reservation_id":id,
    }

    return render(request,"edit_reservation.html",context)

@check_user_client_redirect
@login_required(login_url="/")
def delete_reservation(request,reservation_id):
    delete_action = Reservation.objects.get(reservation_id=reservation_id)
    if delete_action.delete():
        messages.success(request,"You have successfully mark as deleted the reservation")
        return HttpResponseRedirect("/dms/reservation/")
    else:
        messages.error(request,"Having an error in deleting the reservation information, please try again.")
        return HttpResponse("Cannot delete the reservstion")

@check_user_client_redirect
@login_required(login_url="/")
def delete_reservation_view(request):
    return render(request,"delete_reservation.html")
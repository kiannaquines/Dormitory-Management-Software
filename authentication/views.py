from django.shortcuts import render,get_object_or_404
from django.contrib.auth import logout,authenticate,login
from .models import CustomUser,EmergencyInformation
from django.http import Http404, HttpResponseRedirect,HttpResponse
from .forms import EmergencyInformationForms,UserForm
from dms_main.decorators import check_login_and_redirect
from django.contrib.auth.decorators import login_required
from accounts.models import Account
from django.contrib import messages
from django.contrib.auth.hashers import make_password

@login_required(login_url="/")
def inactive_users(request):
    inactive_users = CustomUser.objects.filter(is_active=False)

    if request.method == "POST":
        if 'active_button' in request.POST:
            current_id = request.POST.get("inactive_id")

            execute_query = CustomUser.objects.get(id=current_id)
            execute_query.is_active = True

            execute_query.save()

            messages.success(request,"You have successfully activated {} {} acccount he may now login.".format(execute_query.first_name,execute_query.last_name))

            return HttpResponseRedirect('/auth/inactive_users/')

    context = {
        "inactive_users":inactive_users
    }

    return render(request,"inactive_users.html",context)

@check_login_and_redirect
def login_view(request):

    if request.method == "POST":

        username = request.POST.get("username")
        password = request.POST.get("password")
        
        action = CustomUser.objects.filter(username=username)

        if action.exists():

            if action[0].is_active is not True:
                messages.error(request,"Account is not activated yet, wait while processing your account activation.")
                return HttpResponseRedirect('/auth/')
            else:        
                auth = authenticate(request, username=username,password=password)

            if auth is not None:
                login(request,auth)
                if action[0].is_superuser and action[0].is_staff:
                    messages.success(request,f"Hi {request.user.first_name} {request.user.last_name} You have successfully logged in")
                    return HttpResponseRedirect('/dms/')
                else:
                    messages.success(request,f"Hi {request.user.first_name} {request.user.last_name} You have successfully logged in")
                    return HttpResponseRedirect('/client/')
            else:
                messages.error(request,"Your username or password is incorrect, please try again.")
                return render(request, "login.html")
        else:
            messages.error(request,"We cannot find your username in our records, please try again.")
            return render(request, "login.html")
    else:
        return render(request, "login.html")

@check_login_and_redirect
def register_view(request):
    if request.method == "POST":

        email = request.POST.get("email")
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")
        password = request.POST.get("password")
        username = request.POST.get("username")
        
        if CustomUser.objects.filter(email=email).exists() or CustomUser.objects.filter(username=username).exists():
            messages.error(request,"Your email and username is already exist, please try again.")
            return render(request,"register.html")
        else:
            CustomUser.objects.create_user(username=username,first_name=first_name,last_name=last_name,email=email,password=password,is_active=False)
            messages.success(request,"You have successfully registered, you may now login in.")
            return HttpResponseRedirect('/')
    else:
        return render(request, "register.html")
    
@login_required(login_url="/")
def logout_view(request):
    logout(request)
    messages.success(request,"You have successfully logged out, you can login again.")
    return HttpResponseRedirect('/auth/')

@login_required(login_url="/")
def user_view(request):
    users = CustomUser.objects.all().filter(is_superuser=False).filter(is_active=True)

    context = {
        "users": users,
    }

    return render(request, "users.html",context)

@login_required(login_url="/")
def add_user_view(request):    
    user_form = UserForm()

    if request.method == "POST":
        username = request.POST.get("username")
        password = make_password(request.POST.get("password"))
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")
        student_id = request.POST.get("student_id")
        contact_number = request.POST.get("contact_number")
        email = request.POST.get("email")
        gender = request.POST.get("gender")
        college = request.POST.get("college")
        department = request.POST.get("department")
        address = request.POST.get("address")

        add_form = CustomUser(username=username,password=password,first_name=first_name,last_name=last_name,student_id=student_id,contact_number=contact_number,email=email,gender=gender,college=college,department=department,address=address,is_active=True)
        add_form.save()
        messages.success(request,"You have successfully, added a new user account.")
        return HttpResponseRedirect('/users/')

    context = {
        "user_form":user_form,
    }
    
    return render(request, "add_user.html",context)

@login_required(login_url="/")
def edit_user_view(request,id):
    instance_user = CustomUser.objects.get(id=id)
    edit_form = UserForm(instance=instance_user)
    
    if request.method == "POST":
        data = request.POST.copy()
        data["password"] = make_password(data.get("password"))
        data["is_active"] = True

        edit_user = UserForm(data,request.FILES,instance=instance_user)
        
        if edit_user.is_valid():
            edit_user.save()
            messages.success(request,"You have successfully, update the information of {} {}".format(edit_user.cleaned_data['first_name'],edit_user.cleaned_data['last_name']))
            return HttpResponseRedirect('/users/')
        else:
            print(edit_user.errors)
    context = {
        "edit_form":edit_form,
        "user_id":id,
    }    
    return render(request,"edit_user.html",context)

@login_required(login_url="/")
def view_user_view(request,id):

    user_info = CustomUser.objects.get(id=id)

    try:
        emergency_info = EmergencyInformation.objects.get(user_id=id)
    except EmergencyInformation.DoesNotExist:
        emergency_info = None

    try:
        boarder_payments = Account.objects.filter(user_id=id)
    except Account.DoesNotExist:
        boarder_payments = None

    context = {
        "user_info":user_info,
        "boarder_payments":boarder_payments,
        "emergency_info":emergency_info,
    }

    return render(request, "view_user.html",context)

@login_required(login_url="/")
def emergency_info_view(request):
    emergency_info = EmergencyInformation.objects.all()

    context = {
        "emergency_info":emergency_info
    }
    return render(request,"emergency_info.html",context)

@login_required(login_url="/")
def add_emergency_info_view(request):
    emergency_form = EmergencyInformationForms()
    
    if request.method == "POST":
        add_emergency_form = EmergencyInformationForms(request.POST)

        if add_emergency_form.is_valid():
            add_emergency_form.save()
            messages.success(request,"You have successfully, added new  information")
            return HttpResponseRedirect("/emergency_information/")
    context = {
        "emergency_form":emergency_form
    }
    return render(request,"add_emergency_info.html",context)

@login_required(login_url="/")
def edit_emergency_info_view(request,id):

    emergency_info_instance = EmergencyInformation.objects.get(id=id)
    emergency_info_form = EmergencyInformationForms(instance=emergency_info_instance)

    if request.method == "POST":
        save_emergency_info = EmergencyInformationForms(request.POST,instance=emergency_info_instance)

        if save_emergency_info.is_valid():
            save_emergency_info.save()
            messages.success(request,"You have updated the emergency information of {} {}".format(save_emergency_info.cleaned_data['emergency_detail_name'],save_emergency_info.cleaned_data['emergency_detail_lastname']))

            return HttpResponseRedirect('/emergency_information/')
        else:
            messages.error(request,"Having an error in updating the information of {} {}, please try again.".format(save_emergency_info.cleaned_data['emergency_detail_name'],save_emergency_info.cleaned_data['emergency_detail_lastname']))

            return HttpResponseRedirect('/emergency_information/')

    context = {
        "emergency_info_form":emergency_info_form,
        "emergency_id": id,
    }

    return render(request,"edit_emergency_info.html",context)

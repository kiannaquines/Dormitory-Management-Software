from django.shortcuts import render
from .models import Dormitory,Room
from .forms import DormitoryForm,RoomForm
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from dms_main.decorators import check_user_client_redirect
from django.contrib import messages

@check_user_client_redirect
@login_required(login_url="/")
def dormitory_view(request):
    dormitory_info = Dormitory.objects.all()

    context = {
        "dormitory_info":dormitory_info,
    }
    return render(request,"dormitory/dormitory.html",context)

@check_user_client_redirect
@login_required(login_url="/")
def add_dormitory_view(request):
    dormitory_form = DormitoryForm()

    if request.method == "POST":
        dorm = request.POST.get("dorm_name")
        dorm_type = request.POST.get("dorm_type")

        dorm_form_info = Dormitory(dorm_name=dorm,dorm_type=dorm_type)
        if dorm_form_info:
            dorm_form_info.save()
            messages.success(request,"You have successfully added a new dormitory.")
            return HttpResponseRedirect('/dms/dormitory/')
        else:
            messages.error(request,"Having an error in editing the existing information, please try again.")
            return HttpResponseRedirect('/dms/dormitory/')
        
    context = {
        "dormitory_form":dormitory_form,
    }
    return render(request,"dormitory/add_dormitory.html",context)

@check_user_client_redirect
@login_required(login_url="/")
def edit_dormitory_view(request,id):
    instance_form = Dormitory.objects.get(dorm_id=id)
    dorm_form = DormitoryForm(instance=instance_form)

    if request.method == "POST":
        save_dorm = DormitoryForm(request.POST,instance=instance_form)

        if save_dorm.is_valid():
            save_dorm.save()
            messages.success(request,"You have successfully updated the dormitory information")
            return HttpResponseRedirect('/dms/dormitory/')
        else:
            messages.error(request,"Having an error in editing the existing information, please try again.")
            return HttpResponseRedirect('/dms/dormitory/')
        
    context = {
        "dorm_form":dorm_form,
        "dorm_id": id,
    }

    return render(request,"dormitory/edit_dormitory.html",context)

@check_user_client_redirect
@login_required(login_url="/")
def delete_dormitory_view(request):
    return render(request,"dormitory/delete_dormitory.html")

@check_user_client_redirect
@login_required(login_url="/")
def room_view(request):
    room_south = Room.objects.filter(room_location='South Wing').all()
    room_north = Room.objects.filter(room_location='North Wing').all()

    context = {
        "room_south":room_south,
        "room_north":room_north,
    }
    return render(request,"room/rooms.html",context)

@check_user_client_redirect
@login_required(login_url="/")
def add_room_view(request):

    room_form = RoomForm()
    if request.method == "POST":
        add_room_form = RoomForm(request.POST,request.FILES)

        if add_room_form.is_valid():
            add_room_form.save()
            messages.success(request,"You have successfully added a new dormitory room information")
            return HttpResponseRedirect('/dms/dormitory/room/')
        else:
            messages.error(request,"Having an error in updating the dormitory room information, please try again.")
            return HttpResponseRedirect('/dms/dormitory/room/')
    context = {
        "room_form":room_form
    }

    return render(request,"room/add_room.html",context)
@check_user_client_redirect
@login_required(login_url="/")
def edit_room_view(request,id):

    room_instance = Room.objects.get(id=id)
    room_form = RoomForm(instance=room_instance)
    
    if request.method == "POST":
        save_room = RoomForm(request.POST,request.FILES,instance=room_instance)

        if save_room.is_valid():
            save_room.save()
            messages.success(request,"Room has been updated successfully")
            return HttpResponseRedirect('/dms/dormitory/room/')
        else:
            messages.error(request,"Having an error in updating the room information")
            return HttpResponseRedirect('/dms/dormitory/room/')

    context = {
        "room_form":room_form,
        "room_id": id,
    }

    return render(request,"room/edit_room.html",context)

@check_user_client_redirect
@login_required(login_url="/")
def delete_room_view(request):
    return render(request,"room/delete_room.html")
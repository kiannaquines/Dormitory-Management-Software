from django.shortcuts import render
from django.http import HttpResponse
from dormitory.models import *
from authentication.models import *

def landing_page(request):
    context = {}

    room_info = Room.objects.all().filter(room_availability="AVAILABLE")
    context['student_count'] = CustomUser.objects.all().filter(is_staff=False).filter(is_superuser=False).count()
    context['room_count'] = room_info.count()
    context['room_info']  = room_info
    context['dorm_count'] = Dormitory.objects.all().count()
    return render(request,"landing_page.html",context)    
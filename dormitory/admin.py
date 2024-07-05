from django.contrib import admin
from .models import Room,Dormitory

class RoomAdmin(admin.ModelAdmin):
    list_display = ("room_name","room_no","room_location","dorm_id")
    list_per_page = 10
    list_filter = ("dorm_id",)

admin.site.register(Room,RoomAdmin)
admin.site.register(Dormitory)

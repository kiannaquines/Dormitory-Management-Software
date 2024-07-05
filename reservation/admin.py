from django.contrib import admin
from .models import Reservation


class ReservationAdmin(admin.ModelAdmin):
    list_display = ("dorm_id","room_id","reservation_status","date_reserved",)


admin.site.register(Reservation,ReservationAdmin)
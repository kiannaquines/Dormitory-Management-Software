from django.db import models
from authentication.models import CustomUser
from dormitory.models import Dormitory
from dormitory.models import Room
from django.forms import ValidationError

class Reservation(models.Model):

    STATUS = (
        ("ACCEPTED","ACCEPTED"),
        ("UNDER CHECKING","UNDER CHECKING"),
        ("DECLINED","DECLINED")
    )

    reservation_id = models.AutoField(primary_key=True,unique=True)
    user_id = models.ForeignKey(CustomUser,on_delete=models.CASCADE,help_text="Select user")
    dorm_id = models.ForeignKey(Dormitory,on_delete=models.CASCADE,help_text="Select dormitory")
    room_id = models.ForeignKey(Room,on_delete=models.CASCADE,help_text="Select room")
    reservation_status = models.TextField(choices=STATUS,null=True,blank=True)
    reservation_fee = models.FloatField()
    decline_reason = models.TextField(max_length=255,null=True,blank=True)
    move_in_date = models.DateField()
    date_reserved = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False,blank=False)


    def __str__(self):
        return f"{self.user_id.first_name } {self.user_id.last_name}"
    
    def clean(self):
        if self.room_id.dorm_id != self.dorm_id:
            raise ValidationError("The selected room does not belong to the specified dormitory.")


    class Meta:
        db_table = "reservation_tbl"
        verbose_name = "Reservation"
        verbose_name_plural = "Reservations"
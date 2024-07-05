from django.db import models


class Dormitory(models.Model):
    dorm_id = models.AutoField(primary_key=True,unique=True)
    dorm_name = models.CharField(max_length=255,help_text="Enter dormitory name")
    dorm_type = models.CharField(max_length=255,choices=(('Main Dorm','Main Dorm'),('Alumni Dorm','Alumni Dorm'),('Extra Dorm','Extra Dorm')),null=True)
    date_added = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.dorm_name

    class Meta:
        db_table = "dormitory_tbl"
        verbose_name = "Dormitory"
        verbose_name_plural = "Dormitories"


class Room(models.Model):

    CATEGORY = (
        ('AVAILABLE','AVAILABLE'),
        ('UNAVAILABLE','UNAVAILABLE'),
    )

    dorm_id = models.ForeignKey(Dormitory,on_delete=models.CASCADE,help_text="Select dormitory name")
    room_name = models.CharField(max_length=255,help_text="Enter room name")
    room_no = models.IntegerField(help_text="Enter room number")
    room_capacity = models.IntegerField(help_text="Enter room capacity")
    room_location = models.CharField(max_length=255,help_text="Select room location",choices=(('South Wing','South Wing'),('North Wing','North Wing')),null=True)
    room_image = models.ImageField(upload_to="rooms/",null=True)
    room_beds = models.IntegerField(help_text="Enter room beds")
    room_current_bed_available= models.IntegerField(help_text="Enter beds available")
    room_availability = models.TextField(choices=CATEGORY,help_text="Select room availablity")

    def __str__(self) -> str:
        return self.room_name

    class Meta:
        db_table = "room_tbl"
        verbose_name = "Room"
        verbose_name_plural = "Rooms"
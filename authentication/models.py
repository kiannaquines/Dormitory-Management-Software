from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):

    GENDER = (
        ('M','Male'),
        ('F','Female'),
    )

    image = models.ImageField(upload_to="avatar/",null=True,blank=True)
    contact_number = models.CharField(max_length=255)
    college = models.CharField(max_length=255)
    department = models.CharField(max_length=255)
    student_id = models.CharField(max_length=255)
    gender = models.TextField(choices=GENDER, max_length=50)
    address = models.TextField(max_length=255)
    is_deleted = models.BooleanField(default=False,blank=False)

    def __str__(self):
        return "{} {}".format(self.first_name,self.last_name) 
    
    class Meta:
        db_table = "authentication_tbl"
        verbose_name = "User"
        verbose_name_plural = "Users"


class EmergencyInformation(models.Model):

    GENDER = (
        ('M','Male'),
        ('F','Female'),
    )

    user_id = models.ForeignKey(CustomUser,on_delete=models.CASCADE,help_text="Select boader name")
    emergency_detail_name = models.CharField(max_length=2552,help_text="Enter parent name")
    emergency_detail_middlename = models.CharField(max_length=255,help_text="Enter parent middlename")
    emergency_detail_lastname = models.CharField(max_length=255,help_text="Enter parent lastname")

    emergency_detail_mobile_number = models.CharField(max_length=255,help_text="Enter parent lastname")
    emergency_detail_gender = models.TextField(choices=GENDER, max_length=50)

    emergency_detail_address  = models.TextField(max_length=255,help_text="Enter parent permanent address")
    emergency_detail_relation = models.CharField(max_length=255,help_text="Enter the relation")
    is_deleted = models.BooleanField(default=False,blank=False)


    def __str__(self):
        return self.emergency_detail_name

    class Meta:
        db_table = "emergency_detail_tbl"
        unique_together = ('user_id',)
        verbose_name = "Emergency Information"
        verbose_name_plural = "Emergency Informations"





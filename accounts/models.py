from django.db import models
from authentication.models import CustomUser


class Billing(models.Model):

    month = models.DateField()
    due_date = models.DateField()
    amount = models.IntegerField()
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"Billing in month of {self.month}"
    
    class Meta:
        db_table = "billing_tbl"
        verbose_name = "Billing"
        verbose_name_plural = "Billings"
        ordering = ['month']


class Account(models.Model):

    PAYMENT_METHOD = (
        ("WALK IN", "WALK IN"),
        ("GCASH", "GCASH"),
        ("PAYMAYA", "PAYMAYA"),
    )

    PAYMENT_STATUS = (
        ("PENDING", "PENDING"),
        ("VERIFIED", "VERIFIED"),
        ("DECLINED", "DECLINED"),
    )

    billing_id = models.ForeignKey(Billing,on_delete=models.CASCADE,null=True)
    user_id = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    ref_code = models.CharField(max_length=255,null=True,blank=True)
    payment_receipt_image = models.ImageField(upload_to="profs/",null=True,blank=True)
    amount_paid = models.FloatField(default=1000)
    payment_type = models.TextField(choices=PAYMENT_METHOD)
    payment_status = models.TextField(choices=PAYMENT_STATUS,default=PAYMENT_STATUS[0][0])
    date_paid = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False,blank=False)



    def __str__(self) -> str:
        return f'{self.user_id.first_name} {self.user_id.last_name}' 
    

    class Meta:
        db_table = "account_tbl"
        verbose_name = "Account"
        verbose_name_plural = "Accounts"


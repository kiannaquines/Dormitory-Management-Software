from django.contrib import admin
from .models import Account,Billing


class AccountAdmin(admin.ModelAdmin):
    list_display = ("user_id","billing_id","ref_code","amount_paid","payment_type","date_paid",)

admin.site.register(Account,AccountAdmin)
admin.site.register(Billing)
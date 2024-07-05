from django import template
from accounts.models import Account

register = template.Library()

@register.simple_tag
def check_if_already_paid(user_id,billing_id):
    
    account_count = Account.objects.filter(user_id=user_id).filter(billing_id=billing_id).count()
    return account_count


@register.simple_tag
def check_if_already_paid_but_pending(user_id,billing_id):
    
    account_count = Account.objects.filter(user_id=user_id).filter(billing_id=billing_id).filter(payment_status="PENDING").count()
    return account_count



@register.simple_tag
def check_if_already_approved(user_id,billing_id):
    account_count = Account.objects.filter(user_id=user_id).filter(billing_id=billing_id).filter(payment_status="PENDING").count()
    return account_count
   
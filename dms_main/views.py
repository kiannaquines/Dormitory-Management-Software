from django.shortcuts import render
from authentication.models import CustomUser
from accounts.models import Account
from datetime import date,datetime
from django.utils.timezone import make_aware
from django.db.models import Sum
from reservation.models import Reservation
from django.contrib.auth.decorators import login_required
from django.db.models import Sum, F, IntegerField,Count
from django.db.models.functions import ExtractYear
from dateutil.relativedelta import relativedelta
from dms_main.decorators import check_user_client_redirect

@check_user_client_redirect
@login_required(login_url="/")
def dashboard_view(request):

    current_date = date.today()
    
    start_of_day = make_aware(datetime(current_date.year, current_date.month, current_date.day, 0, 0, 0))
    end_of_day = make_aware(datetime(current_date.year, current_date.month, current_date.day, 23, 59, 59))
    
    try:
        start_of_month = make_aware(datetime(current_date.year, current_date.month, 1, 0, 0, 0))
        end_of_month = make_aware(datetime(current_date.year, current_date.month, current_date.day, 23, 59, 59) + relativedelta(day=31))

    except ValueError:
        start_of_month = end_of_month = None
    
    start_of_year = make_aware(datetime(current_date.year, 1, 1, 0, 0, 0))
    end_of_year = make_aware(datetime(current_date.year, 12, 31, 23, 59, 59))
    
    daily_total = Account.objects.filter(date_paid__range=(start_of_day, end_of_day)).filter(payment_status='VERIFIED').aggregate(Sum('amount_paid'))['amount_paid__sum'] or 0
    
    monthly_total = Account.objects.filter(date_paid__range=(start_of_month, end_of_month)).filter(payment_status='VERIFIED').aggregate(Sum('amount_paid'))['amount_paid__sum'] or 0
    
    yearly_total = Account.objects.filter(date_paid__range=(start_of_year, end_of_year)).filter(payment_status='VERIFIED').aggregate(Sum('amount_paid'))['amount_paid__sum'] or 0

    active_boarders = CustomUser.objects.all().filter(is_active=True).count()
    boarders = CustomUser.objects.all().filter(is_active=True)
    inactive_boarders = CustomUser.objects.all().filter(is_active=False).count()
    staff = CustomUser.objects.all().filter(is_active=True).filter(is_superuser=True).filter(is_staff=True).count()


    boarders_data = CustomUser.objects.all().annotate(
        year_registred = ExtractYear('date_joined'),
    ).values('year_registred').annotate(
        total_boarders=Count('id', output_field=IntegerField())
    )

    years = [entry['year_registred'] for entry in boarders_data]
    boarder_counts = [entry['total_boarders'] for entry in boarders_data]

    context = {
        "boarders":boarders,
        "active_boarders":active_boarders,
        "inactive_boarders":inactive_boarders,
        'staff':staff,
        'daily_total': daily_total,
        'monthly_total': monthly_total,
        'yearly_total': yearly_total,
        "year": str(years),
        "borders_count": str(boarder_counts),
    }

    return render(request,"dashboard.html",context)
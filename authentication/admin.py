from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as OriginalAdmin
from .models import CustomUser, EmergencyInformation


admin.site.site_header = "Dormitory Management System"
admin.site.site_title = "University of Southern Mindanao - Dormitory Management System"

class AuthenticationAdmin(OriginalAdmin):
    fieldsets = (
        *OriginalAdmin.fieldsets,
        (
            'Student Information',
            {
                'fields': (
                    'college',
                    'department',
                    'student_id',
                    'contact_number',
                    'gender',
                    'address',
                    'image',
                ),
            }
        ),
    )
    list_display = ('username','first_name','last_name','date_joined','is_active',)
    list_filter  = ['is_active']


class EmergencyAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Emergency Detail Information', {
            'fields': (
                'user_id',
                'emergency_detail_name',
                'emergency_detail_middlename',
                'emergency_detail_lastname',
                'emergency_detail_mobile_number',
                'emergency_detail_gender',
                'emergency_detail_address',
                'emergency_detail_relation',
            )
        }),
    )

    list_display = ("emergency_detail_name","emergency_detail_lastname","emergency_detail_relation")

admin.site.register(EmergencyInformation,EmergencyAdmin)
admin.site.register(CustomUser,AuthenticationAdmin)
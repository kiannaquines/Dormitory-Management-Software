# Generated by Django 4.2.5 on 2023-12-05 02:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dormitory', '0007_room_room_location'),
    ]

    operations = [
        migrations.AddField(
            model_name='dormitory',
            name='dorm_type',
            field=models.CharField(choices=[('Main Dorm', 'Main Dorm'), ('Alumni Dorm', 'Alumni Dorm'), ('Extra Dorm', 'Extra Dorm')], max_length=255, null=True),
        ),
    ]

# Generated by Django 4.2.5 on 2023-09-08 13:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dormitory', '0002_alter_dormitory_date_added'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='room',
            unique_together={('dorm_id',)},
        ),
    ]

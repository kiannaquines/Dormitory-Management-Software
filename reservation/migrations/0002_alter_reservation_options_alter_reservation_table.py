# Generated by Django 4.2.5 on 2023-09-08 14:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reservation', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='reservation',
            options={'verbose_name': 'Reservation', 'verbose_name_plural': 'Reservations'},
        ),
        migrations.AlterModelTable(
            name='reservation',
            table='reservation_tbl',
        ),
    ]

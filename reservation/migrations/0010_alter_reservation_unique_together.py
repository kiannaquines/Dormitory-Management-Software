# Generated by Django 4.2.5 on 2023-09-26 02:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reservation', '0009_reservation_move_in_date'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='reservation',
            unique_together=set(),
        ),
    ]
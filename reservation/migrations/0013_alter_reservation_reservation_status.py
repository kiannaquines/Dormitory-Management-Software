# Generated by Django 4.2.5 on 2023-10-13 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reservation', '0012_reservation_reservation_fee'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservation',
            name='reservation_status',
            field=models.TextField(blank=True, choices=[('ACCEPTED', 'ACCEPTED'), ('UNDER CHECKING', 'UNDER CHECKING'), ('DECLINED', 'DECLINED')], null=True),
        ),
    ]

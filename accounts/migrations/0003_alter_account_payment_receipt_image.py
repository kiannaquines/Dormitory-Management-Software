# Generated by Django 4.2.5 on 2023-09-18 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_account_payment_to'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='payment_receipt_image',
            field=models.ImageField(upload_to='images/profs'),
        ),
    ]

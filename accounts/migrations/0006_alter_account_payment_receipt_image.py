# Generated by Django 4.2.5 on 2023-10-01 05:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_alter_account_payment_receipt_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='payment_receipt_image',
            field=models.ImageField(upload_to='profs/'),
        ),
    ]

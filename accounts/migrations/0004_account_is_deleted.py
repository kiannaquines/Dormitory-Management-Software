# Generated by Django 4.2.5 on 2023-09-18 10:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_alter_account_payment_receipt_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='is_deleted',
            field=models.BooleanField(default=False),
        ),
    ]

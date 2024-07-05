# Generated by Django 4.2.5 on 2023-12-04 08:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0014_alter_account_payment_receipt_image_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='billing',
            options={'ordering': ['month'], 'verbose_name': 'Billing', 'verbose_name_plural': 'Billings'},
        ),
        migrations.AlterField(
            model_name='account',
            name='amount_paid',
            field=models.FloatField(default=1000),
        ),
        migrations.AlterField(
            model_name='account',
            name='payment_status',
            field=models.TextField(choices=[('PENDING', 'PENDING'), ('VERIFIED', 'VERIFIED'), ('DECLINED', 'DECLINED')], default='PENDING'),
        ),
    ]

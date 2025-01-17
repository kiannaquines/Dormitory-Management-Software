# Generated by Django 4.2.5 on 2023-09-08 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_alter_emergencyinformation_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='emergencyinformation',
            name='emergency_detail_address',
            field=models.TextField(help_text='Enter parent permanent address', max_length=255),
        ),
        migrations.AlterField(
            model_name='emergencyinformation',
            name='emergency_detail_lastname',
            field=models.CharField(help_text='Enter parent lastname', max_length=255),
        ),
        migrations.AlterField(
            model_name='emergencyinformation',
            name='emergency_detail_middlename',
            field=models.CharField(help_text='Enter parent middlename', max_length=255),
        ),
        migrations.AlterField(
            model_name='emergencyinformation',
            name='emergency_detail_name',
            field=models.CharField(help_text='Enter parent name', max_length=2552),
        ),
        migrations.AlterField(
            model_name='emergencyinformation',
            name='emergency_detail_relation',
            field=models.CharField(help_text='Enter the relation', max_length=255),
        ),
    ]

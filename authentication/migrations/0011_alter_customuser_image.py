# Generated by Django 4.2.5 on 2023-10-01 05:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0010_alter_customuser_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='image',
            field=models.ImageField(blank=True, default='', null=True, upload_to='avatar/'),
        ),
    ]

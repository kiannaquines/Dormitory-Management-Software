# Generated by Django 4.2.5 on 2023-09-08 13:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dormitory', '0004_alter_room_unique_together'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='room_name',
            field=models.CharField(help_text='Enter room name', max_length=255),
        ),
    ]
# Generated by Django 4.2.5 on 2023-09-08 13:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dormitory', '0003_alter_room_unique_together'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='room',
            unique_together=set(),
        ),
    ]

# Generated by Django 4.2.5 on 2023-09-08 13:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dormitory',
            fields=[
                ('date_added', models.DateTimeField(auto_created=True)),
                ('dorm_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('dorm_name', models.CharField(help_text='Enter dormitory name', max_length=255)),
            ],
            options={
                'verbose_name': 'Dormitory',
                'verbose_name_plural': 'Dormitories',
                'db_table': 'dormitory_tbl',
            },
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('room_name', models.CharField(help_text='Enter room name', max_length=255, unique=True)),
                ('room_no', models.IntegerField(help_text='Enter room number')),
                ('room_capacity', models.IntegerField(help_text='Enter room capacity')),
                ('room_beds', models.IntegerField(help_text='Enter room beds')),
                ('room_current_bed_available', models.IntegerField(help_text='Enter beds available')),
                ('room_availability', models.TextField(choices=[('AVAILABLE', 'AVAILABLE'), ('UNAVAILABLE', 'UNAVAILABLE')], help_text='Select room availablity')),
                ('dorm_id', models.ForeignKey(help_text='Select dormitory name', on_delete=django.db.models.deletion.CASCADE, to='dormitory.dormitory')),
            ],
            options={
                'verbose_name': 'Room',
                'verbose_name_plural': 'Rooms',
                'db_table': 'room_tbl',
            },
        ),
    ]

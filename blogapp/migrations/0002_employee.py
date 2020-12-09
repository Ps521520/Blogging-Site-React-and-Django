# Generated by Django 3.1.3 on 2020-12-06 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=100)),
                ('lastname', models.CharField(max_length=100)),
                ('mobileno', models.TextField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.TextField(max_length=20)),
            ],
        ),
    ]
# Generated by Django 3.1.3 on 2020-12-07 07:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0003_auto_20201206_1933'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='writer',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='blogapp.employee', verbose_name='employees'),
            preserve_default=False,
        ),
    ]

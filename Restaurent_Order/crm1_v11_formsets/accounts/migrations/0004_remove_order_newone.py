# Generated by Django 3.1.4 on 2021-02-07 16:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20210207_2206'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='newOne',
        ),
    ]
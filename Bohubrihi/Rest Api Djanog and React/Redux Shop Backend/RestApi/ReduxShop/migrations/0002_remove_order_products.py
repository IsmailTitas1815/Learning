# Generated by Django 3.1.2 on 2021-08-03 19:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ReduxShop', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='products',
        ),
    ]
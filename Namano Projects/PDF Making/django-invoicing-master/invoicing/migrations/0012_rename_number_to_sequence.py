# Generated by Django 2.0.3 on 2018-03-27 14:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('invoicing', '0011_auto_20180601_1459'),
    ]

    operations = [
        migrations.RenameField(
            model_name='invoice',
            old_name='number',
            new_name='sequence',
        ),
    ]
# Generated by Django 3.2.5 on 2021-07-27 20:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='InvoiceModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('name', models.CharField(max_length=200)),
                ('phone', models.CharField(max_length=14)),
                ('product_name', models.CharField(max_length=140)),
                ('price', models.FloatField(default=0.0)),
            ],
        ),
    ]
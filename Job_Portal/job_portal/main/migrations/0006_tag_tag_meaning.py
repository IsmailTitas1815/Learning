# Generated by Django 3.1.5 on 2021-02-01 19:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_auto_20210202_0143'),
    ]

    operations = [
        migrations.AddField(
            model_name='tag',
            name='tag_meaning',
            field=models.CharField(default='web developer', max_length=100),
        ),
    ]

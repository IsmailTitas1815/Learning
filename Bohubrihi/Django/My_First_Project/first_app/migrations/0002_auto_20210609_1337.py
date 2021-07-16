# Generated by Django 3.1.4 on 2021-06-09 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='num_stars',
            field=models.IntegerField(choices=[(1, 'Worst'), (2, 'Bad'), (3, 'Not Bad'), (4, 'Good'), (5, 'Excellent')]),
        ),
        migrations.AlterField(
            model_name='musician',
            name='last_name',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
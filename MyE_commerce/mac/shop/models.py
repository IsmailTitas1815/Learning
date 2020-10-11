from django.db import models

class Product(models.Model):
    product_id = models.AutoField
    product_name = models.CharField(max_length=30)
    desc = models.CharField(max_length=500)
    pub_date = models.DateField()
    

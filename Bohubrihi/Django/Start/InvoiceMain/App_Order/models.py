from django.db import models

class InvoiceModel(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=14)
    product_name = models.CharField( max_length=140)
    price = models.FloatField(default=0.00)
    # address = models.CharField(max_length=200)

    def __str__(self):
        return self.name
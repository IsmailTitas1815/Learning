from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields import DateTimeField


class InvoiceModel(models.Model):
    invoice_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="invoice")
    email = models.EmailField()
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=14)
    shipping_address = models.CharField(max_length=200)
    product_name = models.CharField(max_length=140)
    price = models.FloatField(default=0.00)
    created = models.DateTimeField(auto_now_add=True, null=True)
    updated = models, DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return self.name + " " + str(self.id)

    class Meta:
        db_table = "InvoiceModel"

from django import forms
from App_Order.models import InvoiceModel

class InvoiceModelForm(forms.ModelForm):
    class Meta:
        model = InvoiceModel
        fields = "__all__"
from django import forms
from App_Order.models import InvoiceModel

Invoice_Option = (
   ('Download', "Download"),
   ('Print', 'Print')
)
class InvoiceModelForm(forms.ModelForm):
    options = forms.ChoiceField(choices=Invoice_Option, widget=forms.RadioSelect())
    class Meta:
        model = InvoiceModel
        exclude = ("invoice_user",)

from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms


from .models import *
class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username','email','password1','password2']

        # fields = ['first_name', 'last_name', 'username','email','password1','password2']


class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = "__all__"
class JobDetailsForm(ModelForm):
    class Meta:
        model = Job
        fields = "__all__"
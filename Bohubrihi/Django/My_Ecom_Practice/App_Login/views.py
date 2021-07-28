from django.shortcuts import render,HttpResponseRedirect
from django.urls import reverse

from App_Login.forms import CreateNewUser
# from django.contrib.auth.models import User
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.forms import AuthenticationForm

def signup(request):
    form = CreateNewUser()
    registered = False
    if request.method == 'POST':
        form = CreateNewUser(data = request.POST)
        if form.is_valid():
            user = form.save()
            registered = True
            return HttpResponseRedirect(reverse('App_Login:login'))
    return render(request,"App_Login/sign_up.html",context={'form':form})

def login_user(request):
    form = AuthenticationForm()
    if request.method == 'POST':
        form = AuthenticationForm(data = request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request,user)
                return HttpResponseRedirect(reverse("App_Shop:home"))
    return render(request,"App_Login/login.html",context={'form':form})

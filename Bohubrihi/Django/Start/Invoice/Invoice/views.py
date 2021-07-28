from django.shortcuts import render, HttpResponse ,HttpResponseRedirect
from django.urls import reverse

def home(request):
    return render(request,'home.html',context={})


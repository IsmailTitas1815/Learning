from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def index(request):
    dict  = {"name":"Ismail"}
    return render(request,'first_app/index.html',context = dict)

def contact(request):

    return HttpResponse("<h1>Hello, this is contact page</h1>  <a href='/'>home</a>  <a href='/about/'>about</a>")

def about(request):
    return HttpResponse("<h1>Hello, this is about page</h1>  <a href='/contact/'>contact</a>  <a href='/'>/home</a>")

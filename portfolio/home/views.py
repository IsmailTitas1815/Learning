from django.shortcuts import render, HttpResponse
from home.models import Contact

def home(request):
    # return HttpResponse("This is my home page (/)")
    context = {"name": "titas","course":"django"}
    return render(request,"home.html",context)

def about(request):
    # return HttpResponse("This is my about page (/)")
    return render(request, "about.html")

def contact(request):
    # return HttpResponse("This is my contact page (/)")
    if request.method=="POST":
        name = request.POST['name']
        # email = request.POST['email']
        phone = request.POST['phone']
        desc = request.POST['desc']
        ins = Contact(name=name, phone=phone, desc=desc)
        ins.save()
        print("this data has been written to the db")
        
    return render(request, "contact.html")


def bio(request):
    # return HttpResponse("This is my bio page (/)")
    return render(request, "bio.html")
    
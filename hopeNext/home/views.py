from django.shortcuts import render, HttpResponse

def contact(request):
    return HttpResponse("This is the contact data")
def bio(request):
    return HttpResponse("This is the biadata")
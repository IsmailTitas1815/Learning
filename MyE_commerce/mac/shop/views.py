from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'shop/index.html')
def about(request):
    return render(request, 'shop/about.html')
def search(request):
    return render(request, 'shop/search.html')
def contact(request):
    return render(request, 'shop/contact.html')
def tracker(request):
    return render(request, 'shop/tracker.html')
def product(request):
    return render(request, 'shop/product.html')
def checkout(request):
    return render(request, 'shop/checkout.html')

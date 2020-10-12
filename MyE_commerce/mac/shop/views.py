from math import ceil
from django.shortcuts import render
from .models import Product

def index(request):
    # products = Product.objects.all()
    # n = len(products)
    # nslides = n//4 + ceil((n/4) - (n//4))
    # params = {'no_of_slides':nslides, 'range' : range(1,nslides), 'product': products }
    # allProds = [[products, range(1, nslides), nslides],
    #             [products, range(1, nslides), nslides]]
    allProds = []
    catprods = Product.objects.values('category','id')
    cats = {item['category'] for item in catprods}
    for cat in cats:
        prod = Product.objects.filter(category = cat)
        n = len(prod)
        nslides = n//4 + ceil((n/4) - (n//4))
        allProds.append([prod, range(1,nslides),nslides])
    params = {'allProds':allProds}
    return render(request, 'shop/index.html',params)

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

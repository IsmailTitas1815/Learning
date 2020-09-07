from django.shortcuts import render, HttpResponse
from blog.models import Blog


def home(request):
    return render(request, 'index.html')


def blog(request):
    blogs = Blog.objects.all()
    context = {"blogs": blogs}
    return render(request, 'blog.html', context)


def contact(request):
    return render(request, 'contact.html')


def search(request):
    return render(request, 'search.html')


def blogposts(request, slug):
    blog = Blog.objects.filter(slug=slug).first()
    context = {"blog": blog}
    return render(request,'blogposts.html',context)

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
# def talkingPicture(request):
#     return render(request,'index.html')


def talkingPicture(request, slug):
    return HttpResponse(f"this is talkingPicture {slug}")
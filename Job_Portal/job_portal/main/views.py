from django.shortcuts import render,HttpResponse,redirect , get_object_or_404
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .models import *
from django.forms import inlineformset_factory 

# Create your views here.


def index(request):
    job = Job.objects.all()
    return render(request,'index.html',{'job':job})

def browse_job(request):
    job = Job.objects.all()
    return render(request,'browse-job.html',{'job':job})

def job_details(request,pk):
    post = Job.objects.get(job_title=pk)
    return render(request,'job-details.html',{'post':post})

from .forms import JobDetailsForm
def update_job_details(request,pk):
    job = Job.objects.get(id=pk)
    details = JobDetailsForm(instance=job)
    if request.method == "POST":
        details = JobDetailsForm(request.POST,instance=job)
        if details.is_valid():
            details.save()
            return redirect('browse_job')
    return render(request,'update_job_details.html',{'details':details})

def delete_job_post(request,pk):
    delete_post = Job.objects.get(id = pk)
    if request.method =="POST":
        delete_post.delete()
        return redirect('browse_job')

    return render(request,'delete_job_post.html',{'item':delete_post})


from .forms import CreateUserForm
def register(request):
    form = CreateUserForm()
    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login/')

    context = {
        "form":form,
        }
    return render(request, 'register.html',context)

def about_us(request):
    return render(request,'about-us.html')

def contact(request):
    return render(request,'contact.html')

def login(request):
    return render(request,'login.html')
    

def blog_details(request):
    return render(request,'blog-details.html')

def blog_classic_sidebar(request):
    return render(request,'blog-classic-sidebar.html')


def browse_candidates(request):
    return render(request,'browse-candidates.html')

def portfolio_grid_3(request):
    return render(request,'portfolio-grid-3.html')

def submit_resume(request):
    return render(request,'submit-resume.html')





from .forms import OrderForm
def order(request):
    form = OrderForm()

    if request.method == "POST":
        form = OrderForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("order")

    context = {
        "form":form,
    }
    return render(request,'order.html',context)
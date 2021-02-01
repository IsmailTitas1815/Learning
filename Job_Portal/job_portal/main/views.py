from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request,'index.html')

def about_us(request):
    return render(request,'about-us.html')

def contact(request):
    return render(request,'contact.html')

def login(request):
    return render(request,'login.html')

def register(request):
    return render(request,'register.html')

def blog_detailes(request):
    return render(request,'blog-detailes.html')

def blog_classic_sidebar(request):
    return render(request,'blog-classic-sidebar.html')

def browse_job(request):
    return render(request,'browse-job.html')

def browse_candidates(request):
    return render(request,'browse-candidates.html')

def portfolio_grid_3(request):
    return render(request,'portfolio-grid-3.html')

def submit_resume(request):
    return render(request,'submit-resume.html')
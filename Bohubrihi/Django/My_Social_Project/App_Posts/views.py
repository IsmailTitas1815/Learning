from django.shortcuts import render,HttpResponse
from django.contrib.auth.decorators import login_required

from django.contrib.auth.models import User

@login_required
def home(request):
    if request.method == "GET":
        search = request.GET.get('search',"")
        result = User.objects.filter(username__icontains = search)

    return render(request, "App_Posts/home.html",context={'title':'Home', "search": search, "result":result})


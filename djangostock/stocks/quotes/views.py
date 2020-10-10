from django.shortcuts import render
# Create your views here.

def home(request):
    import requests
    import json
    api_request = requests.get("https://cloud.iexapis.com/stable/")
    api = json.loads(api_request.content)


    return render (request,"home.html")





def about(request):
    return render (request,"about.html")


# pk_3fa32ca83b874205a6992451c6b94e98
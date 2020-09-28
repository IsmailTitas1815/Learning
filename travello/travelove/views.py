from django.shortcuts import render
from .models import Destination
# from travelove import models


def index(request):

    destinationsList = Destination.objects.all()

    return render(request, 'index.html',{"destinationsList": destinationsList})
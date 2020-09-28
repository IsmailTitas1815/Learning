from django.shortcuts import render
from .models import Destination
# from travelove import models


def index(request):

    destination1 = Destination()
    destination1.name = "Cox's Bazar"
    destination1.desc = "City of Wonder"
    destination1.price = "1200"
    destination1.img = "destination_1.jpg"
    destination1.offer = False
    destination2 = Destination()
    destination2.name = "Sylhet"
    destination2.desc = "City of Hills"
    destination2.price = "800"
    destination2.img = "destination_2.jpg"
    destination2.offer = True
    destination3 = Destination()
    destination3.name = "Dhaka"
    destination3.desc = "City of magic"
    destination3.price = "1000"
    destination3.img = "destination_3.jpg"
    destination3.offer = True

    desttinationsList = [destination1,destination2,destination3]

    return render(request, 'index.html',{"destinationsList": desttinationsList})
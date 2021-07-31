from Status.models import Status
from .serializers import StatusSerializer


from rest_framework import parsers , viewsets

# Create your views here.


# class StatusListCreateView(generics.ListCreateAPIView):
#     queryset = Status.objects.all()
#     serializer_class = StatusSerializer
#     parser_classes = [parsers.FormParser, parsers.MultiPartParser]


# class StatusDetailUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Status.objects.all()
#     serializer_class = StatusSerializer
#     lookup_field = "id"
#     parser_classes = [parsers.FormParser, parsers.MultiPartParser]

class StatusViewset(viewsets.ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer
    parser_classes = [parsers.FormParser, parsers.MultiPartParser]
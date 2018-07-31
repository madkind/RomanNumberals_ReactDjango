from django.shortcuts import render
from sampleapp.models import NumberPair
from sampleapp.serializers import NumberPairSerializer
from rest_framework import generics

class NumberListCreate(generics.ListCreateAPIView):
    queryset = NumberPair.objects.all()
    serializer_class = NumberPairSerializer


from django.shortcuts import render
from sampleapp.models import NumberPair
from sampleapp.serializers import NumberPairSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

class NumberPairCreate(generics.CreateAPIView):
    serializer_class = NumberPairSerializer
    def post(self, request, format=None):
        serializer = NumberPairSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


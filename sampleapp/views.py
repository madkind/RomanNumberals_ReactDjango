from django.shortcuts import render
from sampleapp.models import NumberPair
from sampleapp.serializers import NumberPairSerializer
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from rest_framework import generics
from sampleapp.Helpers import romanToArabic, toJSON
from django.forms.models import model_to_dict


class NumberPairCreate(generics.CreateAPIView):
    serializer_class = NumberPairSerializer
    def post(self, request, format=None):
        serializer = NumberPairSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(arabicNumber=romanToArabic(serializer.validated_data['romanNumber']))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.data['romanNumber'])
            entry = NumberPair.objects.get(romanNumber=serializer.data['romanNumber'])
            print(toJSON(entry))
            if entry is not None:
                return JsonResponse(model_to_dict(entry), status=status.HTTP_202_ACCEPTED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NumberPairList(generics.ListCreateAPIView):
    queryset = NumberPair.objects.all()
    serializer_class = NumberPairSerializer


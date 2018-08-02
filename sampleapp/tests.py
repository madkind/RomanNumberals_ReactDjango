from django.test import TestCase
from rest_framework import status
from sampleapp.helpers import romanToArabic
from sampleapp.models import NumberPair
from roman import toRoman
from rest_framework.test import APIRequestFactory

class RomanNumeralTestCase(TestCase):
    def test_one(self):
        self.assertEqual(1, romanToArabic("I"))

    def test_all(self):
         for i in range(1,2000+1):
             romanNum = toRoman(i); #conversion with library
             arabicNum = romanToArabic(romanNum) #conversion with self implemented logic
             self.assertEqual(i,arabicNum)


class RestTests(TestCase):

    def test_one(self):
        url = '/api/numberpaircreate/'
        data = { 'romanNumber': "I", "arabicNumber": 0 }
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(NumberPair.objects.count(), 1)
        self.assertEqual(NumberPair.objects.get().arabicNumber, 1)
        self.assertEqual(NumberPair.objects.get().romanNumber, "I")

    def test_all(self):
            url = '/api/numberpaircreate/'
            for i in range(1,2000+1):
                data = { 'romanNumber': toRoman(i), "arabicNumber": 0 }
                response = self.client.post(url, data, format='json')
        
                self.assertEqual(response.status_code, status.HTTP_201_CREATED)
                self.assertEqual(NumberPair.objects.count(), i)
                self.assertEqual(NumberPair.objects.get(pk=i).arabicNumber, i)
                self.assertEqual(NumberPair.objects.get(pk=i).romanNumber,  toRoman(i))

   


       


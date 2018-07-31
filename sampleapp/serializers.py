from rest_framework import serializers
from sampleapp.models import NumberPair
class NumberPairSerializer(serializers.ModelSerializer):
    class Meta:
        model = NumberPair
        fields = '__all__'
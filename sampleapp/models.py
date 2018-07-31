from django.db import models

# Create your models here.
class NumberPair(models.Model):
    romanNumber = models.CharField(max_length=30,unique=True, db_index=True)
    arabicNumber = models.IntegerField()
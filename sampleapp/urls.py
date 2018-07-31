from django.urls import path
from . import views
urlpatterns = [
    path('api/numberpairs/', views.NumberPairCreate.as_view() ),
]
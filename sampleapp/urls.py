from django.urls import path
from . import views
urlpatterns = [
    path('api/numberpairs/', views.NumberListCreate.as_view() ),
]
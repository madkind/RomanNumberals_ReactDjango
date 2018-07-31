from django.urls import path
from . import views
urlpatterns = [
    path('api/numberpaircreate/', views.NumberPairCreate.as_view() ),
    path('api/numberpairlist/', views.NumberPairList.as_view() ),
]
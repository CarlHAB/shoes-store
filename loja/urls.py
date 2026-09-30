from django.urls import path
from . import views

urlpatterns = [
    path('produto/<int:id>/', views.detalhe, name='detalhe'),
    path('', views.index, name='index'),
    path('detalhe/', views.detalhe, name='detalhe'),
]
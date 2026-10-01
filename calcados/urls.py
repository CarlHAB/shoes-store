from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('calcados/<int:id>/', views.detalhe, name='detalhe'),
]

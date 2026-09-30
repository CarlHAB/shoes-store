from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def detalhe(request):
    return render(request, 'detalhe.html')
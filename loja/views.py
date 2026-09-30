from django.shortcuts import render, get_object_or_404
from .models import Produto

def index(request):
    produtos = Produto.objects.all()
    return render(request, 'index.html', {'produtos': produtos})

def detalhe(request, id):
    produto = get_object_or_404(Produto, id=id)
    return render(request, 'detalhe.html', {'produto': produto})
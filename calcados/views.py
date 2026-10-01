from django.shortcuts import render

from .models import Calcado

IMAGENS_POR_NOME = {
    'Tênis Horizonte': 'images/produtos/tenis-casual.png',
    'Tênis Trilha': 'images/produtos/tenis-corrida.png',
    'Mocassim Alameda': 'images/produtos/mocassim.png',
    'Bota Serra': 'images/produtos/bota.png',
    'Sapatilha Brisa': 'images/produtos/sapatilha.png',
    'Tênis Caminho': 'images/produtos/tenis-casual.png',
    'Sandália Sol': 'images/produtos/sandalia.png',
    'Oxford Centro': 'images/produtos/oxford.png',
}


def index(request):
    calcados = Calcado.objects.all()
    for calcado in calcados:
        calcado.imagem = IMAGENS_POR_NOME.get(calcado.nome, 'images/produtos/tenis-casual.png')
    return render(request, 'index.html', {'calcados': calcados})


def detalhe(request, id):
    calcado = Calcado.objects.get(id=id)
    calcado.imagem = IMAGENS_POR_NOME.get(calcado.nome, 'images/produtos/tenis-casual.png')
    return render(request, 'detalhe.html', {'calcado': calcado})

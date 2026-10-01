from django.db import models


class Calcado(models.Model):
    nome = models.CharField('nome', max_length=100)
    preco = models.DecimalField('preço', max_digits=10, decimal_places=2)
    estoque = models.IntegerField('estoque')
    numeracao = models.CharField('numeração', max_length=20)

    class Meta:
        ordering = ['nome']
        verbose_name = 'calçado'
        verbose_name_plural = 'calçados'

    def __str__(self):
        return self.nome

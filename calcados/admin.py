from django.contrib import admin

from .models import Calcado


@admin.register(Calcado)
class CalcadoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'preco', 'estoque', 'numeracao')
    search_fields = ('nome',)
    list_filter = ('numeracao',)

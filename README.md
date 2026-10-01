# PassoCerto

Projeto Django de catálogo de calçados. O app principal é `calcados`.

## Estrutura

```text
shoes-store/
├── calcados/
│   ├── migrations/
│   ├── templates/
│   │   ├── index.html
│   │   └── detalhe.html
│   ├── static/
│   │   ├── css/estilos.css
│   │   ├── images/produtos/
│   │   └── js/script.js
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
├── config/             # Configuração do projeto Django
├── db.sqlite3
└── manage.py
```

O model `Calcado` tem os campos `nome`, `preco`, `estoque` e `numeracao`. Há oito registros de exemplo cadastrados pelo Django Admin no banco local.

## Executar

```powershell
python -m pip install Django
python manage.py migrate
python manage.py runserver
```

Abra `http://127.0.0.1:8000/`. O Admin fica em `http://127.0.0.1:8000/admin/`. Para criar uma conta de acesso, use `python manage.py createsuperuser`.

## Conferir os arquivos estáticos com DEBUG=False

```powershell
python manage.py collectstatic --noinput --clear
$env:DJANGO_DEBUG = 'False'
python manage.py runserver --insecure
```

O parâmetro `--insecure` serve apenas para essa conferência local. `staticfiles/` é a saída gerada pelo `collectstatic`; ela está ignorada pelo Git e pode ser recriada. Os arquivos originais ficam em `calcados/static/`.

## Autores

Carlos Henrique, Justino, Pedro Canto e Gabriel Oliveira.

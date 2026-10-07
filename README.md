# PassoCerto

Projeto Django de catálogo de calçados. O app principal é `calcados`.

## Participantes

| Participante | Matrícula |
| --- | --- |
| Carlos Henrique | 01797646 |
| Gabriel Oliveira | 01803593 |
| Marcelo Justino | 01819017 |
| Pedro Canto | 01803171 |

## Funcionalidades

- Model `Calcado` com os campos `nome`, `preco`, `estoque` e `numeracao`.
- Listagem dos calçados em tabela e página de detalhe por item.
- Cadastro e administração dos registros pelo Django Admin.
- Arquivos estáticos de CSS, JavaScript e imagens usados nos templates.

## Como iniciar o projeto

No PowerShell, abra a pasta onde o repositório foi clonado e execute:

```powershell
cd C:\caminho\para\shoes-store
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install Django
python manage.py migrate
python manage.py runserver
```

Depois, acesse:

- Aplicação: `http://127.0.0.1:8000/`
- Administração: `http://127.0.0.1:8000/admin/`

Para criar um usuário administrador, pare o servidor com `Ctrl+C` e execute:

```powershell
python manage.py createsuperuser
python manage.py runserver
```

## Teste com `DEBUG=False`

Para conferir os arquivos estáticos em ambiente local com `DEBUG=False`, execute:

```powershell
python manage.py collectstatic --noinput
$env:DJANGO_DEBUG = 'False'
python manage.py runserver --insecure
```

O parâmetro `--insecure` deve ser usado somente neste teste local. Para voltar ao modo de desenvolvimento, encerre o servidor e execute:

```powershell
Remove-Item Env:DJANGO_DEBUG
python manage.py runserver
```

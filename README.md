# 👟 Shoes Store

Aplicação web de loja de calçados desenvolvida com **Django**. O projeto reúne o catálogo de produtos e a estrutura básica de uma loja virtual, usando **SQLite** como banco de dados para facilitar o desenvolvimento local.

> 🚧 Projeto em desenvolvimento.

---

## 📋 Sumário

- [Tecnologias](#-tecnologias)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Como executar](#-como-executar)
- [Painel administrativo](#-painel-administrativo)
- [Funcionalidades](#-funcionalidades)
- [Próximos passos](#-próximos-passos)
- [Autores](#-autores)

---

## 🛠 Tecnologias

- [Python 3](https://www.python.org/)
- [Django](https://www.djangoproject.com/)
- [SQLite](https://www.sqlite.org/)
- HTML / CSS

---

## 📁 Estrutura do projeto

```
shoes-store/
├── .vscode/        # Configurações do editor
├── config/         # Configurações do projeto Django (settings, urls, wsgi/asgi)
├── loja/           # App principal da loja (models, views, templates)
├── db.sqlite3      # Banco de dados local
└── manage.py       # Utilitário de linha de comando do Django
```

---

## ✅ Pré-requisitos

- Python 3.10 ou superior
- pip
- Git

---

## 🚀 Como executar

**1. Clone o repositório**

```bash
git clone https://github.com/CarlHAB/shoes-store.git
cd shoes-store
```

**2. Crie e ative um ambiente virtual**

```bash
# Linux / macOS
python3 -m venv venv
source venv/bin/activate

# Windows
python -m venv venv
venv\Scripts\activate
```

**3. Instale as dependências**

```bash
pip install django
```

> Se o projeto usar outras bibliotecas (por exemplo, Pillow para upload de imagens), instale-as também. Recomenda-se gerar um `requirements.txt` com `pip freeze > requirements.txt`.

**4. Aplique as migrações**

```bash
python manage.py migrate
```

**5. Inicie o servidor de desenvolvimento**

```bash
python manage.py runserver
```

Acesse em: **http://127.0.0.1:8000/**

---

## 🔐 Painel administrativo

Para gerenciar os produtos pelo admin do Django, crie um superusuário:

```bash
python manage.py createsuperuser
```

Depois acesse **http://127.0.0.1:8000/admin/**.

---

## ✨ Funcionalidades

- [x] Estrutura base do projeto Django
- [x] App `loja` para o catálogo
- [ ] Listagem de produtos
- [ ] Página de detalhes do produto
- [ ] Carrinho de compras
- [ ] Autenticação de usuários
- [ ] Finalização de pedido

> Ajuste esta lista conforme o que já está implementado.

---

## 🔮 Próximos passos

- Adicionar filtros por marca, tamanho e preço
- Implementar carrinho e checkout
- Integrar meio de pagamento
- Adicionar testes automatizados
- Configurar variáveis de ambiente para produção (`SECRET_KEY`, `DEBUG`, `ALLOWED_HOSTS`)

---

## 👥 Autores

- **[Carlos Henrique](https://github.com/CarlHAB)**
- **Justino**
- **Pedro Canto**
- **Gabriel Oliveira**

---



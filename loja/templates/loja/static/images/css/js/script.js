// Alterna entre tema claro e escuro (botão do cabeçalho) e lembra a escolha
function alternarTema() {
  var escuro = document.body.classList.toggle("tema-escuro");
  document.getElementById("btn-tema").textContent = escuro ? "Tema claro" : "Tema escuro";
  try { localStorage.setItem("tema", escuro ? "escuro" : "claro"); } catch (e) {}
}

// Aplica o tema salvo ao abrir qualquer página
function aplicarTemaSalvo() {
  try {
    if (localStorage.getItem("tema") === "escuro") {
      document.body.classList.add("tema-escuro");
      document.getElementById("btn-tema").textContent = "Tema claro";
    }
  } catch (e) {}
}

// Mostra um aviso na página de detalhe (botão "Adicionar ao carrinho")
function adicionarAoCarrinho(nome) {
  var aviso = document.getElementById("aviso");
  aviso.textContent = nome + " foi adicionado ao carrinho.";
  aviso.hidden = false;
}

aplicarTemaSalvo();

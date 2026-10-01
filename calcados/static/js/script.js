const filtrosDeCor = {
  caramelo: 'none',
  verde: 'sepia(1) saturate(2.8) hue-rotate(68deg) brightness(.9)',
  azul: 'sepia(1) saturate(3.2) hue-rotate(170deg) brightness(.93)',
  preto: 'grayscale(1) brightness(.38) contrast(1.2)',
};

function selecionarCor(botao) {
  const produto = botao.closest('[data-item-cor]');
  const imagem = produto.querySelector('[data-imagem-calcado]');
  const cor = botao.dataset.corCalcado;
  const nomeDaCor = botao.getAttribute('aria-label');

  imagem.style.filter = filtrosDeCor[cor];
  imagem.alt = `${imagem.alt.split(' na cor ')[0]} na cor ${nomeDaCor.toLowerCase()}`;
  produto.querySelector('[data-cor-selecionada]').textContent = nomeDaCor;

  produto.querySelectorAll('[data-cor-calcado]').forEach((opcao) => {
    const ativa = opcao === botao;
    opcao.setAttribute('aria-pressed', String(ativa));
  });

  produto.querySelectorAll('.link-produto').forEach((link) => {
    const destino = new URL(link.href);
    destino.searchParams.set('cor', cor);
    link.href = destino.toString();
  });
}

document.addEventListener('click', (evento) => {
  const botao = evento.target.closest('[data-cor-calcado]');
  if (botao) selecionarCor(botao);
});

if (document.querySelector('[data-pagina-detalhe]')) {
  const corDaUrl = new URLSearchParams(window.location.search).get('cor');
  const opcao = Array.from(document.querySelectorAll('[data-cor-calcado]'))
    .find((botao) => botao.dataset.corCalcado === corDaUrl);
  if (opcao) selecionarCor(opcao);
}

function consultarModelo(nome) {
  const cor = document.querySelector('[data-pagina-detalhe] [data-cor-selecionada]').textContent;
  window.alert(`Você demonstrou interesse em ${nome} na cor ${cor}.`);
}

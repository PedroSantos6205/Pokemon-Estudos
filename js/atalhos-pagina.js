(() => {
  const botao = document.getElementById("atalho-scroll");
  if (!botao) return;

  let ultimaPosicao = window.scrollY || document.documentElement.scrollTop || 0;
  let framePendente = false;

  function sincronizarDirecao() {
    const posicao = window.scrollY || document.documentElement.scrollTop || 0;
    if (Math.abs(posicao - ultimaPosicao) >= 2) {
      const rolandoParaBaixo = posicao > ultimaPosicao;
      const destino = rolandoParaBaixo ? "topo-pagina" : "rodape-pagina";
      const rotulo = rolandoParaBaixo ? "↑ Ir ao topo" : "↓ Ir ao rodapé";
      botao.href = `#${destino}`;
      botao.textContent = rotulo;
      botao.setAttribute("aria-label", rotulo.substring(2));
      ultimaPosicao = posicao;
    }
    framePendente = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (framePendente) return;
      framePendente = true;
      window.requestAnimationFrame(sincronizarDirecao);
    },
    { passive: true },
  );
})();

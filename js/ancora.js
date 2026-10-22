const voltarTopo = document.querySelector(".voltar-topo");

function verificarRolagem() {
  const paginaTemRolagem = document.documentElement.scrollHeight > window.innerHeight;

  const usuarioRolou = window.scrollY > 100;

  if (paginaTemRolagem && usuarioRolou) {
    voltarTopo.classList.add("ancora-visivel");
  } else {
    voltarTopo.classList.remove("ancora-visivel");
  }
}

window.addEventListener("scroll", verificarRolagem);
window.addEventListener("resize", verificarRolagem);

verificarRolagem();

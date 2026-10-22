const menuBotao = document.getElementById("menuBotao");

const menuConteudo = document.querySelector(".menu-conteudo");

const menuLinks = document.querySelectorAll(".menu-conteudo a");

const subMenuBotao = document.getElementById("subMenuBotao");

const subMenuLista = document.getElementById("subMenuLista");

menuBotao.addEventListener("click", function () {
  menuConteudo.classList.toggle("menu-aberto");

  if (menuConteudo.classList.contains("menu-aberto")) {
    menuBotao.textContent = "✕";
  } else {
    menuBotao.textContent = "☰";
  }
});

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menuConteudo.classList.remove("menu-aberto");
    menuBotao.textContent = "☰";
  });
});

subMenuBotao.addEventListener("click", function () {
  subMenuLista.classList.toggle("sub-menu-aberto");

  if (subMenuLista.classList.contains("sub-menu-aberto")) {
    subMenuBotao.querySelector("span").textContent = "▼";
  } else {
    subMenuBotao.querySelector("span").textContent = "▶";
  }
});

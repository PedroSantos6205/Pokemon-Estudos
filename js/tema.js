const botaoModo = document.getElementById("modo");

// 1. Descobre se a página atual é em inglês olhando o <html lang="...">
const isEnglish = document.documentElement.lang.toLowerCase().startsWith("en");

// 2. Verifica se já existe uma preferência de tema salva no navegador
const modoSalvo = localStorage.getItem("modo");

// 3. Aplica o tema salvo e define o texto correto do botão ao carregar a página
if (modoSalvo === "noturno") {
  document.body.classList.add("dark");
  botaoModo.textContent = isEnglish ? "☀️ Light Mode" : "☀️ Modo diurno";
} else {
  botaoModo.textContent = isEnglish ? "🌙 Dark Mode" : "🌙 Modo noturno";
}

// 4. Evento de clique para alternar o tema e o texto do botão
botaoModo.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // 5. Verifica se a classe "dark" foi ativada após o clique
  if (document.body.classList.contains("dark")) {
    botaoModo.textContent = isEnglish ? "☀️ Light Mode" : "☀️ Modo diurno";
    localStorage.setItem("modo", "noturno");
  } else {
    botaoModo.textContent = isEnglish ? "🌙 Dark Mode" : "🌙 Modo noturno";
    localStorage.setItem("modo", "diurno");
  }
});

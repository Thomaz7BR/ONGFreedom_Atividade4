document.addEventListener("DOMContentLoaded", () => {
  const botaoContraste = document.getElementById("modo-contraste");
  const botaoEscuro = document.getElementById("modo-escuro");
  const body = document.body;

  if (localStorage.getItem("altoContraste") === "true") {
    body.classList.add("alto-contraste");
  }

  if (localStorage.getItem("modoEscuro") === "true") {
    body.classList.add("modo-escuro");
  }

  botaoContraste.addEventListener("click", () => {
    body.classList.toggle("alto-contraste");
    const ativo = body.classList.contains("alto-contraste");
    localStorage.setItem("altoContraste", ativo);
  });

  botaoEscuro.addEventListener("click", () => {
    body.classList.toggle("modo-escuro");
    const ativo = body.classList.contains("modo-escuro");
    localStorage.setItem("modoEscuro", ativo);
  });
});

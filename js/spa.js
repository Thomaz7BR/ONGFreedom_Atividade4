import { templates } from "./template.js";

function loadTemplate(page) {
  const content = document.getElementById("content");
  if (templates[page]) {
    content.innerHTML = templates[page];
  } else {
    content.innerHTML = "<h2>Página não encontrada</h2>";
  }
}

window.addEventListener("hashchange", () => {
  const page = window.location.hash.replace("#", "") || "inicio";
  loadTemplate(page);
});

document.addEventListener("DOMContentLoaded", () => {
  const page = window.location.hash.replace("#", "") || "inicio";
  loadTemplate(page);
});

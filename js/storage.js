document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const nomeInput = document.querySelector('#nome');

  const nomeSalvo = localStorage.getItem('nomeUsuario');
  if (nomeSalvo && nomeInput) {
    nomeInput.value = nomeSalvo;
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const nome = nomeInput.value.trim();
      if (nome) {
        localStorage.setItem('nomeUsuario', nome);
        alert(`Nome "${nome}" salvo localmente!`);
      }
    });
  }
});

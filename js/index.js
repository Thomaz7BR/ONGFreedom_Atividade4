document.addEventListener('DOMContentLoaded', () => {
  const boasVindas = document.getElementById('boas-vindas');
  const nome = localStorage.getItem('nomeUsuario');

  if (boasVindas) {
    if (nome) {
      boasVindas.innerHTML = `
        <h2>Bem-vindo(a) de volta, ${nome}!</h2>
        <p>Que bom ver você novamente apoiando a ONG Freedom 💚</p>
      `;
    } else {
      boasVindas.innerHTML = `
        <h2>Bem-vindo(a) à ONG Freedom!</h2>
        <p>Cadastre-se para participar de nossos projetos.</p>
      `;
    }
  }
});


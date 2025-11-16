document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-voluntario');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let erro = false;

    const nome = form.querySelector('#nome');
    const email = form.querySelector('#email');
    const cpf = form.querySelector('#cpf');
    const telefone = form.querySelector('#telefone');
    const cep = form.querySelector('#cep');
    const estado = form.querySelector('#estado');

    if (!nome.value.trim()) {
      alert('Por favor, preencha o nome.');
      erro = true;
    }

    if (!email.value.includes('@')) {
      alert('Digite um e-mail válido.');
      erro = true;
    }

    if (cpf.value.replace(/\D/g, '').length !== 11) {
      alert('CPF inválido. Verifique o formato.');
      erro = true;
    }

    if (telefone.value.replace(/\D/g, '').length < 10) {
      alert('Telefone inválido.');
      erro = true;
    }

    if (cep.value.replace(/\D/g, '').length !== 8) {
      alert('CEP inválido.');
      erro = true;
    }

    if (estado.value.trim().length !== 2) {
      alert('O campo Estado deve conter a sigla (ex: SP).');
      erro = true;
    }

    if (!erro) {
      alert('Cadastro realizado com sucesso!');
      form.reset();
    }
  });
});

function mascaraCPF(cpf) {
  cpf.addEventListener('input', function () {
    let value = cpf.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    cpf.value = value;
  });
}

function mascaraTelefone(tel) {
  tel.addEventListener('input', function () {
    let value = tel.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/^(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    tel.value = value;
  });
}

function mascaraCEP(cep) {
  cep.addEventListener('input', function () {
    let value = cep.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    cep.value = value;
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const cpfInput = document.getElementById('cpf');
  const telefoneInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  
  if (cpfInput) mascaraCPF(cpfInput);
  if (telefoneInput) mascaraTelefone(telefoneInput);
  if (cepInput) mascaraCEP(cepInput);


  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});


*  ONG Freedom – Website Oficial * 

Este é o projeto do site da ONG Freedom, desenvolvido como uma Single Page Application (SPA) com JavaScript modular, telas dinâmicas, design responsivo, acessibilidade e suporte a modos visualmente alternativos (escuro e alto contraste).

O objetivo do site é apresentar a ONG, exibir projetos sociais, permitir cadastro de voluntários e facilitar a navegação entre páginas com carregamento dinâmico.

📌 Funcionalidades Principais
✔️ Single Page Application (SPA)

Sistema de roteamento via hash (#)

Templates carregados dinamicamente a partir de template.js

Sem recarregar a página

✔️ Modularização (ESM – JavaScript Modules)

Scripts separados em módulos:

template.js – páginas da SPA

spa.js – lógica de navegação

accessibility.js – acessibilidade

menu.js – menu responsivo (hambúrguer)

storage.js – persistência do nome do usuário

index.js – máscaras e validação de formulário

Também possui versão minificada dos scripts em /min.

*  Interface e Layout

Layout responsivo (mobile-first)

Tipografia usando Google Fonts

Navegação intuitiva com cabeçalho fixo

Cards, seções e blocos com sombras suaves

Imagens com animação hover

Estrutura HTML semântica

*  Acessibilidade

O site oferece recursos inclusivos:

Modo Escuro

Modo Alto Contraste

Persistência do modo escolhido em localStorage

Botões visíveis no cabeçalho

📝 Formulários Inteligentes

O formulário de voluntário possui:

Validação de campos

Máscara automática para:

CPF

Telefone

CEP

Mensagem de sucesso

Salvamento do nome no LocalStorage

Reaproveitamento do nome nas outras páginas

## 📁 Estrutura do Projeto

Entrega 4/
│── css/
│ └── style.css
│
│── img/
│ ├── logo.png
│ ├── projeto1.jpg
│ ├── projeto2.jpg
│ └── voluntariados.jpg
│
│── js/
│ ├── spa.js
│ ├── template.js
│ ├── accessibility.js
│ ├── storage.js
│ ├── menu.js
│ └── index.js
│
│── min/
│ ├── spa.min.js
│ ├── accessibility.min.js
│ ├── storage.min.js
│ ├── menu.min.js
│ └── index.min.js
│
│── index.html
│── projetos.html
│── cadastro.html
└── README.md

*  Branches do Git

Para organização do projeto:

🔵 main

Versão estável — código aprovado e em produção.

🟠 release

Build final minificado, pronto para deploy.
Inclui:

js minificados

CSS final

HTML final

🟢 feature

Onde novos recursos são desenvolvidos antes de irem para main.
Exemplos:

dark mode

contraste

máscaras

SPA

formulários

* Como Rodar o Projeto

Baixe o repositório:

git clone https://github.com/Thomaz7BR/ONGFreedom_Atividade4.git


Abra o index.html no navegador.

Não precisa de servidor local, o projeto é totalmente estático.

*  Tecnologias Utilizadas

HTML5

CSS3

JavaScript (ES Modules)

LocalStorage

SPA baseada em hash routing

👤 Autor

Projeto desenvolvido por Thomaz Lira.

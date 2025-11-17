// js/template.js

export const templates = {
  inicio: `
    <section id="sobre">
      <h1>Sobre a ONG Freedom</h1>
      <p>Missão, visão e valores da ONG. Trabalhamos com dedicação para promover melhorias na comunidade e apoiar projetos sociais.</p>
      <img src="img/projeto1.jpg" alt="Atividades da ONG">
    </section>

    <section id="contato">
      <h2>Contato</h2>
      <p>Email: contato@ongfreedom.org</p>
      <p>Telefone: (83) 98674-5678</p>
    </section>
  `,

  projetos: `
    <section class="voluntarios-section">
      <div class="voluntarios-container">
        <div class="voluntarios-texto">
          <h2>Seja um Voluntário 💚</h2>
          <p>Participe das nossas ações e ajude a transformar vidas!  
          Preencha o formulário abaixo e entre para nossa rede de solidariedade.</p>

          <form class="form-voluntario" id="formVoluntarioProjeto">
            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" required placeholder="Ex: Maria Silva">

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required placeholder="Ex: maria@email.com">

            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" required placeholder="(XX) XXXXX-XXXX">

            <label for="area">Área de interesse:</label>
            <select id="area" name="area" required>
              <option value="">Selecione uma área...</option>
              <option value="educacao">Educação</option>
              <option value="meioambiente">Meio Ambiente</option>
              <option value="saude">Saúde</option>
              <option value="eventos">Eventos</option>
              <option value="administrativo">Administrativo</option>
            </select>

            <label for="mensagem">Por que quer ser voluntário?</label>
            <textarea id="mensagem" name="mensagem" rows="4" placeholder="Conte um pouco sobre sua motivação..."></textarea>

            <button type="submit">Enviar Inscrição</button>
          </form>
        </div>

        <div class="voluntarios-imagem">
          <img src="img/voluntariados.jpg" alt="Voluntário ajudando em projeto social">
        </div>
      </div>
    </section>

    <section class="doacao-section">
      <div class="doacao-container">
        <div class="doacao-texto">
          <h2>Como Doar</h2>
          <p>Suas doações ajudam a transformar vidas! Contribua com nossos projetos sociais e apoie quem mais precisa.</p>
          <a href="https://www.vakinha.com.br" target="_blank" class="doar-btn">Doe Agora</a>
        </div>
        <div class="doacao-imagem">
          <img src="img/projeto2.jpg" alt="Imagem de doação">
        </div>
      </div>
    </section>
  `,

  cadastro: `
    <section class="cadastro-section">
      <h1>Cadastro de Voluntário</h1>
      <form class="form-voluntario" id="formCadastro">
        <fieldset>
          <legend>Informações Pessoais</legend>

          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required>

          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required>

          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>

          <label for="nascimento">Data de Nascimento:</label>
          <input type="date" id="nascimento" name="nascimento" required>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>

          <label for="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" required>

          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" placeholder="00000-000" required>

          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" required>

          <label for="estado">Estado:</label>
          <input type="text" id="estado" name="estado" maxlength="2" placeholder="UF" required>
        </fieldset>

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  `
};

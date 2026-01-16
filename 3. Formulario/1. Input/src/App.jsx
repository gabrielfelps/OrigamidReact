import React, { useState } from 'react';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const App = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [response, setResponse] = useState('');

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let responseFetch;

    try {
      responseFetch = await fetch(
        'https://ranekapi.origamid.dev/json/api/usuario',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );

      setResponse(responseFetch);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        type="text"
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        type="text"
      />

      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        name="senha"
        value={form.senha}
        onChange={handleChange}
        type="password"
      />

      <label htmlFor="cep">Cep</label>
      <input
        id="cep"
        name="cep"
        value={form.cep}
        onChange={handleChange}
        type="text"
      />

      <label htmlFor="rua">Rua</label>
      <input
        id="rua"
        name="rua"
        value={form.rua}
        onChange={handleChange}
        type="text"
      />

      <label htmlFor="numero">Numero</label>
      <input
        id="numero"
        name="numero"
        value={form.numero}
        onChange={handleChange}
        type="text"
      />

      <label htmlFor="bairro">Bairro</label>
      <input
        id="bairro"
        name="bairro"
        value={form.bairro}
        onChange={handleChange}
        type="text"
      />

      <label htmlFor="cidade">Cidade</label>
      <input
        id="cidade"
        name="cidade"
        value={form.cidade}
        onChange={handleChange}
        type="text"
      />

      <label htmlFor="estado">Estado</label>
      <input
        id="estado"
        name="estado"
        value={form.estado}
        onChange={handleChange}
        type="text"
      />

      {response && response.ok && <p>Usuário Criado com Sucesso.</p>}

      <button>Enviar</button>
    </form>
  );
};

export default App;

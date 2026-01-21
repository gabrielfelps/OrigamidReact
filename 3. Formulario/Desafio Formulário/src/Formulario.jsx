import { useState } from 'react';
import Botao from './Botao';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const Formulario = () => {
  const [pergunta, setPergunta] = useState(0);
  const [acerto, setAcerto] = useState(0);
  const [temp, setTemp] = useState(null);

  if (pergunta === perguntas.length) {
    return (
      <div>
        <p>Você acertou: {acerto} de 4</p>
      </div>
    );
  }

  const perguntaAtual = perguntas[pergunta];

  function handleChange({ target }) {
    setTemp(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isRight = temp === perguntaAtual.resposta;

    if (isRight) setAcerto((acerto) => acerto + 1);

    setPergunta((pergunta) => pergunta + 1);
    setTemp(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend style={{ fontWeight: 'bold' }}>{perguntaAtual.pergunta}</legend>
        {perguntaAtual.options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              id={option}
              value={option}
              checked={temp === option}
              name="perguntas"
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </fieldset>
      <Botao disabled={!temp} />
    </form>
  );
};

export default Formulario;

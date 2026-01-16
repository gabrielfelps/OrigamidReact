import { useState } from 'react';

function App() {
  const [textArea, setTextArea] = useState('');

  return (
    <>
      <textarea
        id="mensagem"
        name="mensagem"
        value={textArea}
        onChange={({ target }) => setTextArea(target.value)}
        rows={7}
      ></textarea>
    </>
  );
}

export default App;

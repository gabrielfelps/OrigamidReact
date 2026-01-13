const Botao = ({ children, onClick }) => {
  return (
    <button onClick={onClick} style={{ marginInline: '8px' }}>
      {children}
    </button>
  );
};

export default Botao;

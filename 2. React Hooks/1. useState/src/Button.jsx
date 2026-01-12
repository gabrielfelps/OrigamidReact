const Button = ({ nomeProduto, onClick }) => {
  return (
    <button style={{ marginRight: '12px' }} onClick={onClick}>
      {nomeProduto}
    </button>
  );
};

export default Button;

const Produto = ({ nome, preco, fotos: [{ titulo, src }] }) => {
  return (
    <div>
      <h1>{nome}</h1>
      <p>R$ {preco}</p>
      <img src={src} alt={titulo} />
    </div>
  );
};

export default Produto;

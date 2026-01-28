import style from './Card.module.css';

const Card = ({
  produto: {
    nome,
    fotos: [foto],
  },
}) => {
  return (
    <div className={style.card}>
      <img className={style.rounded} src={foto.src} alt={foto.titulo} />
      <h2 className={style.title}>{nome}</h2>
    </div>
  );
};

export default Card;

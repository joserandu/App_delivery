function DishCard({ dish }) {
  return (
    <div>
      <img src={dish.imagem} alt={dish.nome} width="200" />

      <h3>{dish.nome}</h3>

      <p>{dish.descricao}</p>

      <p>R$ {dish.preco}</p>
    </div>
  );
}

export default DishCard;
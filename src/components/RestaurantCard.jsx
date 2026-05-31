function RestaurantCard({ restaurant }) {
  return (
    <div>
      <img src={restaurant.imagem} alt={restaurant.nome} width="200" />
      <h3>{restaurant.nome}</h3>
      <p>{restaurant.categoria}</p>
    </div>
  );
}

export default RestaurantCard;
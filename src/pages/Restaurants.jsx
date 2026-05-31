import restaurants from "../data/restaurants.json";
import RestaurantCard from "../components/RestaurantCard";

function Restaurants() {
  return (
    <>
      <h1>Restaurantes</h1>

      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </>
  );
}

export default Restaurants;
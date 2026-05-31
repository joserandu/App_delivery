import dishes from "../data/dishes.json";
import DishCard from "../components/DishCard";

function Dishes() {
  return (
    <>
      <h1>Pratos</h1>

      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
        />
      ))}
    </>
  );
}

export default Dishes;
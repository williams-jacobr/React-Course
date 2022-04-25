import { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = function () {
  const [meals, setMeals] = useState([]);

  const getMeals = function (data) {
    const loadedMeals = [];

    for (const key in data) {
      loadedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    setMeals(loadedMeals);
  };

  const {
    isLoading,
    error: httpError,
    sendRequest: sendMealRequest,
  } = useHttp();

  useEffect(() => {
    sendMealRequest(
      {
        url: "https://react-http-bf455-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      getMeals
    );
  }, [sendMealRequest]);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (httpError) {
    return (
      <section className={classes.meals}>
        <Card>
          <p>{httpError}</p>
        </Card>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;

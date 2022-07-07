import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";

const Random = () => {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    const local = localStorage.getItem("recipe");
    if (local) {
      setRandom(JSON.parse(local));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`
      );

      const data = await api.json();
      localStorage.setItem("recipe", JSON.stringify(data.recipes));
      setRandom(data.recipes);
      console.log(data);
    }
  };

  return (
    <div>
      <h2>Random Recipes</h2>
      {random.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Card
              style={{ width: "25rem", marginBottom: "2em" }}
              header={recipe.title}
            >
              <img
                style={{ width: "15rem" }}
                src={recipe.image}
                alt={recipe.title}
              />
              <p>{recipe.diets[0]}</p>
              <p>{recipe.diets[1]}</p>
              <p>{recipe.diets[2]}</p>
              <p>{recipe.diets[3]}</p>
              <p>{recipe.diets[4]}</p>
              <p>{recipe.diets[5]}</p>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Random;

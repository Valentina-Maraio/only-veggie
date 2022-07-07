import React, {useState, useEffect} from 'react'
import { Card } from 'primereact/card';

const Vegetarian = () => {
    const [vegetarian, setVegetarian] = useState([]);

    useEffect(() => {
      getVegetarian();
    }, []);
  
    const getVegetarian = async () => {
      const local = localStorage.getItem("vegetarian");
      if (local) {
        setVegetarian(JSON.parse(local));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5&tags=vegetarian`
        );
  
        const data = await api.json();
        localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
        setVegetarian(data.recipes);
        console.log(data);
      }
    };
  

  return (
    <div>
        <h2>Vegetarian</h2>
        {vegetarian.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Card
              style={{ backgoundColor: "orange", width: "25rem", marginBottom: "2em" }}
              header={recipe.title}
            >
              <img
                style={{ width: "15rem" }}
                src={recipe.image}
                alt={recipe.title}
              />
            </Card>
          </div>
        );
      })}
    </div>
  )
}

export default Vegetarian
import React, {useState, useEffect} from 'react'
//import {useParams} from 'react-router-dom';

const Searched = () => {
    const [searched, setSearched] = useState([]);
    //let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&query=${name}`
        );
        const recipes = await data.json();
        setSearched(recipes.results);
    };

    useEffect(() => {
        getSearched(/*params.search*/)
    },[/*params.search*/])

  return (
    <div>
        <h3>Searched</h3>
        {searched.map((item) => {
            return (
                <div key={item.id}>
                    <img  src={item.image} alt={item.name}/>
                    <h4>{item.title}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default Searched
import React from 'react'
import food from '../assets/pizza.svg';

const Ricetta = () => {
  return (
    <div>
        <h2>Titolo Ricetta</h2>
        <div className="immagine">
        <img src={food} className="pizza" alt="food" />
        </div>
        <div className="ingredienti">
            <ul>
                <li>Ingrediente 1</li>
                <li>INgrediente 2</li>
                <li>Ingrediente 3</li>
                <li>Ingrediente 4</li>
                <li>Ingrediente 5</li>
            </ul>
        </div>
        <div className="ricetta">
            <p>Qui il testo della ricetta</p>
        </div>
    </div>
  )
}

export default Ricetta
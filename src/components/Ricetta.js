import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFood } from '../store/food'
import { useEffect } from 'react'

const Ricetta = () => {

  const dispatch = useDispatch();
  const foods = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(loadFood());
  }, [dispatch]);

  return (
    <div>
        <h2>Titolo Ricetta</h2>
        <div className="immagine">
        </div>
        <div className="ingredienti">
          {
            foods.map((food) => {
              return <div>
                <p>
                  {food.name}
                </p>
              </div>
            })
          }
        </div>
        <div className="ricetta">
            <p>Qui il testo della ricetta</p>
        </div>
    </div>
  )
}

export default Ricetta
import React, {useState} from 'react'
import { InputText } from 'primereact/inputtext'
import Data from '../data/food.json'
import '../App.css';

const Search = () => {
    const [value, setValue] = useState('')

  return (
    <div>
        <InputText
        value={value}
        />
        {
          Data.filter(ricetta => () => {
            if(value === '') {
              return ricetta;
            } else if (ricetta.title.toLowerCase().match(value.toLocaleLowerCase())){
              return ricetta;
            }
          }).map((ricetta) => (
            <div
            className="box"
            key={ricetta.id}>
              <p>
                {ricetta.name}
              </p>
            </div>
          ))
        }
    </div>

  )
}

export default Search
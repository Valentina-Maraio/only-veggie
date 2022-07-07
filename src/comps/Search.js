import React, {useState} from 'react';
//import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [input, setInput] = useState("");
    //const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        console.log(input);
        //navigate('/searched' + input )
    }

  return (
    <div>
        <h1>Search</h1>
        <form
        onSubmit={search}>
            <input
            onChange={(e)=>setInput(e.target.value)}
            type="text"
            value={input}/>
        </form>
    </div>
  )
}

export default Search
import './App.css';

import { useState } from 'react'

function App() {
  const [pokemon, setPokemon] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    fetch('https://pokeapi.co/api/v2/pokemon?limit=870')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setPokemon(response.results)
      })
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="submit" value="Fetch Pokemon" />
      </form>
      <ol>
        {
          pokemon.length > 0 ? pokemon.map((pokemon, i) => <li key={i}>{pokemon.name}</li>) : ""
        }
      </ol>
    </div>
  );
}

export default App;

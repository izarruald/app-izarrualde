import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  //definimos el nombre y con set lo modificamos el estado

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((resp) => resp.json())  
      //porque lo camptura?
      .then((data) => setPokemons(data.results)) //modificamos el set
      .catch((err) => console.log(err));
  }, []);
  //se crean parametros con nombres significativos y se despues se usa para manipular el resultado que nos trae la respuesta en este caso resp.json
  console.log(pokemons);

  return (
    <div>
      <h1>PokeAPI</h1>
      {pokemons.map(
        (
          pokemon //nombre significativo
        ) => (
          <li>{pokemon.name}</li> //usamos el nombre siginificativos
        )
      )}
    </div> //se usa pokemon.name porque ya estamos dentro del array y dentro de resultado por el data.result
  );
}
//quede 1:28 muesta api de mercado libre
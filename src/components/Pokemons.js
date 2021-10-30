import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

const Pokemon = styled.div`
  width: 19.5%;
  height: 210px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px;

  p{
    text-transform: capitalize;
    margin-top: 20px;
  }
`;
function Pokemons(props) {
  const [url,setUrl] = useState('');
  // MOUNT URL
  useEffect(() => {
    const id = props.id;

    setUrl(`https://cdn.traction.one/pokedex/pokemon/${id}.png`);
  }, []);
  return(
    <Pokemon>
      <img src={url} alt="pokemon" width="120px"/>
      <p>{props.name}</p>
    </Pokemon>
  );
}


export default Pokemons;
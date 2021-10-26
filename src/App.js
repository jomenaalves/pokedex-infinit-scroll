import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import SkelotonScreen from "./components/SkeletonScreen";
import Header from "./components/Header";
import ResearchField from "./components/ResearchField";
import Pokemon from './components/Pokemons';

const ContainerPokemons = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
`;

function App() {
  const [initialPokemons, setInitialPokemons] = useState([{}]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`;

    fetch(url).then(response => response.json())
      .then(response => {
        setTimeout(() => { // apenas em desenvolvimento

          setInitialPokemons(response.results);
          setLoading(false)
        }, 1000)
      })    
  }, []);
  return (
      <Fragment>
       <Header />
       <ResearchField />
       
     
        <ContainerPokemons>
          {Object.values(initialPokemons).map((e) => {  
            return(
              loading ? (
                <SkelotonScreen />
              ): (
                <Pokemon name={e.name} id={5} />
              )
            );
          })}
        </ContainerPokemons>
      </Fragment>
  );
}

export default App;
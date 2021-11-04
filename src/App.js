import React, { Fragment, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SkelotonScreen from "./components/SkeletonScreen";
import Header from "./components/Header";
import Pokemon from './components/Pokemons';

const ContainerLoader = styled.div`
    width: 980px;
    margin: -30px auto;
    display: grid;
    align-items: center;
    justify-content: center;
`;

const ContainerPokemon = styled.div`
  width: 922px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Sentinel = styled.div`
height: 40px;
`;

function App() {
  const sentinel = useRef();
  const [initialPokemons, setInitialPokemons] = useState([{}]);
  const [scrollPokemons, setScrollPokemons] = useState([]);
  const [loading,setLoading] = useState(true);
  const [limit, setLimit] = useState(30);
  const [offset, setOffset] = useState(0);

  // LOADING INICIAL 
  useEffect(() => {
    setLoading(true);

    const url = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`;
    const pokemons = [{}];

    fetch(url).then(response => response.json())
      .then(response => {
        setTimeout(() => { // apenas em desenvolvimento
          Object.values(response.results).forEach(e => {

            //get id pokemon
            const url = e.url;
            const split = url.split('/');
            const id = split[6];

            pokemons.push({name : e.name, id: id});
          })

          setInitialPokemons(pokemons);
          setLoading(false)
        }, 1000);
      })    
  }, []);

  // SCROLL INFINITO 
  useEffect(() => {

    console.log(scrollPokemons);
    const intersectioObserver = new IntersectionObserver((entries) => {
      
      if (entries.some((entry) => entry.isIntersecting)) {
        setLimit((currentLimitInsideState) => currentLimitInsideState + 30);
        setOffset((currentOffsetInsideState) => currentOffsetInsideState + 30);
      }

    });

    intersectioObserver.observe(sentinel.current);

    return () => intersectioObserver.disconnect();
  }, []);

  // CONTROL PAGINATION WITH SCROLLING
  useEffect(() => {
    
    if (limit > 30 && limit < 898) {
      const URL = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset}`;

      console.log(URL);
      fetch(URL).then(response => response.json())
        .then(response => {

          Object.values(response.results).forEach(e => {

            //get id pokemon
            const url = e.url;
            const split = url.split('/');
            const id = split[6];

            const value = {name : e.name, id: id};
            
            setScrollPokemons((currentPokemons) => [...currentPokemons, value]);
          })
        });
    }
  }, [offset]);
  return (  
      <Fragment>
       <Header />
       <ContainerPokemon>
          {loading ? (
            <ContainerLoader>
              <SkelotonScreen />
            </ContainerLoader>
          ): (
            Object.values(initialPokemons).map((e, index) => {  
              return(
                e.id && (
                  <Pokemon key={index} name={e.name} id={e.id} />
                )
              );
            })
          )}  
          {scrollPokemons.length > 0 && (
            Object.values(scrollPokemons).map((pokemon, index) => {
              return(
                <Pokemon key={index} name={pokemon.name} id={pokemon.id} />
              );
            })
          )}
          <Sentinel ref={sentinel}></Sentinel>
        </ContainerPokemon>
      </Fragment>
  );
}

export default App;
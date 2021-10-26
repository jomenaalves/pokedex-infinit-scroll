import React, { Fragment } from 'react';

function Pokemons(props) {
  return(
    <Fragment>
      {props.id}, {props.name}
    </Fragment>
  );
}


export default Pokemons;
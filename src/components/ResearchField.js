import React, { Fragment, useState } from "react";
import styled from "styled-components";

const SearchContent = styled.div`
  width: 480px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;

  p{
    font-family: 'Poppins';
    letter-spacing: .2px;
    color: #212121;
    line-height: 5px;
  }

  .container{
    width: 100%;
    position: relative;
    
    input{
      width: 449px;
      border: 1px solid #ccc;
      padding: 10px 15px;
      border-radius: 40px;
      margin-top: -5px;
      background-color: #fff;
    }

    .searchIcon{
      position: absolute;
      right: 2px;
      top: -2.5px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32.5px;
      height: 32.5px;
      background-color: #212121;

      i{
        color: #fff;
        font-size: 10px;
      }
    }
  }

  .loader{
    img{
      display: block;
      margin: 5px auto;
    }
  }
`; 

const ResearchField = (props) => {

  function HandleWithEnterKeyPress(event){
    const keyPressed = event.key;
    let value = event.target.value;

    if (keyPressed === 'Enter' && value.trim() !== "") {
      {props.render(value)}
    } 
  }

  function cancelSearchField(event) {
    if(event.target.value.trim() === ''){
      {props.searchFieldIsActive(false)}
    }
  }

  return (
    <Fragment>
      <SearchContent>
        <p>Pesquise por pokemóns</p>
        <div className="container">
          <input
            type="text"
            onKeyPress={HandleWithEnterKeyPress}
            onChange={cancelSearchField}
          />
          <div className="searchIcon"> 
            <i className="fas fa-search"></i>
          </div>        
        
        </div>
      </SearchContent>
    </Fragment>
  );

}


export default ResearchField;
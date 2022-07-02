import React from 'react';
import './second-form-card.css';
import SuccessPng from '../assets/Success.png'

function secondformcard() {
    return (
       <div className="formcard-container">
           <img className='img' src={SuccessPng} alt='successPng'></img>
           <div className='centerDiv'>Success</div>
        </div>   
       
    );
  }
  
  export default secondformcard;
  
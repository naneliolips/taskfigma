import React from 'react';
import './form-card.css';
import Vector from '../assets/Vector.png';



function formcard() {


    return (
        <div className="formcard-container">
            <div className="headerDiv">
                <h1 className="headerText">NEW STUFF</h1>
            </div>
            <div className="adverbDiv">
                <p className="adverdText">Sign up for our newsletter and<br></br>get 15% off your first order!</p>
            </div>
            <div className="form-div">
                <input type="text" className="formText" placeholder="Your name"></input>
            </div>
            <div className="form-div">
                <input type="text" className="formText" placeholder="Email"></input>
            </div>
            <div className="form-div">
                <input type="text" className="formText" placeholder="Fonts"></input>
            </div>
            <div className='buttonDiv'>
                <button className='button'>GET MY 30% OFF </button>
            </div>
            <div className='imgDiv'>
                <img className='imgClose' src={Vector} alt='closeV'></img>
            </div>
        </div>

    );
}

export default formcard;

import React from 'react';
import './frame.css';
import WarningV from '../assets/warning.png'


function frame() {
    return (
       <div className="frame-container">
            
            <input type="text" placeholder="lorem@popupsmart" className="invalidİnput"></input>
            <img className='imgWarning'  src={WarningV} alt='warningPng'></img>
            <label className="invalidLabel">Invalid email address!</label>
            
            <div className="emailDiv>">
                  <input type="text" placeholder='Email' className="emailİnput"></input>
                  <label className="emailLabel"><img className='imgWarning2' src={WarningV} alt='warningPng2'></img>This field is required!</label>
            </div>
            
            
            
            
       </div>           
       
    );
  }
  
  export default frame;
  
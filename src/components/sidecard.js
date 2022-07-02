import React from 'react';
import './sidecard.css';

function sidecard() {
    return (
       <div className="sidecard-container">
            
            <div className="sidecard-title" >
                <h1 className="sidecard-title-text" >General Settings</h1>
            </div>  
            <div className="input-title-body">
                 <h2 className="input-title">Headline</h2>    
            </div>
             <input className="input-div" placeholder="NEW STUFF"></input>
            <div className="input-title-second-body">
                 <h2 className="input-title">Description</h2>    
            </div>
            <textarea className="input-second-div" type="text" placeholder='Sign up for our newsletter and get 15% off your first order!'></textarea>
            <div className="input-title-third-body">
                 <h2 className="input-title">Success Message</h2>    
            </div>
            <input className="input-third-div" placeholder='Success'></input>

       </div>   
       
    );
  }
  
  export default sidecard;
  
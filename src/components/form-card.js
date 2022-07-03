import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './form-card.css';
import Vector from '../assets/Vector.png';
import Header from './fontsMenu';



function Formcard() {


    const [fonts, setFonts] = useState([]);
    const [fontFamilyList, setFontFamilyList] = useState([]);

    const [selectedFont, setSelectedFont] = useState("");

    const handleChange2 = (ev) => {
        setSelectedFont(ev.target.value);
    };

    useEffect(() => {

        axios.get("https://apiv2.popupsmart.com/api/googlefont%22")
            .then((response) => {
                setFonts(response.data);
            });
    }, []);

    useEffect(() => {
        fonts.forEach((font) =>
            setFontFamilyList((oldList) => [...oldList, font.family])
        );
    }, [fonts]);


    const [form, setForm] = useState({ name: '', email: '', font: '' });
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
        console.log(form);
    }

    return (
        <div className="formcard-container">
            <div className="headerDiv">
                <h1 className="headerText">NEW STUFF</h1>
            </div>
            <form>
                <div className="adverbDiv">
                    <p className="adverdText">Sign up for our newsletter and<br></br>get 15% off your first order!</p>
                </div>
                <div className="form-div">
                    <input name="name" value={form.name} onChange={handleChange} type="text" className="formText" placeholder="Your name"></input>
                </div>
                <div className="form-div">
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="formText" placeholder="Email"></input>
                </div>
                <div className="form-div">
                    <Header onChange={handleChange2} Header fonts={fonts} selectedFont={selectedFont} fontFamilyList={fontFamilyList} />
                </div>
                <div className='buttonDiv'>
                    <button className='button'>GET MY 30% OFF </button>
                </div>
                <div className='imgDiv'>
                    <img className='imgClose' src={Vector} alt='closeV'></img>
                </div>
            </form>
        </div>

    );
}

export default Formcard;

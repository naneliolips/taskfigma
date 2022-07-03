import React, { useState, useEffect } from "react";
import axios from "axios";
import "./form-card.css";
import Vector from "../assets/Vector.png";
import Header from "./fontsMenu";

function Formcard() {
    const [fonts, setFonts] = useState([]);
    const [fontFamilyList, setFontFamilyList] = useState([]);

    const [selectedFont, setSelectedFont] = useState("");
    const [form, setForm] = useState({ name: "", email: "", font: "" });

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log(form);
    };

    const handleChange2 = (ev) => {
        setSelectedFont(ev.target.value);
        setForm({ ...form, font: ev.target.value });
    };

    useEffect(() => {
        axios
            .get("https://apiv2.popupsmart.com/api/googlefont")
            .then((response) => {
                setFonts(response.data);
            });
    }, []);

    useEffect(() => {
        fonts.forEach((font) =>
            setFontFamilyList((oldList) => [...oldList, font.family])
        );
    }, [fonts]);

    const [error, setError] = useState(false);
    const handleBlur = (event) => {
        if (event.target.validity.typeMismatch) {
            setError("email");
        } else if (event.target.value.trim() === "") {
            setError("empty");
        } else {
            setError(false);
        }
        // console.log(event.target.validity)
    };

    return (
        <div className="formcard-container">
            <div className="headerDiv">
                <h1 className="headerText">NEW STUFF</h1>
            </div>
            <form>
                <div className="adverbDiv">
                    <p className="adverdText">
                        Sign up for our newsletter and<br></br>get 15% off your first order!
                    </p>
                </div>
                <div className="form-div">
                    <input
                        name="name"
                        value={form.name}
                        required
                        onChange={handleChange}
                        type="text"
                        className="formText"
                        placeholder="Your name"
                    ></input>
                </div>
                <div className="form-div">
                    <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="formText"
                        placeholder="Email"
                    ></input>
                    {error === "email" && (
                        <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                            Invalid email adress!
                        </p>
                    )}
                    {error === "empty" && (
                        <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                            This field is required!
                        </p>
                    )}
                </div>
                <div className="form-div">
                    <input type="hidden" required name="font" value={form.font} />
                    <Header
                        handleChange={handleChange2}
                        fonts={fonts}
                        selectedFont={selectedFont}
                        fontFamilyList={fontFamilyList}
                    />
                </div>
                <div className="buttonDiv">
                    <button className="button">GET MY 30% OFF </button>
                </div>
                <div className="imgDiv">
                    <img className="imgClose" src={Vector} alt="closeV"></img>
                </div>
            </form>
        </div>
    );
}

export default Formcard;
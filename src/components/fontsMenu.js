import React from "react";
import "./fontMenu.css";
import axios from "axios";
import { useEffect, useState } from "react";


export default function FontsMenu({ font }) {
  const [fonts, setFonts] = useState([]);
  const [fontFamilyList, setFontFamilyList] = useState([]);

  const [selectedFont, setSelectedFont] = useState("");

  const handleChange = (ev) => {
    setSelectedFont(ev.target.value);
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

  // eslint-disable-next-line no-lone-blocks
  return (
    <>
      <select className="fonts-menu" value={selectedFont} onChange={handleChange}>
        {fontFamilyList.map((fontFamily, index) => (
          <option key={index} value={fontFamily}>
            {fontFamily}
          </option>
        ))}
      </select>

    </>
  );
}
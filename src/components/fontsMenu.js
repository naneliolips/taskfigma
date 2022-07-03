import React from "react";
import "./fontMenu.css";

export default function FontsMenu({ fonts, handleChange, selectedFont, fontFamilyList }) {

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
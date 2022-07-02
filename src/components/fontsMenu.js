import React from 'react'
import './fontMenu.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import arrow from '../assets/downarrow.png';





export default function FontsMenu() {

  const [fonts, setFonts] = useState([]);
  const [fontFamilyList, setFontFamilyList] = useState([])

  useEffect(() => {
    axios.get('https://apiv2.popupsmart.com/api/googlefont')
      .then(response => setFonts(response.data))
      .then(response => response.data.forEach(font => setFontFamilyList([...fontFamilyList, font.family])))
  }, []);

  // eslint-disable-next-line no-lone-blocks
  {
    fontFamilyList && fontFamilyList.map((fontFamily, index) => {

      return (
        <div key={index}>
          <ul className='font-menu'>
            <li className='fontsText'>{fontFamily} <img className='arrow' alt='arrow' src={arrow}></img> </li>
          </ul>
        </div>
      )
    })
  }


} 

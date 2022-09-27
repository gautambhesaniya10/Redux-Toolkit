import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changebgColor, changeTextColor } from './themeSlice';

const Theme = () => {

    const dispatch = useDispatch();
    const [color, setColor] = useState("white");
    const [bgcolor, setBgColor] = useState("dark grayish blue");

  return (
    <>
    <div>
        <input type="text" className="textbox" onChange={(e) => setColor(e.target.value)} />
        <button className="button" onClick={() => {dispatch(changeTextColor(color))}} >Chanege Text Color</button>
    </div>
    <div>
        <h2>Change background</h2>
        <input type="text" className="textbox" onChange={(e) => setBgColor(e.target.value)} />
        <button className="button" onClick={() => {dispatch(changebgColor(bgcolor))}}>Chanege bg Color</button>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.308343932564!2d72.89572041540423!3d21.219618086610073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4a2b33cbc7%3A0xaa737730ed366cff!2sBluesoft%20Infotech!5e0!3m2!1sen!2sin!4v1664189903789!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Theme
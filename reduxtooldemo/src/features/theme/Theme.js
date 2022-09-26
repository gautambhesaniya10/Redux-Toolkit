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
    </>
  )
}

export default Theme
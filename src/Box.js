import {fourBits} from './Function';
import {useState} from 'react';
const Box = (element) => {
    const states = fourBits(element.number);
    return ( 
        <div className="box">
            <div id="top" className={states[0]?'Green':'Black'}></div>
            <div id="topleft" className={states[5]?'Green':'Black'}></div>
            <div id="topright" className={states[1]?'Green':'Black'}></div>
            <div id="mid" className={states[6]?'Green':'Black'}></div>
            <div id="bottom" className={states[3]?'Green':'Black'}></div>
            <div id="bottomleft" className={states[4]?'Green':'Black'}></div>
            <div id="bottomright" className={states[2]?'Green':'Black'}></div>
        </div>
     );
}
 
export default Box;
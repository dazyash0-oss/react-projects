
import React, { useState } from "react";



export default function RandomColor() {

    const [typeOfcolor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }


    function handleCreateRandomHexColor() {
        //#123456
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {

            hexColor += hex[randomColorUtility(hex.length)];
        }

        console.log(hexColor);
    }


    function handleCreateRandomRgbColor() {


    }


    return (<div style={{
        width: '100vw',
        height: '100vh',
        background: color,
    }}>

        <button onClick={() => setTypeOfColor('hex')}>
            create hex color
        </button>
        <button onClick={() => setTypeOfColor('rgb')}>
            create rgb color
        </button>
        <button onClick={typeOfcolor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomiRgbColor
        }>
            generate random color
        </button>


    </div>
    );
}
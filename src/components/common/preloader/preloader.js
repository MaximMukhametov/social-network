import loadCircle from "../../../media/VdOY.gif";
import React from "react";


// Page loading animation
let Preloader = () => {
    return <img src={loadCircle} style={{
        display: 'block',
        width: '150px',
        margin: '0 auto'
    }} alt="Loading"/>
};

export default Preloader
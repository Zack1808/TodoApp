import React from 'react';

import "../css/Input.css"

const Input = ({ placeholder = "Enter text" }) => {
    return(
        <input className="input" type="text" placeholder={placeholder}></input>
    )
};

export default Input;
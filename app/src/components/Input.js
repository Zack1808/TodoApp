import React from 'react';

import "../css/Input.css"

const Input = ({ placeholder = "Enter text", onChange, value }) => {
    return(
        <input value={value} onChange={onChange} className="input" type="text" placeholder={placeholder}></input>
    )
};

export default Input;
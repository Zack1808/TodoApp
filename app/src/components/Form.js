import React from 'react';

import Button from './Button';
import "../css/Input.css"

const Form = ({ placeholder = "Enter text", btnText = "Enter button text"}) => {
    return(
        <form style={{display: "flex"}}>
            <input className="input" type="text" placeholder={placeholder}></input>
            <Button type="submit" buttonStyle="btn--success--solid" buttonSize="btn--medium">{btnText}</Button>
        </form>
    )
}

export default Form;
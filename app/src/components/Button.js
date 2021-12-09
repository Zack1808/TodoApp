import React from "react";

import "../css/Button.css"

const styles = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",
];

const size = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {

    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];

    const checkButtonSize = size.includes(buttonSize) ? buttonSize : size[0]

    return(
        <button className={`btn ${checkButtonSize} ${checkButtonStyle}`} onClick={onClick} type={type}>{children}</button>
    )
}

export default Button;
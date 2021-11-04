import React, {useState} from "react";

import "../css/CheckBox.css";

const CheckBox = () => {

    const [isChecked, setIsChecked] = useState(false);

    // Creating a function that will allow to toggle the checkbox
    const toggleCheckBox = () => { 
        setIsChecked(!isChecked);
    }

    // Creating funciton that will handle the keypress
    const handleKeyPress = (event) => {
        if(event.key === "Enter" || event.key === " ") toggleCheckBox()
    }

    return (
        <div id="checkbox" onClick={toggleCheckBox} className={isChecked ? "checked" : ""} tabIndex="1" onKeyUp={handleKeyPress}>
            {isChecked && <span id="checkmark">✓</span>}
        </div>
    );
};

export default CheckBox;
import React, {useState} from "react";

import "../css/CheckBox.css";

const CheckBox = () => {

    const [isChecked, setIsChecked] = useState(false);

    // Creating a function that will allow to toggle the checkbox
    const toggleCheckBox = () => { 
        setIsChecked(!isChecked);
    }

    return (
        <label>
            <input type="checkbox" onChange={toggleCheckBox} className="checkbox-value"/>
            <svg className={`checkbox ${isChecked ? "checked": ""}`} aria-hidden="true" viewBox="-1 0 17 10" fill="none">
                <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke={isChecked ? "#fff" : "none"}/>
            </svg>
        </label>
    );
};

export default CheckBox;
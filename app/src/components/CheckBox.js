import React, {useState} from "react";

import "../css/CheckBox.css";

const CheckBox = () => {

    const [isChecked, setIsChecked] = useState(false);

    // Creating a function that will allow to toggle the checkbox
    const toggleCheckBox = () => { 
        setIsChecked(!isChecked);
    }

    return (
        <div id="checkbox" onClick={toggleCheckBox} className={isChecked ? "checked" : ""}>
            {isChecked && <span id="checkmark">✓</span>}
        </div>
    );
};

export default CheckBox;
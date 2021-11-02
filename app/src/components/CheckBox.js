import React, {useState} from "react";

import "../css/CheckBox.css";

const CheckBox = () => {

    const [isChecked, setIsChecked] = useState(false);

    // Creating a function that will allow to toggle the checkbox
    const toggleCheckBox = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div>
            <div id="checkbox" onClick={toggleCheckBox} className={isChecked ? "checked" : ""}></div>
        </div>
    );
};

export default CheckBox;
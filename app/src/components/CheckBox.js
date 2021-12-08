import React, {useState} from "react";
import { animated, useSpring} from "react-spring";

import "../css/CheckBox.css";

const CheckBox = () => {

    // Defining the variables
    const [isChecked, setIsChecked] = useState(false);
    const [checkmarkLength, setCheckmarkLength] = useState(null);

    // Creating a function that will allow to toggle the checkbox
    const toggleCheckBox = () => { 
        setIsChecked(!isChecked);
    }

    // Creating a function for animating the checkbox
    const checkboxAnimationStyle = useSpring({
        backgroundColor: isChecked ? "#4bb543" : "#fff",
        borderColor: isChecked ? "#4bb543" : "ddd"
    }); 

    // Creating a function for animating the checkmark
    const checkmarkAnimationStyle = useSpring({
        x: isChecked ? 0 : checkmarkLength
    });

    // Creating a function that will mesure the length of the checkmark
    const setRef = (ref) => {
        if(ref){
            setCheckmarkLength(ref.getTotalLength())
        }
    }

    return (
        <label>
            <input type="checkbox" onChange={toggleCheckBox} className="checkbox-value"/>
            <animated.svg style={checkboxAnimationStyle} className={`checkbox ${isChecked ? "checked": ""}`} aria-hidden="true" viewBox="-1 0 17 10" fill="none">
                <animated.path ref={setRef} d="M1 4.5L5 9L14 1" strokeWidth="2" stroke="#fff" strokeDasharray={checkmarkLength} strokeDashoffset={checkmarkAnimationStyle.x}/>
            </animated.svg>
        </label>
    );
};

export default CheckBox;
import React, {useState} from 'react';

import Button from './Button';
import Input from './Input';
import "../css/Input.css"

const Form = ({ placeholder = "Enter text", btnText = "Enter button text", onSubmit }) => {

    // Creating a variable that stores the input value from the form
    const [inputData, setInputData] = useState("");

    // Function that changes the value of the input field 
    const changeInputValue = (event) => {
        setInputData(event.target.value);
    }

    // Function that will prevent the page from reloading after submition, send the input data to the parent and clear the input field
    const formSubmition = (event) => {
        event.preventDefault();
        onSubmit(inputData);
        setInputData("")
    }

    return(
        <form style={{display: "flex"}} onSubmit={formSubmition} >
            {/* <input value={inputData} onChange={changeInputValue} className="input" type="text" placeholder={placeholder}></input> */}
            <Input placeholder={placeholder} onChange={changeInputValue} value={inputData}/>
            <Button type="submit" buttonStyle="btn--success--solid" buttonSize="btn--medium">{btnText}</Button>
        </form>
    )
}

export default Form;
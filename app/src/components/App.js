import React from "react";

import CheckBox from "./CheckBox";
import Button from "./Button";
import Input from "./Input";

const App = () => {
    return(
        <div>
            <CheckBox />
            <CheckBox />
            <Button onClick={() => console.log("clicked")} type="button" buttonStyle="btn--success--solid" buttonSize="btn--medium">Hello</Button>
            <Input />
        </div>
    )
};

export default App;
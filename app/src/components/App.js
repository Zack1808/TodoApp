import React from "react";

import CheckBox from "./CheckBox";
import Button from "./Button";

const App = () => {
    return(
        <div>
            <CheckBox />
            <CheckBox />
            <Button onClick={() => console.log("clicked")} type="button" buttonStyle="btn--success--outline" buttonSize="btn--medium">Hello</Button>
        </div>
    )
};

export default App;
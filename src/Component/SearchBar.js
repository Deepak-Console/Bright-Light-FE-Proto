import { React, useState } from "react";
import List from "./Components/List";
import "./App.css";

function App() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="main">
            <h1>React Search</h1>
            <div className="search">
               {/*  <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                /> */}

                <div class="input-group rounded">
                    <input id="outlined-basic" type="search" onChange={inputHandler}  label="Search" variant="outlined" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                  {/*   <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span> */}
                </div>
            </div>
            <List input={inputText} />
        </div>
    );
}

export default App;
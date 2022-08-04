import React from "react";
import "./App.css";
import Main from "./components/main";


function App() {
    return (
        <div style={{margin:'auto'}} >
            <h1 style={{ fontFamily: "Fredoka One" , display: 'block', textAlign:'center', color:'blue'}} >Minesweeper</h1>
            <Main />

        </div>
    );
}

export default App;

import React from "react";
import BabylonScene from './BabylonScene';
import BabylonFrame from "./BabylonFrame.jsx";

export default function App() {
    // @ts-ignore
    return (
        <div className="App">
            <BabylonFrame id={"renderCanvas"}/>
        </div>
    );
};

// ReactDOM.render(<App />, document.getElementById('app'));
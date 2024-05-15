import React from "react";
import BabylonFrame from "./BabylonFrame.jsx";
import Menu from "./menu/Menu.jsx";

export default function App() {
    // @ts-ignore
    return (
        <div className="App">
            <Menu/>
            {/*<BabylonFrame id={"renderCanvas"}/>*/}
            {/*<BabylonFrame id={"renderCanvas"}/>*/}
        </div>
    );
};

// ReactDOM.render(<App />, document.getElementById('app'));
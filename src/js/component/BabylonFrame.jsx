import React from "react";
import UI from "./UI.jsx";

export default function BabylonFrame(props){
    return (
        <div className={"babylonFrame"}>
            <canvas id={props.id}/>
            <UI/>
        </div>
    );
}
import React, { useState, useEffect } from "react";

export default function StatBar(props) {
    const color = props.color == null ? "rgba(255, 255, 255, 1)" : props.color;

    const [value, setValue] = useState(0);

    // Utilisez useEffect pour mettre à jour la valeur lorsque la prop value change
    useEffect(() => {
        setValue(props.value || 0);
    }, [props.value]);

    let style = {
        height : `${value}%`
    };
    if (props.gradient){
        style.backgroundImage = props.gradient;
    }else{
        style.backgroundColor = `${color}`
    }

    return (
        <div className={"statBar "+props.type}>
            <div
                className={"value"}
                style={style}
            ></div>
        </div>
    );
}
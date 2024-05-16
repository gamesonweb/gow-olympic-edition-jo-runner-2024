import './ui.css';
import StatBar from "./bar/StatBar.jsx";
export default function UI(){
    return (
        <div className={"ui"}>
            <div className={"distance"}>
                <p className={"value"}>1000 m</p>
            </div>
            <div className={"barContainer"}>
                <StatBar
                    type={"water"}
                    color = {"rgb(126 226 255)"}
                    value = {10}
                />
                <StatBar
                    type={"boost"}
                    color = {"rgb(255,249,126)"}
                    gradient = {"linear-gradient(0deg, rgb(255, 249, 126) 30%, rgb(255, 0, 0) 77%, rgb(106 5 5) 100%)"}
                    value = {15}
                />
            </div>

        </div>
    );
}
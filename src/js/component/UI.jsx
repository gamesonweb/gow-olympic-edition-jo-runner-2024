import './ui.css';
import StatBar from "./StatBar.jsx";
export default function UI(){
    return (
        <div className={"ui"}>
            <div className={"distance"}>
                <p>1000 m</p>
            </div>
            <div className={"barContainer"}>
                <StatBar
                    color = {"rgb(126 226 255)"}
                    value = {10}
                />
                <StatBar
                    color = {"rgb(255,249,126)"}
                    value = {15}
                />
            </div>

        </div>
    );
}
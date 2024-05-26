import './ui.css';
import StatBar from "./bar/StatBar.jsx";
import PlayerUI from "./PlayerUI.jsx";
export default function UI(){
    return (
        <div className={"ui"}>
         <PlayerUI playerID={0}/>
         <PlayerUI playerID={1}/>

        </div>
    );
}
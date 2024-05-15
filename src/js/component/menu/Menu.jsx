import {render} from "react-dom";
import './menu.css';
export default function Menu(){
    return(
        <div className={"menu"}>
            <div className={"band"}>
                <h1> JO RUNNER 2024</h1>
                <button>JOUER</button>
                <button>REGLES</button>
                <button>CONTRÔLES</button>
            </div>
        </div>
    );
}
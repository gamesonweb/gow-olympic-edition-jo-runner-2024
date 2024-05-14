import {Vector3} from "@babylonjs/core";
import {Player} from "../player/Player.ts";

export default abstract class ObstacleABS {
    protected position : Vector3;




    checkIfTouched(player : Player){

    }
    onTouched(){
        //Implement
    }

    dispose() {

    }
}
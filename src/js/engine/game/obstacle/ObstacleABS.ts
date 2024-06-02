import {Mesh, Vector3} from "@babylonjs/core";
import {Player} from "../player/Player.ts";

export default abstract class ObstacleABS {
    protected position : Vector3;
    protected mesh : Mesh;

    protected hasBeenTouched : boolean;




    checkIfTouched(player : Player){

    }
    onTouched(player : Player){
        //Implement
    }

    dispose() {
        this.mesh.dispose();
    }
}
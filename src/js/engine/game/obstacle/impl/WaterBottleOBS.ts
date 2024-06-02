import ObstacleABS from "../ObstacleABS.ts";
import {Scene, Vector3} from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";
import MudMaterial from "../../../../materials/impl/MudMaterial.ts";
import WaterBottleMaterial from "../../../../materials/impl/WaterBottleMaterial.ts";
import {Player} from "../../player/Player.ts";

export default class WaterBottleOBS extends ObstacleABS {

    static WATER_QTY = 7.5;
    constructor(scene: Scene, position: Vector3) {
        super();
        this.mesh = BABYLON.MeshBuilder.CreateGround('WaterBottle',{
            height : 0.1,
            width : 0.1,
            subdivisions : 2
        })
        this.mesh.position = position;
        position.y += position.y + 0.05
        this.mesh.material = new WaterBottleMaterial(scene,-1);
        this.mesh.rotate(new Vector3(-1,0,0),Math.PI/2);


        // this.sizeX = this.mesh. ;



    }


    onTouched(player: Player) {
        player.addWater(WaterBottleOBS.WATER_QTY);
        super.onTouched(player);
    }
}
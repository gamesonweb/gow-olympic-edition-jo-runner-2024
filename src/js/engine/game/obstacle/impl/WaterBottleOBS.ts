import ObstacleABS from "../ObstacleABS.ts";
import {Scene, Vector3} from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";
import MudMaterial from "../../../../materials/impl/MudMaterial.ts";
import WaterBottleMaterial from "../../../../materials/impl/WaterBottleMaterial.ts";

export default class WaterBottleOBS extends ObstacleABS {
    constructor(scene: Scene, position: Vector3) {
        super();
        this.mesh = BABYLON.MeshBuilder.CreateGround('WaterBottle',{
            height : 0.2,
            width : 0.2,
            subdivisions : 2
        })
        this.mesh.position = position;
        this.mesh.material = new WaterBottleMaterial(scene,1);
        this.mesh.rotate(new Vector3(-1,0,0),Math.PI/2);


    }


}
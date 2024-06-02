import PuddleABS from "../PuddleABS.ts";
import * as BABYLON from "@babylonjs/core";
import {Scene, Vector3} from "@babylonjs/core";
import MudMaterial from "../../../../materials/impl/MudMaterial.ts";
import WorldChunk from "../../world/WorldChunk.ts";

export default class MudPuddleOBS extends PuddleABS {


    constructor(scene:Scene,parentChunk:WorldChunk,position : Vector3) {
        super(parentChunk);
        this.mesh = BABYLON.MeshBuilder.CreateGround('mudPuddle',{
            height : 0.2,
            width : 0.2,
            subdivisions : 2
        })
        this.mesh.position = position;
        this.mesh.material = new MudMaterial(scene,1);
    }
}
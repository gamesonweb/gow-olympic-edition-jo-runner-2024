import {GOWMaterial, GOWMaterialPath} from "../GOWMaterial.ts";
import * as BABYLON from "@babylonjs/core";
import {Scene} from "@babylonjs/core";


export default class PlayerMaterial extends  GOWMaterial {

    constructor(scene: Scene, scale:number,index:number) {
        super(scene,GOWMaterialPath.ENTITY, "player", scale, scale,"/player_"+index);
        // this.mainPath = PathHelper.texturePath +"/map/building/building_2/";


        const samplingMode : number = BABYLON.Texture.NEAREST_NEAREST;
        const diffuse: BABYLON.Texture    =  new BABYLON.Texture(this.diffusePath, scene,
            false,false,samplingMode );
        this.diffuseTexture =  diffuse;
        // @ts-ignore
        this.diffuseTexture.uScale = scale;
        // @ts-ignore
        this.diffuseTexture.vScale = scale;
        this.diffuseTexture.hasAlpha = true;

        // this.diffuseTexture.
        console.log(this.diffusePath)
    }
}
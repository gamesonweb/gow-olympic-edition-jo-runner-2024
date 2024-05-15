import * as BABYLON from "@babylonjs/core";
import {PavementMaterial} from "../../../materials/impl/PavementMaterial.ts";
import {Mesh, Scene, Vector3} from "@babylonjs/core";
import WorldBuilding from "./WorldBuilding.ts";
import ObstacleABS from "../obstacle/ObstacleABS.ts";
import MudPuddleOBS from "../obstacle/impl/MudPuddleOBS.ts";

export default class WorldChunk{
    private ground:Mesh;
    private buildings : WorldBuilding[];
    public chunkMesh:Mesh;

    private obstacles : ObstacleABS[];

    private index;
    constructor(scene : Scene, position:Vector3 = new Vector3(0,0,0),index:number,leftBuildType:number=1,rightBuildType:number=1) {
        this.index = index;
        this.buildings = [];
        this.obstacles = [];
        this.ground =  BABYLON.MeshBuilder.CreateGround('ground',{
            height : 1,
            width : 1,
            subdivisions : 1
        });
        this.ground.position = position;

        let groundMaterial : PavementMaterial =  new PavementMaterial(scene,6);
        // console.log(groundMaterial.doesTextureExist(GOWMatieralTexture.DIFFUSE));
        // console.log(groundMaterial.doesTextureExist(GOWMatieralTexture.NORMAL));
        // groundMaterial.backFaceCulling = true;
        this.ground.material =groundMaterial;


        // BUILDINGS
        this.buildings.push(new WorldBuilding(
            scene,
            new Vector3(position.x+1, position.y,position.z),
            WorldChunk.multiplyWithRandomFactor(1,0.25),
            leftBuildType,
            true));
        this.buildings.push(  new WorldBuilding(
            scene,
            new Vector3(position.x+1, position.y,position.z),
            WorldChunk.multiplyWithRandomFactor(1,0.25),
            rightBuildType,
            false));


        //Adding test mud
        const mud = new MudPuddleOBS(scene,new Vector3(position.x, position.y+0.001,position.z));
        this.obstacles.push(mud)

        // @ts-ignore
        this.chunkMesh = BABYLON.Mesh.MergeMeshes([this.buildings[0].building,this.buildings[1].building,this.ground],
            true, false, null, false, true);
    }

    getZ() {
        return this.ground.position.z;
    }

    remove() {
        // console.log("remove");
        this.ground.dispose();
        this.chunkMesh.dispose();
        for(let i = 0 ; i < this.buildings.length ; i++) {
            this.buildings[i].dispose();
        }

        this.obstacles.forEach(obstacle => {
            obstacle.dispose();
        })


    }


     getIndex() {
        return this.index;
    }

    static multiplyWithRandomFactor(x:number, facteurMax:number) {
        // Générer un nombre aléatoire entre -facteurMax et facteurMax
        const randomFactor = (Math.random() * facteurMax);

        // Multiplier x par le facteur aléatoire et le retourner
        return x + randomFactor;
    }
}


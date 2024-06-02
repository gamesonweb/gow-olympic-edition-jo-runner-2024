import * as BABYLON from "@babylonjs/core";
import {PavementMaterial} from "../../../materials/impl/PavementMaterial.ts";
import {Mesh, Scene, Vector3} from "@babylonjs/core";
import WorldBuilding from "./WorldBuilding.ts";
import ObstacleABS from "../obstacle/ObstacleABS.ts";
import MudPuddleOBS from "../obstacle/impl/MudPuddleOBS.ts";
import WaterBottleOBS from "../obstacle/impl/WaterBottleOBS.ts";
import {Player} from "../player/Player.ts";
import WorldMap from "./WorldMap.ts";

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



        this.placeWaterBottle(scene,position);
        this.placeMudPaddle(scene,position);
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

    update(dt:number,player:Player) {
        this.obstacles.forEach(obstacle => {
            obstacle.checkIfTouched(player);
        })
    }

    static multiplyWithRandomFactor(x:number, facteurMax:number) {
        // Générer un nombre aléatoire entre -facteurMax et facteurMax
        const randomFactor = (Math.random() * facteurMax);

        // Multiplier x par le facteur aléatoire et le retourner
        return x + randomFactor;
    }

    removeObstacle(obstacle:ObstacleABS){
        const index = this.obstacles.indexOf(obstacle);
        if (index !== -1) {
            // Remove the obstacle from the array
            this.obstacles.splice(index, 1);
            // Dispose of the mesh to remove it from the scene
            obstacle.dispose();
        }
    }

    placeWaterBottle(scene:Scene,position:Vector3){
        //Adding test water
        const choice = WorldMap.randomIntFromInterval(-3,3);

        if (choice > 0){
            for (let i = 0; i < choice; i++){
                const waterBottle = new WaterBottleOBS(scene,this,new Vector3(WorldChunk.multiplyWithRandomFactor(position.x-0.3,0.75),position.y+0.001,position.z));
                this.obstacles.push(waterBottle)
            }
        }

    }

    placeMudPaddle(scene:Scene,position:Vector3){
        //Adding test water
        //Adding test mud
        const mud = new MudPuddleOBS(scene,this,new Vector3(WorldChunk.multiplyWithRandomFactor(position.x-0.3,0.75),position.y+0.001,position.z));
        this.obstacles.push(mud)
    }
}


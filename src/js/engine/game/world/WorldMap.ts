/* tslint:disable:no-unused-variable */
import WorldChunk from "./WorldChunk.ts";
import {Scene, Vector3} from "@babylonjs/core";
import RunnerEngine from "../../RunnerEngine.ts";

export default class WorldMap{
    private chunks : WorldChunk[];
    private scene : Scene;
    private lastChunkIndex:number = 0;
    private firstChunkIndex:number = 0;
    private displayedChunks:number;
    private deletedChunkAmount:number = 0

    private static HIDDING_OFFSET = 1.25;
    private static DISPLAY_OFFSET: number = 8;
    constructor(scene : Scene,displayedChunks : number = 3){
        this.scene = scene;
        this.chunks = [];
        this.displayedChunks = displayedChunks;
        for(let i = 0 ; i<displayedChunks ; i++){
            this.createChunk(i)
            this.lastChunkIndex=i;
        }
        this.firstChunkIndex = this.chunks[0].getIndex();
    }


    update(deltaTime : number ){
        // console.log(deltaTime)
        let playerOrder = RunnerEngine.getPlayerOrder();
        //In case equality
        if (playerOrder.length==0){
            playerOrder = [0,1];
        }
        this.chunks.forEach((chunk) =>{
            // console.log(RunnerEngine.getPlayer(0).getZ())

            //Removal of the chunk
            if (chunk.getZ()+WorldMap.HIDDING_OFFSET<RunnerEngine.getPlayer(playerOrder[1]).getZ()){
                //remove passed chunk
                this.removeChunk(chunk);
                this.deletedChunkAmount++;
            }

        })



        playerOrder.forEach((playerId) => {
            const player = RunnerEngine.getPlayer(playerId);
            const playerChunk = this.getChunkIndexFromPosition(player.getZ());
            this.chunks.forEach((chunk) =>{
                chunk.update(deltaTime,player)
            })

            // console.log(`Player ${playerId} is in chunk ${playerChunk}`);
        });
        // console.log(RunnerEngine.getPlayer(0).getZ(),this.deletedChunkAmount)

        // Add chunks in front of the first player
        while (this.lastChunkIndex < RunnerEngine.getPlayer(playerOrder[0]).getZ() + WorldMap.DISPLAY_OFFSET) {
            this.lastChunkIndex++;
            this.createChunk(this.lastChunkIndex);
        }
    }

    removeChunk(chunk: WorldChunk){
        const index = this.chunks.indexOf(chunk);
        if (index !== -1) {
            this.chunks.splice(index, 1);
            chunk.remove();
        }
    }

    createChunk(index: number) {
        const rType = WorldMap.randomIntFromInterval(1,9) ;
        const lType =WorldMap.randomIntFromInterval(1,9) ;
        const newChunk = new WorldChunk(this.scene, new Vector3(0, 0, index), index,lType,rType);
        this.chunks.push(newChunk);
    }


     static randomIntFromInterval(min:number, max:number) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getChunkIndexFromPosition(zPosition: number): number {
        return Math.floor(zPosition);
    }

}
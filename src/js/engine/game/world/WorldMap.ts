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

    private static HIDDING_OFFSET = 1.25;
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

        //remove passed chunk of last place
        let lastPlaceChunk : WorldChunk = this.chunks[this.firstChunkIndex];
        if (lastPlaceChunk.getZ()+WorldMap.HIDDING_OFFSET < Math.min(RunnerEngine.getPlayer(0).getZ(), RunnerEngine.getPlayer(1).getZ())){
            this.removeChunk(lastPlaceChunk);
        }

        //create new chunk for first place
        let firstPlaceChunk : WorldChunk = this.chunks[this.lastChunkIndex - this.displayedChunks+1];
        if (firstPlaceChunk.getZ()+WorldMap.HIDDING_OFFSET < Math.max(RunnerEngine.getPlayer(0).getZ(), RunnerEngine.getPlayer(1).getZ())){
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
        const rType = this.randomIntFromInterval(1,9) ;
        const lType =this.randomIntFromInterval(1,9) ;
        const newChunk = new WorldChunk(this.scene, new Vector3(0, 0, index), index,lType,rType);
        this.chunks.push(newChunk);
    }


     randomIntFromInterval(min:number, max:number) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}
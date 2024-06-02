import {Mesh, Vector3} from "@babylonjs/core";
import {Player} from "../player/Player.ts";

export default abstract class ObstacleABS {
    protected position : Vector3;
    protected mesh : Mesh;

    protected hasBeenTouched : boolean;

    static Z_OFFSET : number = 0.01;
    static X_OFFSET : number = 0.01;
    static Y_OFFSET : number = 0.01;





    checkIfTouched(player : Player){
        if (this.isColliding(player)) {
            this.onTouched(player);
        }



    }

    isColliding(player: Player): boolean {
        const x = this.getBoundingBox().x;
        const y = this.getBoundingBox().y;
        const z = this.getBoundingBox().z;
        return (
            Math.abs(this.mesh.position.x - player.getX()) < (this.getWidth() + player.getWidth()) / 2 &&
            Math.abs(this.mesh.position.y - player.getY()) < (this.getHeight() + player.getHeight()) / 2 &&
            Math.abs(this.mesh.position.z - player.getZ()) < (this.getDepth() + player.getDepth()) / 2
        );
    }

    onTouched(player : Player){
        //Implement
        // console.log("Touched !")
        this.dispose()
    }

    dispose() {
        this.mesh.dispose();
    }

    getBoundingBox(){
        return this.mesh.getBoundingInfo().boundingBox.extendSize;
    }

    getWidth(){
        return this.getBoundingBox().x*2
    }

    getHeight(){
        return this.getBoundingBox().y*2;
    }

    getDepth(){
        return this.getBoundingBox().z*2;
    }
}
// Player.ts
import * as BABYLON from '@babylonjs/core';
import {Camera, Vector3} from "@babylonjs/core";
import {InputController} from "../../../helper/InputController.ts";
// import PlayerEffect from "../PlayerEffect.ts";
import Const from "../../../const/Const.ts";
import SpamBoost from "./SpamBoost.ts";
import UI from "../../../ui/UI.ts";
import KeyMap from "./KeyMap.ts";


export class Player {
    mesh: BABYLON.Mesh;
    // private effects: PlayerEffect = null;
    private waterLevel = 100; //MAX 100

    private inputController: InputController;

    private baseVelocity : number;
    private baseDodgeVelocity : number;
    private camera: Camera;

    private jumpVelocity : number = Const.PLAYER_JUMP_VELOCITY;
    private isFalling : boolean = false;


    private spamBoost : SpamBoost = new SpamBoost();
    private playerIndex = -1;
    private keyMap : KeyMap = null;
    // private

    constructor(scene: BABYLON.Scene,camera: BABYLON.Camera,index: number) {
        // this.mesh = BABYLON.MeshBuilder.CreateBox('playerBox', { size: 0.1}, scene);
        this.playerIndex = index;
        this.mesh = BABYLON.MeshBuilder.CreatePlane('playerBox',
            {
                size: 0.1,


            }, scene);
        this.camera = camera;
        this.camera.parent = this.mesh;
        this.camera.maxZ = 100;
        this.camera.minZ = 0.01;
        // this.mesh.renderingGroupId = 2;
        this.mesh.position = new Vector3(0,Const.PLAYER_MIN_Y,0) // Y hauteur
        const angle = Math.PI / 45 ; // Angle d'inclinaison en radians
        this.inputController = new InputController(scene);
        this.baseVelocity = 0.2;
        this.baseDodgeVelocity = 0.8;
        this.mesh.rotate(BABYLON.Axis.X, angle, BABYLON.Space.LOCAL);
        // this.mesh.receiveShadows =true;


        // const positionGizmo = new BABYLON.PositionGizmo();
        // positionGizmo.attachedMesh = this.mesh;

        // Ajoutez ici la logique pour positionner le joueur, ajouter des animations, etc.
        let layout = InputController.detectKeyboardLayout();
        // console.log(layout);
        if (this.playerIndex == 0) {
            console.log("p1");
            if (layout === 'AZERTY') {
                this.keyMap = new KeyMap("z", "q", "d", "s");
            } else {
                this.keyMap = new KeyMap("w", "a", "d", "s");
            }
        } else {
            console.log("p2");
            this.keyMap = new KeyMap("u", "h", "k", "j");
        }
    }

    public update(dt : number): void {
        //Decrease spam boost
        this.spamBoost.update(dt);


        const position : BABYLON.Vector3 = this.mesh.position;





        //Spam Boost
        if (this.inputController.isKeyDown(this.keyMap.boost) && this.waterLevel>=0){
            console.log("spamBoost")
            this.spamBoost.spam(dt);
        }else {
            this.spamBoost.unspam(dt);
        }


        let positionZ = position.z+(this.baseVelocity + this.spamBoost.getValue())*dt;
        let positionX = position.x;
        let positionY = position.y;

        //GOING LEFT
        if (this.inputController.isKeyDown(this.keyMap.left)){
            positionX -= (this.baseDodgeVelocity) * dt;
            if (positionX < Const.PLAYER_MIN_X) positionX = Const.PLAYER_MIN_X;
        }

        //GOING RIGHT
        if (this.inputController.isKeyDown(this.keyMap.right)){
            positionX +=  this.baseDodgeVelocity * dt;
            if (positionX > Const.PLAYER_MAX_X) positionX = Const.PLAYER_MAX_X;
        }

        //JUMPING
        if(this.inputController.isKeyDown(this.keyMap.jump) && !this.isFalling){
            positionY += this.jumpVelocity * dt;
            this.jumpVelocity *= Const.GRAVITY;

            if(this.jumpVelocity < 0.3){
                this.isFalling = true;
            }
        }

        if (this.inputController.isKeyUp(this.keyMap.jump) && positionY > Const.PLAYER_MIN_Y) {
            this.isFalling = true;
        }


        //Falling handling
        if (this.isFalling) {
            if (this.jumpVelocity > 0) this.jumpVelocity = -0.15;
            if(positionY > Const.PLAYER_MIN_Y) {
                positionY += (this.jumpVelocity * dt) ; //* (Const.PLAYER_MAX_Y/positionY*0.3)
                this.jumpVelocity *= (2-Const.GRAVITY)

            }else{
                this.isFalling = false;
                positionY = Const.PLAYER_MIN_Y;
                this.jumpVelocity = Const.PLAYER_JUMP_VELOCITY;
            }
        }


        //Water level variation
        const spamBoostPercent = this.spamBoost.getPercent();
        if (this.waterLevel>0){
            this.waterLevel -= spamBoostPercent * dt * 0.02 + 0.001;
            // console.log(this.waterLevel)
        }

        this.mesh.position = new Vector3(positionX,positionY,positionZ);
        UI.setDistanceValue(positionZ,this.playerIndex);
        UI.setBoostLevel(this.spamBoost.getValue(),this.playerIndex);
        UI.setWaterLevel(this.waterLevel,this.playerIndex);


        // console.log(1/dt);

    }

    public setParent(parent:Node){
        // @ts-ignore
        this.mesh.parent = parent;
    }

    getZ() {
        return this.mesh.position.z;
    }

    getPlayerIndex() {
        return this.playerIndex;
    }
}
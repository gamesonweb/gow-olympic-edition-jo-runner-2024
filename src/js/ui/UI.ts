import SpamBoost from "../engine/game/player/SpamBoost.ts";

export default class UI{
    private static distanceElements : HTMLElement[] = [];
    private static waterLevelElements : HTMLElement[] = [];
    private static boostLevelElements : HTMLElement[] = [];


    static init(){
        this.distanceElements.push(
            document.querySelector(".distance .value")//TODO ADD THE SECOND ONE
        );
        this.waterLevelElements.push(
            document.querySelector(".statBar.water .value")//TODO ADD THE SECOND ONE
        );
        this.boostLevelElements.push(
            document.querySelector(".statBar.boost .value")//TODO ADD THE SECOND ONE
        );
    }


    static setDistanceValue(value:number,playerIndex:number = 0){
        this.distanceElements[playerIndex].textContent = Math.floor(value*2) + " m";
    }

    static setWaterLevel(value:number,playerIndex:number = 0){
        this.waterLevelElements[playerIndex].style.height = String(Math.floor(value));
    }

    static setBoostLevel(value:number,playerIndex:number = 0){
        const displayValue = value/ SpamBoost.MAX * 100  ;
        this.boostLevelElements[playerIndex].style.height = String(Math.floor(displayValue)+"%");
    }
}
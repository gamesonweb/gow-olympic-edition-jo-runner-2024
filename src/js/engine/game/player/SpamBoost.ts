export default class SpamBoost{

    private min : number = 0;
    private value : number = 0;
    private max : number = 2;//15

    private valueIncrease : number = 18.5;
    private valueDecrease : number = 2.5;




    private lastSpam = 0;
    private spamInterval = 0.01;


    private decreaseAccumulator : number = 0.0;

    private hasBeendReleased = true;

    spam(dt:number){
        if (this.hasBeendReleased){
            this.lastSpam = dt;
            this.value += this.valueIncrease * dt;
            if (this.value > this.max) this.value = this.max;
            this.hasBeendReleased = false;
        }



    }
    unspam(dt:number){
        this.hasBeendReleased = true;
    }

    update(dt:number){
        //Decrease
        this.decreaseAccumulator += dt;
        if (this.decreaseAccumulator >= this.spamInterval ){
            this.value -= this.valueDecrease * dt;
            if (this.value < this.min) this.value = this.min;
            this.decreaseAccumulator = 0.0;
        }
        console.log(this.value)

    }

    getValue() {
        return this.value;
    }

    hasBeenSpammed(){
        return this.hasBeendReleased;
    }
}
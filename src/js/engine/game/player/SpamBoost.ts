export default class SpamBoost{

    public static MIN : number = 0;
    private value : number = 0;
    public static MAX : number = 3;//15

    private valueIncrease : number = 15.5;
    private valueDecrease : number = 1.5;




    private lastSpam = 0;
    private spamInterval = 0.01;


    private decreaseAccumulator : number = 0.0;

    private hasBeendReleased = true;

    spam(dt:number){
        if (this.hasBeendReleased){
            this.lastSpam = dt;

            let increase = this.valueIncrease
            if (this.value <= SpamBoost.MAX/4){
                increase *= 2;
            }else if (this.value >= SpamBoost.MAX/3){
                increase /= 1.2 ;
            }

            this.value += increase * dt;
            if (this.value > SpamBoost.MAX) this.value = SpamBoost.MAX;
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
            if (this.value < SpamBoost.MIN) this.value = SpamBoost.MIN;
            this.decreaseAccumulator = 0.0;
        }
        // console.log(this.value)

    }

    getValue() {
        return this.value;
    }

    hasBeenSpammed(){
        return this.hasBeendReleased;
    }

    getPercent(){
        return this.value/ SpamBoost.MAX * 100;
    }
}
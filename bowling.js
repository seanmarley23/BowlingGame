class Bowling{
    constructor(){
        this.rolls = [];
    }

    roll(numberOfPins){
        this.rolls.push(numberOfPins);
    }

    get score(){
        let total = 0;
        let rollCount = 0;

        for(let i =0; i < 10; i++){
            if(this.rolls[i] === 10){
                total += this.rolls[i] + this.rolls[i+1] + this.rolls[i+2];
                rollCount++;
                continue;
            }

            let frameTotal = this.rolls[rollCount] + this.rolls[rollCount+1];
            if(frameTotal === 10){
                total = frameTotal + this.rolls[rollCount+2];
            }
            else{
                total += frameTotal;
            }
            rollCount+=2;
        }

        return total;
    }
}
module.exports = Bowling;
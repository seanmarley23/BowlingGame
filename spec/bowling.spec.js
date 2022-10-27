const Bowling = require("../bowling.js");
let bowling;

beforeEach(() => {
    bowling = new Bowling;
});

it('should have a score of 20 if every roll hits 1 pin', () => {
    for(let i = 0; i < 20; i++){
        bowling.roll(1);
    }
    expect(bowling.score).toEqual(20);
});

it('should accurately calculate after a spare', () => {
    bowling.roll(5);
    bowling.roll(5); //spare
    bowling.roll(2); //score at this stage should be 14
    for (let index = 0; index < 17; index++) {
        bowling.roll(0); 
    }
    expect(bowling.score).toEqual(14);
});

it('should accurately calculate after a strike', () => {
    bowling.roll(10); //strike
    bowling.roll(5); 
    bowling.roll(2); //score at this stage should be 24
    for (let index = 0; index < 16; index++) {
        bowling.roll(0); 
    }
    expect(bowling.score).toEqual(24);
});
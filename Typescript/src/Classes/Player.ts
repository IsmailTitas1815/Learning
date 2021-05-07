import {IsPlayer} from '../interface/isPlayer';

export class Player implements IsPlayer {
    constructor(
        public name: string,
        public age: number,
        readonly country: string){}

    play(){
        console.log(`${this.name} ${this.age} ${this.country}`);
    }
}



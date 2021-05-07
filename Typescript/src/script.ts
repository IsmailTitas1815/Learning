import { Player } from './Classes/Player.js';
import {IsPlayer} from './interface/isPlayer';

let titas = new Player("titas",23,"Bangladesh");
let ismail : IsPlayer;
ismail = new Player("ismail",23,"Bangladesh");
titas.play();

const players : IsPlayer[]=[];

players.push(titas)
players.push(ismail)



// interface RectangleOptions {
//     width: number;
//     length: number;
// }

// function draw(options: RectangleOptions){
//     let width = options.width;
//     let length = options.length;
// }

// let threeDoptions = {
//     width: 30,
//     length: 20,
//     height: 10
// }

// draw(threeDoptions);


// generic

// const addID = <T extends object>(obj: T)=>{
//     let id = Math.floor(Math.random()*100);
//     return {
//         ...obj,
//         id
//     }
// }

// let user = addID({
//     name: "titas",
//     age: 23,
//     country : "Bangladesh"
// })


interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}

const response1: APIResponse<object> = {
    status: 200,
    type: "success",
    data: {
        name: "something"
    }
}
import { Player } from './Classes/Player.js';
let titas = new Player("titas", 23, "Bangladesh");
let ismail;
ismail = new Player("ismail", 23, "Bangladesh");
titas.play();
const players = [];
players.push(titas);
players.push(ismail);
const response1 = {
    status: 200,
    type: "success",
    data: {
        name: "something"
    }
};

import { IdleMon } from "./idlemon";
import { Move } from "./move";
import { humanIndex } from "./type";


function createFirstIdleMon(name : string) {

        var moveSet = new Array<Move>();
        var allowedMoves = new Array<Move>();

        var health = 45;
        var attack = 45;
        var defense = 45;
        var speed = 45;
        var lvl = 2;

        let stomp = new Move("Stomp", humanIndex);
        console.log(stomp.info());

        let headbutt = new Move("Headbutt", humanIndex);
        console.log(headbutt.info());
        moveSet[0] = headbutt;
        allowedMoves[0] = headbutt;
        allowedMoves[1] = stomp;

        var firstIdleMon = new IdleMon(name, health, attack, defense, moveSet, allowedMoves, lvl, humanIndex);
        firstIdleMon.usemove(headbutt.name);
        console.log(firstIdleMon.info());
}

createFirstIdleMon("HealloWorldIdleMon");
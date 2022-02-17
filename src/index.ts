import { IdleMon } from "./idlemon";
import { Move } from "./move";
import { MoveNames, nameToMoveMap } from "./moves";
import { TypeInfo } from "./type";


function createFirstIdleMon(name : string) {

        var moveSet = new Array<Move>();
        var allowedMoves = new Array<Move>();

        var health = 45;
        var attack = 45;
        var defense = 45;
        var speed = 45;
        var lvl = 2;

        moveSet.push(nameToMoveMap.get(MoveNames.StompName));
        allowedMoves.push(nameToMoveMap.get(MoveNames.StompName));
        allowedMoves.push(nameToMoveMap.get(MoveNames.HeadbuttName));


        var firstIdleMon : IdleMon = new IdleMon(name, health, attack, defense, speed, moveSet, allowedMoves, lvl, TypeInfo.HumanIndex);
        var secondIdleMon : IdleMon = new IdleMon("enemy", health, attack, defense, speed, moveSet, allowedMoves, lvl, TypeInfo.HumanIndex);
        console.log(firstIdleMon.info());
        console.log(secondIdleMon.info());
        firstIdleMon.useMoveOn(MoveNames.StompName, secondIdleMon);
}

createFirstIdleMon("HealloWorldIdleMon");
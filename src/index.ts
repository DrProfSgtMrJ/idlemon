import { IdleMon } from "./idlemon";
import { Move } from "./move";
import { MoveNames, nameToMoveMap } from "./moves";
import { TypeInfo } from "./type";


const IntoMessage = "\n\t\tHello, and welcome to the IdleMon Universe." +
                    "\n\t\tI am DrProfSgtMrJ, the leading scientist studying all things idlemon" +
                    "\n\t\t";

// prints the intro message and starts the game loop
function startGame() {
    console.log(IntoMessage);
    //GameLoop();
}

function GameLoop() {
    while (true) {

    }
}

function createFirstIdleMon(name : string) {

        var moveSet = new Array<Move>();
        var allowedMoves = new Array<Move>();

        var health = 45;
        var attack = 45;
        var defense = 45;
        var speed = 45;
        var lvl = 2;

        moveSet.push(nameToMoveMap.get(MoveNames.StompName));
        moveSet.push(nameToMoveMap.get(MoveNames.HeadbuttName));
        allowedMoves.push(nameToMoveMap.get(MoveNames.StompName));
        allowedMoves.push(nameToMoveMap.get(MoveNames.HeadbuttName));


        var firstIdleMon : IdleMon = new IdleMon(name, health, attack, defense, speed, moveSet, allowedMoves, lvl, TypeInfo.HumanIndex);
        var secondIdleMon : IdleMon = new IdleMon("enemy", health, attack, defense, speed, moveSet, allowedMoves, lvl, TypeInfo.HumanIndex);
        console.log(firstIdleMon.info());
        console.log(secondIdleMon.info());
        firstIdleMon.useMoveOn(MoveNames.StompName, secondIdleMon);
}

startGame();
//createFirstIdleMon("HealloWorldIdleMon");
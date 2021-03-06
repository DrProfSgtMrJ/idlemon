"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const idlemon_1 = require("./idlemon");
const moves_1 = require("./moves");
const type_1 = require("./type");
const IntoMessage = "\n\t\tHello, and welcome to the IdleMon Universe.\n\t\tI am DrProfSgtMrJ, the leading scientist studying all things idlemon";
// starts the game loop
function startGame() {
    while (true) {
        console.log(IntoMessage);
        break;
    }
}
function createFirstIdleMon(name) {
    var moveSet = new Array();
    var allowedMoves = new Array();
    var health = 45;
    var attack = 45;
    var defense = 45;
    var speed = 45;
    var lvl = 2;
    moveSet.push(moves_1.nameToMoveMap.get(moves_1.MoveNames.StompName));
    moveSet.push(moves_1.nameToMoveMap.get(moves_1.MoveNames.HeadbuttName));
    allowedMoves.push(moves_1.nameToMoveMap.get(moves_1.MoveNames.StompName));
    allowedMoves.push(moves_1.nameToMoveMap.get(moves_1.MoveNames.HeadbuttName));
    var firstIdleMon = new idlemon_1.IdleMon(name, health, attack, defense, speed, moveSet, allowedMoves, lvl, type_1.TypeInfo.HumanIndex);
    var secondIdleMon = new idlemon_1.IdleMon("enemy", health, attack, defense, speed, moveSet, allowedMoves, lvl, type_1.TypeInfo.HumanIndex);
    console.log(firstIdleMon.info());
    console.log(secondIdleMon.info());
    firstIdleMon.useMoveOn(moves_1.MoveNames.StompName, secondIdleMon);
}
startGame();
//createFirstIdleMon("HealloWorldIdleMon");

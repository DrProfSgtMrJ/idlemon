"use strict";
/* Megalist of moves */
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameToMoveMap = exports.MoveNames = void 0;
const move_1 = require("./move");
const type_1 = require("./type");
class MoveNames {
}
exports.MoveNames = MoveNames;
MoveNames.HeadbuttName = "Headbutt";
MoveNames.StompName = "Stomp";
let headbutt = new move_1.Move(MoveNames.HeadbuttName, type_1.humanIndex, headbuttFunction);
let stomp = new move_1.Move(MoveNames.StompName, type_1.humanIndex, stompFunction);
exports.nameToMoveMap = new Map([
    [MoveNames.HeadbuttName, headbutt],
    [MoveNames.StompName, stomp]
]);
function headbuttFunction(you, them) {
}
function stompFunction(you, them) {
    // check if the move is of the sametype as you
    let moveIsOfSameTypeAsYou = type_1.humanIndex === you.typeNum;
    // damage will first start with your attack
    // will use full attack if same type as you, otherwise, do 75% of your attack
    var damage = moveIsOfSameTypeAsYou ? you.attack : you.attack * 0.75;
    if (isSuperEffective(type_1.humanIndex, them.typeNum)) {
        console.log("IT'S SUPER EFFECTIVE");
        // do 2* the damage if super effective to them
        damage = damage * 2;
    }
    else if (isWeak(type_1.humanIndex, them.typeNum)) {
        console.log("It's not very effetive...");
        // do 25% of the damage if weak to them
        damage - damage * 0.25;
    }
    // apply damage to them
    // have to account for defense first
    let reduceHealthBy = them.defense - damage;
    them.defense = reduceHealthBy <= 0 ? 0 : them.defense - damage;
    them.health = reduceHealthBy <= 0 ? them.health + reduceHealthBy : them.health;
    console.log(them.name + " was stomped for " + damage + " damage" + " new defense: " + them.defense + " new health: " + them.health);
}
function isSuperEffective(typeIndex, typeIndex2) {
    // true if typeIndex is super effective to typeIndex2
    return type_1.typeSuperEffectiveNumMap[typeIndex] === typeIndex2;
}
function isWeak(typeIndex, typeIndex2) {
    // true if typeIndex is weak against typeIndex2
    return type_1.typeWeaknessNumMap[typeIndex] === typeIndex2;
}

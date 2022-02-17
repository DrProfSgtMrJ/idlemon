"use strict";
/* Megalist of moves */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveArrays = exports.nameToMoveMap = exports.MoveDescriptions = exports.MoveNames = void 0;
const move_1 = require("./move");
const type_1 = require("./type");
class MoveNames {
}
exports.MoveNames = MoveNames;
MoveNames.HeadbuttName = "Headbutt";
MoveNames.StompName = "Stomp";
MoveNames.SpitName = "Spit";
class MoveDescriptions {
}
exports.MoveDescriptions = MoveDescriptions;
MoveDescriptions.HeadbuttDescription = "A powerfull move that inflicts damage onto the user as well";
MoveDescriptions.StompDescription = "A basic attack";
MoveDescriptions.SpitDescription = "An attack that inflicts damage over time to a target";
let headbutt = new move_1.Move(MoveNames.HeadbuttName, type_1.TypeInfo.HumanIndex, MoveDescriptions.HeadbuttDescription, headbuttFunction);
let stomp = new move_1.Move(MoveNames.StompName, type_1.TypeInfo.HumanIndex, MoveDescriptions.StompDescription, stompFunction);
let spit = new move_1.Move(MoveNames.SpitName, type_1.TypeInfo.LizardIndex, MoveDescriptions.SpitDescription, spitFunction);
exports.nameToMoveMap = new Map([
    [MoveNames.HeadbuttName, headbutt],
    [MoveNames.StompName, stomp],
    [MoveNames.SpitName, spit]
]);
// headbutt is a super strong move that will ignore the enemy's defense
// but it will hurt you for half the damage done to them
function headbuttFunction(you, them) {
    let type = type_1.TypeInfo.HumanIndex;
    // damage will first start with your attack
    // will use full attack if same type as you, otherwise, do 75% of your attack
    var damage = you.isSameType(type) ? you.attack : you.attack * 0.75;
    if (them.isMoveSuperEffetiveAgainstYou(type)) {
        console.log("IT'S SUPER EFFECTIVE");
        // do 2* the damage if super effective to them
        damage = damage * 2;
    }
    else if (them.isMoveWeakAgainstYou(type)) {
        console.log("It's not very effetive...");
        // do 25% of the damage if weak to them
        damage - damage * 0.25;
    }
    // increase damage so it's strong
    damage = damage * 1.75;
    them.health = them.health - damage;
    console.log(them.name + " was headbutted for " + damage + " damage" + " new health: " + them.health);
    // you get hurt for 3/4 of your damage done
    let hurtBy = (damage * 0.75);
    you.health = you.health - hurtBy;
    console.log(you.name + " was hurt for " + (hurtBy) + ". OUCH! New health: " + you.health);
}
// a basic attack essentially
function stompFunction(you, them) {
    let type = type_1.TypeInfo.HumanIndex;
    // damage will first start with your attack
    // will use full attack if same type as you, otherwise, do 75% of your attack
    var damage = you.isSameType(type) ? you.attack : you.attack * 0.75;
    // check if the move is of the sametype as you
    if (them.isMoveSuperEffetiveAgainstYou(type)) {
        console.log("IT'S SUPER EFFECTIVE");
        // do 2* the damage if super effective to them
        damage = damage * 2;
    }
    else if (them.isMoveWeakAgainstYou(type)) {
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
function spitFunction(you, them) {
}
// class of arrays of moves filtered by type
class MoveArrays {
}
exports.MoveArrays = MoveArrays;
MoveArrays.HumanMovesArray = [...exports.nameToMoveMap.values()].filter(move => move.typeNum === type_1.TypeInfo.HumanIndex);
MoveArrays.LizarMovesArray = [...exports.nameToMoveMap.values()].filter(move => move.typeNum === type_1.TypeInfo.LizardIndex);
MoveArrays.MagicMovesArray = [...exports.nameToMoveMap.values()].filter(move => move.typeNum === type_1.TypeInfo.MagicIndex);
MoveArrays.SpaghettiMovesArray = [...exports.nameToMoveMap.values()].filter(move => move.typeNum === type_1.TypeInfo.SpaghettiIndex);
;

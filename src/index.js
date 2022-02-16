"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const idlemon_1 = require("./idlemon");
const move_1 = require("./move");
const type_1 = require("./type");
function createFirstIdleMon(name) {
    var moveSet = new Array();
    var allowedMoves = new Array();
    var health = 45;
    var attack = 45;
    var defense = 45;
    var speed = 45;
    var lvl = 2;
    let stomp = new move_1.Move("Stomp", type_1.humanIndex, (you, them) => {
        // true if move type is super effective to them
        let moveIsSuperEffectiveToThem = type_1.typeSuperEffectiveNumMap[type_1.humanIndex] === them.typeNum;
        // true if move type is weak to them
        let moveIsWeakToThem = type_1.typeWeaknessNumMap[type_1.humanIndex] === them.typeNum;
        if (moveIsSuperEffectiveToThem) {
            console.log("IT'S SUPER EFFECTIVE");
        }
        else if (moveIsWeakToThem) {
            console.log("It's not very effetive...");
        }
        // check if the move is of the sametype as you
        let moveIsOfSameTypeAsYou = type_1.humanIndex === you.typeNum;
        // damage will first start with your attack
        // will use full attack if same type as you, otherwise, do 75% of your attack
        var damage = moveIsOfSameTypeAsYou ? you.attack : you.attack * 0.75;
        // do 2* the damage if super effective to them
        // do 25% of the damage if weak to them
        // otherwise, just do 1* the damage
        damage = moveIsSuperEffectiveToThem ? damage * 2 :
            moveIsWeakToThem ? damage * 0.25 : damage;
        // apply damage to them
        // have to account for defense first
        let reduceHealthBy = them.defense - damage;
        them.defense = reduceHealthBy <= 0 ? 0 : them.defense - damage;
        them.health = reduceHealthBy <= 0 ? them.health + reduceHealthBy : them.health;
        console.log(them.name + " was stomped for " + damage + " damage" + " new defense: " + them.defense + " new health: " + them.health);
    });
    console.log(stomp.info());
    let headbutt = new move_1.Move("Headbutt", type_1.humanIndex, (you, them) => {
    });
    console.log(headbutt.info());
    moveSet[0] = stomp;
    allowedMoves[0] = headbutt;
    allowedMoves[1] = stomp;
    var firstIdleMon = new idlemon_1.IdleMon(name, health, attack, defense, speed, moveSet, allowedMoves, lvl, type_1.humanIndex);
    var secondIdleMon = new idlemon_1.IdleMon("enemy", health, attack, defense, speed, moveSet, allowedMoves, lvl, type_1.humanIndex);
    console.log(firstIdleMon.info());
    console.log(secondIdleMon.info());
    firstIdleMon.useMoveOn(stomp.name, secondIdleMon);
}
createFirstIdleMon("HealloWorldIdleMon");

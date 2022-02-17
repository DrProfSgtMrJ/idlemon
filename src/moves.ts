/* Megalist of moves */

import { IdleMon } from "./idlemon";
import { Move } from "./move";
import { humanIndex, typeSuperEffectiveNumMap, typeWeaknessNumMap } from "./type";


export class MoveNames {
    static readonly HeadbuttName = "Headbutt";
    static readonly StompName = "Stomp";
}


let headbutt = new Move(MoveNames.HeadbuttName, humanIndex, headbuttFunction);
let stomp = new Move(MoveNames.StompName, humanIndex, stompFunction);

export let nameToMoveMap = new Map<string, Move>([
    [MoveNames.HeadbuttName, headbutt],
    [MoveNames.StompName, stomp]
]);

// headbutt is a super strong move that will ignore the enemy's defense
// but it will hurt you for half the damage done to them
function headbuttFunction(you: IdleMon, them: IdleMon) {
    // check if the move is of the sametype as you
    let moveIsOfSameTypeAsYou : boolean = humanIndex === you.typeNum;

    // damage will first start with your attack
    // will use full attack if same type as you, otherwise, do 75% of your attack
    var damage : number = moveIsOfSameTypeAsYou ? you.attack : you.attack * 0.75; 

    if (isSuperEffective(humanIndex, them.typeNum)) {
        console.log("IT'S SUPER EFFECTIVE");
        // do 2* the damage if super effective to them
        damage = damage * 2;
    }
    else if (isWeak(humanIndex, them.typeNum)) {
        console.log("It's not very effetive...");
        // do 25% of the damage if weak to them
        damage - damage * 0.25;
    }

    // increase damage so it's strong
    damage = damage * 1.75;
    them.health = them.health - damage;
    console.log(them.name + " was headbutted for " + damage + " damage" + " new health: " + them.health);
    // you get hurt for 1/2 of your damage done
    let hurtBy : number = (damage * 0.5);
    you.health = you.health - hurtBy;
    console.log(you.name + " was hurt for " + (hurtBy) +". OUCH!");
}

function stompFunction(you: IdleMon, them: IdleMon) {
    // check if the move is of the sametype as you
    let moveIsOfSameTypeAsYou : boolean = humanIndex === you.typeNum;

    // damage will first start with your attack
    // will use full attack if same type as you, otherwise, do 75% of your attack
    var damage : number = moveIsOfSameTypeAsYou ? you.attack : you.attack * 0.75; 

    if (isSuperEffective(humanIndex, them.typeNum)) {
        console.log("IT'S SUPER EFFECTIVE");
        // do 2* the damage if super effective to them
        damage = damage * 2;
    }
    else if (isWeak(humanIndex, them.typeNum)) {
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



function isSuperEffective(typeIndex : number, typeIndex2 : number): boolean {
    // true if typeIndex is super effective to typeIndex2
    return typeSuperEffectiveNumMap[typeIndex] === typeIndex2;
}

function isWeak(typeIndex: number, typeIndex2 : number): boolean {
    // true if typeIndex is weak against typeIndex2
    return typeWeaknessNumMap[typeIndex] === typeIndex2;
}
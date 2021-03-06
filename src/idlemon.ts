/*
This class contains the basis for an idlemon
    Attributes:

        name : string : the name of the idlemon
        health: int : the amount of health points
        attack : the base attack 
        defense : the base defense
        speed : the base speed
        moves : an array of four moves (from move.js) that are learned
        allowed_moves : an array of moves that are allowed for the idlemon
        level : int : the current lvl of the idlemon - increases when xp reaches max
        typeNum : int : the index of the type

*/

import { Move } from "./move";
import { TypeInfo } from "./type";

const MAX_LEVEL : number = 100;
const MAX_XP : number = 100;

export class IdleMon {
    name: string; 
    health: number;
    attack: number;
    defense: number;
    speed: number;
    moves: Array<Move>;
    allowedMoves: Array<Move>;
    level: number;
    typeNum: number;
    typeName : string;
    xp : number;

    constructor(name: string, health: number, attack: number, defense: number, speed: number, moves: Array<Move>, allowed_moves: Array<Move>, level: number, typeNum: number) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.allowedMoves = allowed_moves;
        if (this.areValidMoves(moves, allowed_moves)){
            this.moves = moves;
        }
        else {
            console.error("Invalid set of moves");
        }
        this.level = level;
        if (typeNum < TypeInfo.TypeList.length) {
            this.typeNum = typeNum;
            this.typeName = TypeInfo.TypeList[typeNum];
        }
        else {
            console.error("typeNum: " + typeNum + " is an invalid type");
        }
        this.xp = 0;
    }

    isSameType(typeNum: number) : boolean {
        return typeNum === this.typeNum;
    }

    isMoveSuperEffetiveAgainstYou(typeNum: number) {
        // true if typeNum is super effective to you 
        return TypeInfo.TypeSuperEffectiveNumMap[typeNum] === this.typeNum;
    }

    isMoveWeakAgainstYou(typeNum: number) {
        // true if typeNum is weak against you
        return TypeInfo.TypeWeaknessNumMap[typeNum] === this.typeNum;
    }

    useMoveOn(moveName: string, them: IdleMon) {
        const move = this.moves.filter(m => m.name === moveName);

        if (move.length == 1) {
            move[0].use(this, them);
        }
        else {
            console.error("Invalid move: " + moveName);
        }
    }

    gainXP(xpGain: number) {
        let numLvlUp = Math.floor((this.xp + xpGain) / MAX_XP);
        this.xp = (this.xp + xpGain) % MAX_XP; // can't exceed MAX_XP
        this.levelUp(numLvlUp);
    }

    levelUp(numLvlUp : number) {
        this.level = (this.level + numLvlUp) % MAX_LEVEL; // can't level up past MAX_LEVEL
    }

    info() : string {
        var info = "Info:\n\tName: " + this.name + "\n\tType: " + this.typeName + "\n\tLevel: " + this.level;
        info+= "\n\tMoves: ";
        this.moves.forEach(move => {
            info+="\n\t\t" + move.info();
        });
        return info;
    }

    areValidMoves(moves: Array<Move>, allowedMoves: Array<Move>) : boolean {
        let itersection = moves.filter(move => allowedMoves.includes(move));
        return itersection.length === moves.length;
    }
}
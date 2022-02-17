"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdleMon = void 0;
const type_1 = require("./type");
const MAX_LEVEL = 100;
const MAX_XP = 100;
class IdleMon {
    constructor(name, health, attack, defense, speed, moves, allowed_moves, level, typeNum) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.allowedMoves = allowed_moves;
        if (this.areValidMoves(moves, allowed_moves)) {
            this.moves = moves;
        }
        else {
            console.error("Invalid set of moves");
        }
        this.level = level;
        if (typeNum < type_1.typeList.length) {
            this.typeNum = typeNum;
            this.typeName = type_1.typeList[typeNum];
        }
        else {
            console.error("typeNum: " + typeNum + " is an invalid type");
        }
        this.xp = 0;
    }
    useMoveOn(moveName, them) {
        const move = this.moves.filter(m => m.name === moveName);
        if (move.length == 1) {
            move[0].use(this, them);
        }
        else {
            console.error("Invalid move: " + moveName);
        }
    }
    gainXP(xpGain) {
        let numLvlUp = Math.floor((this.xp + xpGain) / MAX_XP);
        this.xp = (this.xp + xpGain) % MAX_XP; // can't exceed MAX_XP
        this.levelUp(numLvlUp);
    }
    levelUp(numLvlUp) {
        this.level = (this.level + numLvlUp) % MAX_LEVEL; // can't level up past MAX_LEVEL
    }
    info() {
        var info = "Info:\n\tName: " + this.name + "\n\tType: " + this.typeName + "\n\tLevel: " + this.level;
        info += "\n\tMoves: ";
        this.moves.forEach(move => {
            info += "\n\t\t" + move.info();
        });
        return info;
    }
    areValidMoves(moves, allowedMoves) {
        let itersection = moves.filter(move => allowedMoves.includes(move));
        return itersection.length === moves.length;
    }
}
exports.IdleMon = IdleMon;

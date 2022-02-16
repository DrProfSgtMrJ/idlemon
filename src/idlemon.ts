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
import { typeList } from "./type";

const MAX_LEVEL = 100;

export class IdleMon {
    name: string; 
    health: number;
    attack: number;
    defense: number;
    speed: number;
    moves: Array<Move>;
    allowedMoves: Array<Move>;
    level: number;
    typeName : string;
    xp : number;

    constructor(name: string, attack: number, defense: number, speed: number, moves: Array<Move>, allowed_moves: Array<Move>, level: number, typeNum: number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.moves = moves;
        this.allowedMoves = allowed_moves;
        this.level = level;
        this.typeName = typeList[typeNum];
        this.xp = 0;
    }

    usemove(mvoeName: string) {
        const move = this.moves.filter(m => m.name === mvoeName);

        if (move.length == 1) {
            move[0].use();
        }
        else {
            console.error("Invalid move: " + mvoeName);
        }
    }

    gainXP(xpGain: number) {
        if ((this.xp + xpGain) >= 100) {
            let numLvlUp = Math.floor((this.xp + xpGain) / 100);
            this.xp = (this.xp + xpGain) % 100;
            while (numLvlUp > 0) {
                this.levelUp();
                numLvlUp--;
            }
        }
        else {
            this.xp+=xpGain;
        }
    }

    levelUp() {
        if (this.level + 1 <= MAX_LEVEL) {
            this.level++;
        }
    }

    info() : string {
        var info = "Info:\n\tName: " + this.name + "\n\tType: " + this.typeName + "\n\tLevel: " + this.level;
        info+= "\n\tMoves: ";
        this.moves.forEach(move => {
            info+="\n\t\t" + move.info();
        });
        return info;
    }
}
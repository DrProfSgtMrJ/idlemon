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
var type_1 = require("./type");
var MAX_LEVEL = 100;
var IdleMon = /** @class */ (function () {
    function IdleMon(name, attack, defense, speed, moves, allowed_moves, level, typeNum) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.moves = moves;
        this.allowedMoves = allowed_moves;
        this.level = level;
        this.typeName = type_1.typeList[typeNum];
        this.xp = 0;
    }
    IdleMon.prototype.usemove = function (mvoeName) {
        var move = this.moves.filter(function (m) { return m.name === mvoeName; });
        if (move.length == 1) {
            move[0].use();
        }
        else {
            console.error("Invalid move: " + mvoeName);
        }
    };
    IdleMon.prototype.gainXP = function (xpGain) {
        if ((this.xp + xpGain) >= 100) {
            var numLvlUp = Math.floor((this.xp + xpGain) / 100);
            this.xp = (this.xp + xpGain) % 100;
            while (numLvlUp > 0) {
                this.levelUp();
                numLvlUp--;
            }
        }
        else {
            this.xp += xpGain;
        }
    };
    IdleMon.prototype.levelUp = function () {
        if (this.level + 1 <= MAX_LEVEL) {
            this.level++;
        }
    };
    IdleMon.prototype.info = function () {
        var info = "Info:\n\tName: " + this.name + "\n\tType: " + this.typeName + "\n\tLevel: " + this.level;
        info += "\n\tMoves: ";
        this.moves.forEach(function (move) {
            info += "\n\t\t" + move.info();
        });
        return info;
    };
    return IdleMon;
}());
exports.IdleMon = IdleMon;

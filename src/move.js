"use strict";
/*
Class defining a move that can be used by an idlemon
    Attributes:
        name : string : the name of the move
        typeNum : int : the num indexing to the typelist
        type : string : the string name of the type
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
const type_1 = require("./type");
class Move {
    constructor(name, typeNum, usageFunction) {
        this.name = name;
        this.typeNum = typeNum;
        this.usageFunction = usageFunction;
        this.name = name;
        if (typeNum < type_1.typeList.length) {
            this.typeNum = typeNum;
            this.typeName = type_1.typeList[typeNum];
        }
        else {
            console.error("typeNum: " + typeNum + " is an invalid type");
        }
        this.usageFunction = usageFunction;
    }
    use(you, them, ...args) {
        console.log(you.name + " Used " + this.name + " on " + them.name);
        this.usageFunction(you, them, args);
    }
    info() {
        return "Name: " + this.name + ", Type: " + this.typeName;
    }
}
exports.Move = Move;

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
var type_1 = require("./type");
var Move = /** @class */ (function () {
    function Move(name, typeNum) {
        this.name = name;
        this.typeNum = typeNum;
        this.name = name;
        this.typeNum = typeNum;
        this.typeName = type_1.typeList[typeNum];
    }
    Move.prototype.use = function () {
        console.log("Use" + this.name);
    };
    Move.prototype.info = function () {
        return "Name: " + this.name + ", Type: " + this.typeName;
    };
    return Move;
}());
exports.Move = Move;

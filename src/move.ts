/*
Class defining a move that can be used by an idlemon
    Attributes:
        name : string : the name of the move
        typeNum : int : the num indexing to the typelist
        type : string : the string name of the type
*/

import { typeList } from './type';

export class Move {
    typeName : string;
    constructor(public name: string, private typeNum: number) {
        this.name = name;
        this.typeNum = typeNum; 
        this.typeName = typeList[typeNum];
    }

    use() {
        console.log("Use" + this.name);
    }

    info() : string{
        return "Name: " + this.name + ", Type: " + this.typeName;
    }
}   
/*
Class defining a move that can be used by an idlemon
    Attributes:
        name : string : the name of the move
        typeNum : int : the num indexing to the typelist
        type : string : the string name of the type
*/

import { IdleMon } from './idlemon';
import { TypeInfo } from './type';

export class Move {
    typeName : string;
    constructor(public name: string, public typeNum: number, public description: string, public usageFunction: (you : IdleMon, them: IdleMon, ...args: any[]) => void) {
        this.name = name;
        if (typeNum < TypeInfo.TypeList.length) {
            this.typeNum = typeNum; 
            this.typeName = TypeInfo.TypeList[typeNum];
        }
        else {
            console.error("typeNum: " + typeNum + " is an invalid type");
        }
        this.description = description;
        this.usageFunction = usageFunction;
    }

    use(you: IdleMon, them : IdleMon, ...args: any[]) {
        console.log(you.name + " Used " + this.name + " on " + them.name);
        this.usageFunction(you, them, args);
    }

    info() : string {
        return "Name: " + this.name + ", Type: " + this.typeName + "\nDescription: " + this.description;
    }

    static equals(this, other: Move) : boolean {
        return this.name === other.name;
    }
}   
/*
Contains info about the different types
*/

// list of types
export const spaghetti : string = "spaghetti";
export const lizard : string = "lizard";
export const magic : string = "magic";
export const human: string = "human";

export const spaghettiIndex : number = 0;
export const lizardIndex : number = 1;
export const magicIndex : number = 2;
export const humanIndex : number = 3;

//[spaghetti, lizard, magic, human];
export const typeList : Array<string> = new Array<string>();
typeList[spaghettiIndex] = spaghetti;
typeList[lizardIndex] = lizard;
typeList[magicIndex] = magic;
typeList[humanIndex] = human;

//  map of type to weakness - using name
export const typeWeaknessMap = new Map<string, string>([
    [spaghetti, lizard],
    [lizard, human],
    [human, magic],
    [magic, spaghetti]
]);

// map of type to weakness - using number
// value1 is weak to value2
export const typeWeaknessNumMap = new Map<number, number>([
    [spaghettiIndex, lizardIndex],
    [lizardIndex, humanIndex],
    [humanIndex, magicIndex],
    [magicIndex, spaghettiIndex]
]);

// map of type to super effective against
// value1 is supereffective against value2
export const typeSuperEffectiveNumMap = new Map<number, number>([
    [lizardIndex, spaghettiIndex],
    [humanIndex, lizardIndex],
    [magicIndex, humanIndex],
    [spaghettiIndex, magicIndex]
]);


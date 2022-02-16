/*
Contains an enum of different types
*/



// list of types
const spaghetti = "spaghetti";
const lizard = "lizard";
const magic = "magic";
const human = "human";


const spaghettiIndex = 0;
const lizardIndex = 1;
const magicIndex = 2;
const humanIndex = 3;

//[spaghetti, lizard, magic, human];
const typeList = []
typeList[spaghettiIndex] = spaghetti;
typeList[lizardIndex] = lizardIndex;
typeList[magicIndex] = magic;
typeList[humanIndex] = human;

//  dict of type to weakness
const typeDict = [{spaghetti : lizard}, {lizard : human}, {human : magic}, {magic : spaghetti}];


module.exports = {typeList, typeDict, spaghettiIndex, lizardIndex, magicIndex, humanIndex};



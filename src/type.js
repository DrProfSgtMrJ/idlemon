"use strict";
/*
Contains info about the different types
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeSuperEffectiveNumMap = exports.typeWeaknessNumMap = exports.typeWeaknessMap = exports.typeList = exports.humanIndex = exports.magicIndex = exports.lizardIndex = exports.spaghettiIndex = exports.human = exports.magic = exports.lizard = exports.spaghetti = void 0;
// list of types
exports.spaghetti = "spaghetti";
exports.lizard = "lizard";
exports.magic = "magic";
exports.human = "human";
exports.spaghettiIndex = 0;
exports.lizardIndex = 1;
exports.magicIndex = 2;
exports.humanIndex = 3;
//[spaghetti, lizard, magic, human];
exports.typeList = new Array();
exports.typeList[exports.spaghettiIndex] = exports.spaghetti;
exports.typeList[exports.lizardIndex] = exports.lizard;
exports.typeList[exports.magicIndex] = exports.magic;
exports.typeList[exports.humanIndex] = exports.human;
//  map of type to weakness - using name
exports.typeWeaknessMap = new Map([
    [exports.spaghetti, exports.lizard],
    [exports.lizard, exports.human],
    [exports.human, exports.magic],
    [exports.magic, exports.spaghetti]
]);
// map of type to weakness - using number
// value1 is weak to value2
exports.typeWeaknessNumMap = new Map([
    [exports.spaghettiIndex, exports.lizardIndex],
    [exports.lizardIndex, exports.humanIndex],
    [exports.humanIndex, exports.magicIndex],
    [exports.magicIndex, exports.spaghettiIndex]
]);
// map of type to super effective against
// value1 is supereffective against value2
exports.typeSuperEffectiveNumMap = new Map([
    [exports.lizardIndex, exports.spaghettiIndex],
    [exports.humanIndex, exports.lizardIndex],
    [exports.magicIndex, exports.humanIndex],
    [exports.spaghettiIndex, exports.magicIndex]
]);

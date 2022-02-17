"use strict";
/*
Contains info about the different types
*/
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeInfo = void 0;
// list of types
class TypeInfo {
}
exports.TypeInfo = TypeInfo;
_a = TypeInfo;
TypeInfo.Spaghetti = "spaghetti";
TypeInfo.Lizard = "lizard";
TypeInfo.Magic = "magic";
TypeInfo.Human = "human";
TypeInfo.SpaghettiIndex = 0;
TypeInfo.LizardIndex = 1;
TypeInfo.MagicIndex = 2;
TypeInfo.HumanIndex = 3;
//[spaghetti, lizard, magic, human];
TypeInfo.TypeList = new Array(_a.Spaghetti, _a.Lizard, _a.Magic, _a.Human);
//  map of type to weakness - using name
TypeInfo.TypeWeaknessMap = new Map([
    [_a.Spaghetti, _a.Lizard],
    [_a.Lizard, _a.Human],
    [_a.Human, _a.Magic],
    [_a.Magic, _a.Spaghetti]
]);
// map of type to weakness - using number
// value1 is weak to value2
TypeInfo.TypeWeaknessNumMap = new Map([
    [_a.SpaghettiIndex, _a.LizardIndex],
    [_a.LizardIndex, _a.HumanIndex],
    [_a.HumanIndex, _a.MagicIndex],
    [_a.MagicIndex, _a.SpaghettiIndex]
]);
// map of type to super effective against
// value1 is supereffective against value2
TypeInfo.TypeSuperEffectiveNumMap = new Map([
    [_a.LizardIndex, _a.SpaghettiIndex],
    [_a.HumanIndex, _a.LizardIndex],
    [_a.MagicIndex, _a.HumanIndex],
    [_a.SpaghettiIndex, _a.MagicIndex]
]);

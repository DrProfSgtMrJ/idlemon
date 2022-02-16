"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var idlemon_1 = require("./idlemon");
var move_1 = require("./move");
var type_1 = require("./type");
function createFirstIdleMon(name) {
    var moveSet = new Array();
    var allowedMoves = new Array();
    var health = 45;
    var attack = 45;
    var defense = 45;
    var speed = 45;
    var lvl = 2;
    var stomp = new move_1.Move("Stomp", type_1.humanIndex);
    console.log(stomp.info());
    var headbutt = new move_1.Move("Headbutt", type_1.humanIndex);
    console.log(headbutt.info());
    moveSet[0] = headbutt;
    allowedMoves[0] = headbutt;
    allowedMoves[1] = stomp;
    var firstIdleMon = new idlemon_1.IdleMon(name, health, attack, defense, moveSet, allowedMoves, lvl, type_1.humanIndex);
    firstIdleMon.usemove(headbutt.name);
    console.log(firstIdleMon.info());
}
createFirstIdleMon("HealloWorldIdleMon");

import { IdleMon } from "./idlemon";
import { Move } from "./move";
import { humanIndex, typeSuperEffectiveNumMap, typeWeaknessNumMap } from "./type";


function createFirstIdleMon(name : string) {

        var moveSet = new Array<Move>();
        var allowedMoves = new Array<Move>();

        var health = 45;
        var attack = 45;
        var defense = 45;
        var speed = 45;
        var lvl = 2;

        let stomp = new Move("Stomp", humanIndex, (you: IdleMon, them: IdleMon) => {
            // true if move type is super effective to them
            let moveIsSuperEffectiveToThem : boolean = typeSuperEffectiveNumMap[humanIndex] === them.typeNum;
            // true if move type is weak to them
            let moveIsWeakToThem : boolean = typeWeaknessNumMap[humanIndex] === them.typeNum;

            if (moveIsSuperEffectiveToThem) {
                console.log("IT'S SUPER EFFECTIVE");
            }
            else if (moveIsWeakToThem) {
                console.log("It's not very effetive...");
            }

            // check if the move is of the sametype as you
            let moveIsOfSameTypeAsYou : boolean = humanIndex === you.typeNum;

            // damage will first start with your attack
            // will use full attack if same type as you, otherwise, do 75% of your attack
            var damage : number = moveIsOfSameTypeAsYou ? you.attack : you.attack * 0.75; 
            // do 2* the damage if super effective to them
            // do 25% of the damage if weak to them
            // otherwise, just do 1* the damage
            damage = moveIsSuperEffectiveToThem ? damage * 2 : 
                moveIsWeakToThem ? damage * 0.25 : damage;

            // apply damage to them
            // have to account for defense first
            let reduceHealthBy = them.defense - damage;
            them.defense = reduceHealthBy <= 0 ? 0 : them.defense - damage;
            them.health = reduceHealthBy <= 0 ? them.health + reduceHealthBy : them.health;
            console.log(them.name + " was stomped for " + damage + " damage" + " new defense: " + them.defense + " new health: " + them.health);
        });
        console.log(stomp.info());

        let headbutt = new Move("Headbutt", humanIndex, (you: IdleMon, them: IdleMon) => {


        });
        console.log(headbutt.info());
        moveSet[0] = stomp;
        allowedMoves[0] = headbutt;
        allowedMoves[1] = stomp;

        var firstIdleMon = new IdleMon(name, health, attack, defense, speed, moveSet, allowedMoves, lvl, humanIndex);
        var secondIdleMon = new IdleMon("enemy", health, attack, defense, speed, moveSet, allowedMoves, lvl, humanIndex);
        console.log(firstIdleMon.info());
        console.log(secondIdleMon.info());
        firstIdleMon.useMoveOn(stomp.name, secondIdleMon);
}

createFirstIdleMon("HealloWorldIdleMon");
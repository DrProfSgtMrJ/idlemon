/*
Contains info about the different types
*/

// list of types
export class TypeInfo {
    static Spaghetti : string = "spaghetti";
    static Lizard : string = "lizard";
    static Magic : string = "magic";
    static Human: string = "human";

    static SpaghettiIndex : number = 0;
    static LizardIndex : number = 1;
    static MagicIndex : number = 2;
    static HumanIndex : number = 3;
    //[spaghetti, lizard, magic, human];
    static TypeList : Array<string> = new Array<string>(this.Spaghetti, this.Lizard, this.Magic, this.Human);

    //  map of type to weakness - using name
    static TypeWeaknessMap = new Map<string, string>([
        [this.Spaghetti, this.Lizard],
        [this.Lizard, this.Human],
        [this.Human, this.Magic],
        [this.Magic, this.Spaghetti]
    ]);

    // map of type to weakness - using number
    // value1 is weak to value2
    static TypeWeaknessNumMap = new Map<number, number>([
        [this.SpaghettiIndex, this.LizardIndex],
        [this.LizardIndex, this.HumanIndex],
        [this.HumanIndex, this.MagicIndex],
        [this.MagicIndex, this.SpaghettiIndex]
    ]);

    // map of type to super effective against
    // value1 is supereffective against value2
    static TypeSuperEffectiveNumMap = new Map<number, number>([
        [this.LizardIndex, this.SpaghettiIndex],
        [this.HumanIndex, this.LizardIndex],
        [this.MagicIndex, this.HumanIndex],
        [this.SpaghettiIndex, this.MagicIndex]
    ]);
}





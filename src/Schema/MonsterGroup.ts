import { CddaID } from "./GenericDefine";
import { MonsterID } from "./Monster";




export type MonsterGroupID = CddaID<"MONG">;
export type MonsterGroup = {
    type: "monstergroup";
    name: MonsterGroupID;
    is_animal: boolean;
    monsters: {
        monster: MonsterID;
        weight: number;
        cost_multiplier: number;
    }[];
};

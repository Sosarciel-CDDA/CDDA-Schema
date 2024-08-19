import { CddaID, CharSymbol, Color, DescText, Volume, Weight } from "./GenericDefine";

/**家具ID */
export type FurnitureID = CddaID<"FURN">;
/**家具 */
export type Furniture = {
    type: "furniture";
    id: FurnitureID;
    name: (DescText);
    symbol: CharSymbol;
    looks_like: "chair";
    color: Color;
    /**当这个家具在范围内时  
     * 可用于制作的物品 (工具）的 ID（家具充当该类型的物品)  
     */
    crafting_pseudo_item?: "anvil";
    /**可以在这里制作。
     * 超过这些限制的质量/体积会导致速度惩罚。
     * 必须与 "workbench" examine_action 配对才能工作。
     **/
    workbench?: {
        /**制作加速倍率 */
        multiplier: 1.1;
        /**允许的质量 */
        mass: Weight;
        /**允许的体积 */
        volume: Volume;
    };
};


type U = {
    move_cost_mod: 2;
    keg_capacity: 240;
    deployed_item: "plastic_sheet";
    light_emitted: 5;
    required_str: 18;
    flags: ["TRANSPARENT", "BASHABLE", "FLAMMABLE_HARD"];
    connect_groups: ["WALL"];
    connects_to: ["WALL"];
    rotates_to: ["INDOORFLOOR"];
    examine_action: "workbench";
    close: "f_foo_closed";
    open: "f_foo_open";
    lockpick_result: "f_safe_open";
    lockpick_message: "With a click, you unlock the safe.";
    bash: "TODO";
    deconstruct: "TODO";
    max_volume: "1000 L";
    boltcut: {
        result: "f_safe_open";
        duration: "1 seconds";
        message: "The safe opens.";
        sound: "Gachunk!";
        byproducts: [{ item: "scrap"; count: 3 }];
    };
    hacksaw: {
        result: "f_safe_open";
        duration: "12 seconds";
        message: "The safe is hacksawed open!";
        sound: "Gachunk!";
        byproducts: [{ item: "scrap"; count: 13 }];
    };
    oxytorch: {
        result: "f_safe_open";
        duration: "30 seconds";
        message: "The safe opens!";
        byproducts: [{ item: "scrap"; count: 13 }];
    };
    prying: {
        result: "f_crate_o";
        message: "You pop open the crate.";
        prying_data: {
            difficulty: 6;
            prying_level: 1;
            noisy: true;
            failure: "You pry, but can't pop open the crate.";
        };
    };

}
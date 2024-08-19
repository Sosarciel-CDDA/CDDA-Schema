import { CddaID, CharSymbol, DescText, Volume } from "./GenericDefine";

/**TalkTopic ID格式 */
export type TerrainID = CddaID<"TERRAIN">;

/**对话选项 */
export type Terrain = {
    type: "terrain";
    id: TerrainID;
    name: (DescText);
    /**ascii显示符号 */
    symbol: (CharSymbol);
};
type TU = {
    looks_like: "pit";
    color: "ltred";
    move_cost: 10;
    light_emitted: 10;
    trap: "spike_pit";
    max_volume: Volume;
    flags: ["TRANSPARENT", "DIGGABLE"];
    connect_groups: ["WALL"];
    connects_to: ["WALL"];
    rotates_to: ["INDOORFLOOR"];
    close: "t_foo_closed";
    open: "t_foo_open";
    lockpick_result: "t_door_unlocked";
    lockpick_message: "With a click, you unlock the door.";
    bash: "TODO";
    deconstruct: "TODO";
    alias: "TODO";
    harvestable: "blueberries";
    transforms_into: "t_tree_harvested";
    allowed_template_ids: [
        "standard_template_construct",
        "debug_template",
        "afs_10mm_smart_template"
    ];
    shoot: {
        reduce_damage: [2, 12];
        reduce_damage_laser: [0, 7];
        destroy_damage: [40, 120];
        no_laser_destroy: true;
    };
    harvest_by_season: [
        { seasons: ["spring", "autumn"]; id: "burdock_harv" },
        { seasons: ["summer"]; id: "burdock_summer_harv" }
    ];
    roof: "t_roof";
    examine_action: "pit";
    boltcut: {
        result: "t_door_unlocked";
        duration: "1 seconds";
        message: "The door opens.";
        sound: "Gachunk!";
        byproducts: [{ item: "scrap"; "2x4": 3 }];
    };
    hacksaw: {
        result: "t_door_unlocked";
        duration: "12 seconds";
        message: "The door is hacksawed open!";
        sound: "Gachunk!";
        byproducts: [{ item: "scrap"; "2x4": 13 }];
    };
    oxytorch: {
        result: "t_door_unlocked";
        duration: "60 seconds";
        message: "The door opens!";
        byproducts: [{ item: "scrap"; count: 10 }];
    };
    prying: {
        result: "t_fence_post";
        duration: "30 seconds";
        message: "You pry out the fence post.";
        byproducts: [{ item: "nail"; count: 6 }, { item: "2x4"; count: 3 }];
        prying_data: { prying_nails: true };
    };
}

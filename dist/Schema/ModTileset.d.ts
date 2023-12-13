import { TilesetCfg } from "./Tileset";
/**mod图包 */
export type ModTileset = {
    type: "mod_tileset";
    /**可用的贴图包NAME tileset.txt中的NAME */
    compatibility: string[];
    /**瓦块集信息 */
    "tiles-new": TilesetCfg[];
};

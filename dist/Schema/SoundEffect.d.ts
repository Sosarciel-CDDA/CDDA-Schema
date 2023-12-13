import { CddaID } from "./GenericDefine";
/**音效ID */
export type SoundEffectID = CddaID<"SE">;
/**音效变体ID */
export type SoundEffectVariantID = CddaID<"SEV">;
/**音效 */
export type SoundEffect = {
    type: "sound_effect";
    /**音效ID */
    id: SoundEffectID;
    /**音效变体ID */
    variant: SoundEffectVariantID;
    /**音量 */
    volume: number;
    /**文件路径 从音效包起始 */
    files: string[];
    /**如果定义, 声音将仅在指定季节播放。 (可能的值为spring、summer、autumn和winter)。 */
    season?: "spring" | "summer" | "autumn" | "winter";
    /** 如果已定义, 则只有当玩家在室内/室外 (true/false 时)时才会播放声音。 */
    is_indoors?: boolean;
    /**如果已定义, 则仅当当前时间为夜间/白天 (当 true/false 时)时才会播放声音。 */
    is_night?: boolean;
};

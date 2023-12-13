import { CddaID, DescText } from "./GenericDefine";
/**预定义的肢体分数ID 列表 */
export declare const DefineLimbScoreIDList: readonly ["manip", "lift", "grip", "block", "breathing", "vision", "night_vis", "reaction", "movement_speed", "balance", "footing", "swim", "crawl"];
/**预定义的肢体分数ID */
export type DefineLimbScoreID = typeof DefineLimbScoreIDList[number];
/**肢体分数ID */
export type LimbScoreID = CddaID<"LS"> | DefineLimbScoreID;
/**肢体分数 */
export type LimbScore = {
    /** 类型: 始终为 "limb_score" */
    type: "limb_score";
    /** 标识此肢体得分 */
    id: LimbScoreID;
    /** 必填。定义将在用户界面中显示的此肢体得分的可翻译名称 */
    name: (DescText);
    /**(可选, 默认为 true) 确定此肢体得分是否受角色的肢体健康影响。肢体健康越低 => 得分越低 */
    affected_by_wounds?: boolean;
    /**(可选, 默认为 true) 确定此肢体得分是否受角色的肢体负担影响。负担越重 => 得分越低 */
    affected_by_encumb?: boolean;
};

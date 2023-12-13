import { EocID } from "./Eoc";
import { CddaID, DescText } from "./GenericDefine";
/**活动ID格式  */
export type ActivityTypeID = CddaID<"ACT">;
/**活动类型 */
export type ActivityType = {
    id: ActivityTypeID;
    type: "activity_type";
    /** 用于描述活动的描述性术语, 用于停止活动的查询, 以及描述它的字符串, 例如: "verb": "mining" 或 "verb": { "ctxt": "instrument", "str": "playing" } */
    verb: DescText;
    /** 活动的活动级别, 更难的活动会随着时间消耗更多的卡路里。
     * 有效值为, 从最容易到最需要身体的:
     * NO_EXERCISE, LIGHT_EXERCISE, MODERATE_EXERCISE, BRISK_EXERCISE, ACTIVE_EXERCISE, EXTRA_EXERCISE
     */
    activity_level: "NO_EXERCISE" | "LIGHT_EXERCISE" | "MODERATE_EXERCISE" | "BRISK_EXERCISE" | "ACTIVE_EXERCISE" | "EXTRA_EXERCISE";
    /** 是否可以中断。如果为false, 则会抑制与例如疼痛或看到怪物相关的弹出窗口 */
    interruptable?: boolean;
    /** 是否可以通过按键中断 */
    interruptable_with_kb?: boolean;
    /** 而不是恢复, 你必须总是从头开始这个活动 */
    no_resume?: boolean;
    /** 如果为true, 活动可以在不从头开始的情况下继续。这只有在can_resume_with()返回true时才可能 */
    suspendable?: boolean;
    /** 可以是'time', 'speed', 或者'neither'
     * time: player_activity::moves_left减少的量与角色的速度无关
     * speed: player_activity::moves_left可能会根据角色的速度快速或慢速减少
     * neither: moves_left将不会减少。因此, 你必须定义一个do_turn函数；否则活动永远不会结束
     */
    based_on: "time" | "speed" | "neither";
    /** 如果为true, 那么在活动期间, 后坐力会减少, 植物突变体会将根深入地下。如果活动持续时间超过几分钟, 并且总是可以在不移动脚的情况下完成, 应该为true */
    rooted?: boolean;
    /** 如果为true, 角色会在长时间的活动中自动补充火源 */
    refuel_fires?: boolean;
    /** 如果为true, 角色会在长时间的活动中自动从特定的auto_consume区域吃和喝 */
    auto_needs?: boolean;
    /** 这个活动会重复, 直到它不能做更多的工作, 用于NPC和avatar区域活动 */
    multi_activity?: boolean;
    /** 当这个活动完成时运行的EOC */
    completion_eoc?: EocID;
    /** 当这个活动执行一个回合时运行的EOC */
    do_turn_eoc?: EocID;
};

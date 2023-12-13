import { EocID, IDObj, InlineEoc, ParamsEoc } from "./Eoc";
import { FieldID } from "./Field";
import { CddaID, Color, DescText, Explosion } from "./GenericDefine";
import { NpcClassID } from "./NpcClass";
import { SpellID } from "./Spell";


/**预定义的物品动作ID 列表 */
export const DefineItemActionIDList = [
    "repair_fabric"           , // 修理棉/皮革/羊毛/Nomex/毛皮
    "repair_metal"            , // 修理金属/塑料/Kevlar
    "sew_advanced"            , // 修改衣物
    "firestarter"             , // 快速点火
    "HAMMER"                  , // 撬箱子、窗户、门或钉子
    "PICK_LOCK"               , // 撬锁
    "deploy_furn"             , // 部署物品
    "deploy_appliance"        , // 部署物品
    "CROWBAR_WEAK"            , // 撬箱子或钉子
    "CROWBAR"                 , // 撬箱子、窗户、门或钉子
    "MAKEMOUND"               , // 翻土
    "DIG_CHANNEL"             , // 在此处挖水渠
    "PICKAXE"                 , // 挖通岩石
    "PACK_CBM"                , // 将CBM打包到袋子中
    "GEIGER"                  , // 使用盖革计数器
    "HACKSAW"                 , // 切割金属
    "BOLTCUTTERS"             , // 切割螺栓或电线
    "HOTPLATE"                , // 加热食物 (用它) 
    "HOTPLATE_ATOMIC"         , // 加热食物 (用它) 
    "TOOLMOD_ATTACH"          , // 作为工具模块附加
    "GUNMOD_ATTACH"           , // 作为枪械模块附加
    "GUN_REPAIR"              , // 修理枪械
    "DIRECTIONAL_HOLOGRAM"    , // 创建移动全息图
    "ROBOTCONTROL"            , // 黑客机器人
    "METH"                    , // 吸食/鼻吸冰毒
    "TAZER"                   , // 电击某物
    "ANTICONVULSANT"          , // 服用抗惊厥药
    "LUMBER"                  , // 将原木切成木板
    "REMOVE_ALL_MODS"         , // 移除所有工具模块
    "salvage"                 , // 切割物品
    "inscribe"                , // 在物品上写字
    "fireweapon_off"          , // 打开
    "fireweapon_on"           , // 关闭
    "CHANGE_EYES"             , // 改变眼睛颜色
    "CHANGE_SKIN"             , // 改变皮肤颜色
    "transform"               , // 打开
    "message"                 , // 激活
    "unpack"                  , // 解包
    "learn_spell"             , // 学习咒语
    "cast_spell"              , // 施放咒语
    "holster"                 , // 使用枪套
    "attach_molle"            , // 附加口袋
    "detach_molle"            , // 移除口袋
    "saw_barrel"              , // 锯下枪管
    "saw_stock"               , // 锯下枪托
    "ACIDBOMB_ACT"            , // 激活
    "ADRENALINE_INJECTOR"     , // 注射
    "AFS_TRANSLOCATOR"        , // 创建浮标
    "ALCOHOL"                 , // 喝
    "ALCOHOL_STRONG"          , // 喝
    "ALCOHOL_WEAK"            , // 喝
    "ANTIBIOTIC"              , // 服用
    "ANTIFUNGAL"              , // 服用
    "ANTIPARASITIC"           , // 服用
    "BELL"                    , // 敲
    "BLECH"                   , // 喝
    "BLECH_BECAUSE_UNCLEAN"   , // 喝
    "C4"                      , // 激活
    "CAMERA"                  , // 使用相机
    "CAN_GOO"                 , // 倒出
    "CAPTURE_MONSTER_ACT"     , // 捕获/放置
    "CAPTURE_MONSTER_VEH"     , // 捕获/放置
    "CARVER_OFF"              , // 打开
    "CHAINSAW_OFF"            , // 打开
    "CHEW"                    , // 咀嚼
    "CLEAR_RUBBLE"            , // 清理瓦砾
    "COIN_FLIP"               , // 翻转
    "BINDER_ADD_RECIPE"       , // 复制配方
    "BINDER_MANAGE_RECIPE"    , // 移除配方
    "COKE"                    , // 鼻吸可卡因
    "COMBATSAW_OFF"           , // 打开
    "TOOLWEAPON_DEACTIVATE"   , // 关闭
    "E_COMBATSAW_OFF"         , // 打开
    "CONTACTS"                , // 放入眼睛
    "DATURA"                  , // 吃
    "DIG"                     , // 在此处挖坑
    "DIRECTIONAL_ANTENNA"     , // 找到方向
    "DOG_WHISTLE"             , // 吹
    "CALL_OF_TINDALOS"        , // 吹
    "DOLLCHAT"                , // 让它说话
    "ECIG"                    , // 吸烟
    "EHANDCUFFS"              , // 脱下

    "EINKTABLETPC"            , // 使用SD卡应用
    "EBOOKSAVE"               , // 存储书籍
    "EBOOKREAD"               , // 阅读存储的书籍
    "ELEC_CHAINSAW_OFF"       , // 打开
    "EMF_PASSIVE_ON"          , // 关闭
    "EXTINGUISHER"            , // 喷射
    "MACE"                    , // 喷射
    "EYEDROPS"                , // 使用
    "FILL_PIT"                , // 填坑 / 夯实地面
    "FIRECRACKER"             , // 点燃
    "FIRECRACKER_PACK"        , // 点燃
    "FIRECRACKER_PACK_ACT"    , // 点燃
    "FISH_ROD"                , // 钓鱼
    "FISH_TRAP"               , // 设置
    "FLUMED"                  , // 服用
    "FLUSLEEP"                , // 服用
    "FLU_VACCINE"             , // 注射
    "FOODPERSON"              , // 激活
    "FUNGICIDE"               , // 服用
    "GRANADE_ACT"             , // 激活
    "GRENADE_INC_ACT"         , // 激活
    "detach_gunmods"          , // 卸下枪械模组
    "modify_gunmods"          , // 修改附加设备
    "HAIRKIT"                 , // 修剪头发
    "HEATPACK"                , // 使用
    "HEAT_FOOD"               , // 加热食物 (在其中) 
    "HONEYCOMB"               , // 消耗
    "INHALER"                 , // 吸入
    "JACKHAMMER"              , // 钻孔
    "JET_INJECTOR"            , // 注射
    "MAGIC_8_BALL"            , // 提问
    "PLAY_GAME"               , // 玩游戏
    "MARLOSS"                 , // 消耗
    "MARLOSS_GEL"             , // 消耗
    "MARLOSS_SEED"            , // 消耗
    "MA_MANUAL"               , // 阅读
    "MEDITATE"                , // 冥想
    "MININUKE"                , // 激活
    "MOLOTOV_LIT"             , // 点燃
    "MOP"                     , // 拖地
    "MP3"                     , // 播放音乐
    "MP3_DEACTIVATE"          , // 关闭音乐
    "RPGDIE"                  , // 掷骰子
    "GASMASK_ACTIVATE"        , // 准备使用
    "DIVE_TANK_ACTIVATE"      , // 使用调节器
    "SOLARPACK"               , // 展开
    "SOLARPACK_OFF"           , // 折叠
    "MULTICOOKER"             , // 烹饪
    "MYCUS"                   , // 消耗
    "NOISE_EMITTER_ON"        , // 关闭
    "OXYGEN_BOTTLE"           , // 吸入
    "OXYTORCH"                , // 切割金属
    "PACK_ITEM"               , // 打包物品
    "PETFOOD"                 , // 喂野生动物…或人类
    "PLANTBLECH"              , // 消耗
    "POISON"                  , // 消耗
    "PORTABLE_GAME"           , // 玩游戏
    "FITNESS_CHECK"           , // 检查健康指标
    "deploy_tent"             , // 搭起
    "PORTAL"                  , // 放置
    "PROZAC"                  , // 服用
    "ELECTRICSTORAGE"         , // 管理外部存储
    "PURIFY_SMART"            , // 注射
    "RADGLOVE"                , // 测量辐射
    "RADIOCAR"                , // …
    "RADIOCARON"              , // 关闭
    "RADIOCONTROL"            , // 控制遥控车
    "RADIO_MOD"               , // 修改物品
    "RADIO_OFF"               , // 打开
    "RADIO_ON"                , // 扫描
    "REMOTEVEH"               , // 控制车辆
    "MANAGE_EXOSUIT"          , // 管理外骨骼模块
    "RM13ARMOR_OFF"           , // 打开
    "RM13ARMOR_ON"            , // 关闭
    "SEED"                    , // 消耗
    "SEWAGE"                  , // 消耗
    "SHAVEKIT"                , // 剃须
    "SHOCKTONFA_OFF"          , // 打开
    "SHOCKTONFA_ON"           , // 关闭
    "SIPHON"                  , // 虹吸
    "SMOKING"                 , // 吸烟
    "SPRAY_CAN"               , // 写一些东西
    "STIMPACK"                , // 注射
    "TELEPORT"                , // 传送自己
    "THORAZINE"               , // 服用
    "TOWEL"                   , // 擦干/清洁自己
    "TRIMMER_OFF"             , // 打开
    "UNFOLD_GENERIC"          , // 展开
    "UNPACK_ITEM"             , // 解包

    "BLOOD_DRAW"              , // 抽取一些血液
    "HAND_CRANK"              , // 给电池充电
    "VIBE"                    , // 你懂的
    "VORTEX"                  , // 使用
    "WASH_SOFT_ITEMS"         , // 清洗软物品
    "WASH_HARD_ITEMS"         , // 清洗硬物品
    "WASH_ALL_ITEMS"          , // 清洗物品
    "WATER_PURIFIER"          , // 净化一些水
    "WEATHER_TOOL"            , // 检查天气信息
    "WEED_CAKE"               , // 消耗
    "XANAX"                   , // 服用
    "ammobelt"                , // 重装
    "consume_drug"            , // 消耗
    "delayed_transform"       , // 使用
    "explosion"               , // 激活
    "heal"                    , // 对伤口使用
    "link_up"                 , // 插入 / 管理电缆
    "manualnoise"             , // 制造一些噪音
    "musical_instrument"      , // 演奏
    "place_monster"           , // 激活
    "place_npc"               , // 激活
    "place_trap"              , // 放置
    "reveal_map"              , // 阅读
    "change_scent"            , // 掩盖气味
    "install_bionic"          , // 安装仿生器官
    "CHOP_TREE"               , // 砍倒一棵树
    "CHOP_LOGS"               , // 将树干切成木头
    "BREAK_STICK"             , // 折断棍子
    "WEAK_ANTIBIOTIC"         , // 服用
    "DISASSEMBLE"             , // 获取内容
    "STRONG_ANTIBIOTIC"       , // 服用
    "weigh_self"              , // 使用秤
    "CRAFT"                   , // 进行工艺制作
    "effect_on_conditions"    , // 激活物品
    "SEXTANT"                 , // 测量太阳高度
    "LUX_METER"               , // 测量光线强度
    "DBG_LUX_METER"           , // 测量光线强度
    "CALORIES_INTAKE_TRACKER" , // 卡路里摄入跟踪器
    "VOLTMETER"               , // 测试电压
    "play_instrument"         , // 演奏乐器
    "sound"                   , // 制造声音
] as const;
/**预定义的物品动作ID */
export type DefineItemActionID = typeof DefineItemActionIDList[number];
/**物品动作ID  
 * 实际可用动作参见 UseAction
 */
export type ItemActionID = CddaID<"IACT">|DefineItemActionID;

//https://github.com/CleverRaven/Cataclysm-DDA/blob/master/src/iuse_actor.cpp


/**使用效果 */
export type UseAction = [
    UAPlaceNpc        , // 放置NPC
    UARunEoc          , // 运行Eoc
    UAExplosion       , // 产生爆炸
    UALearnSpell      , // 学习法术
    UACastSpell       , // 施法
    UseActionHardcode , // 硬编码
][number];

/**硬编码效果 */
type UseActionHardcode = [
    "ALCOHOL_STRONG"        , // 大幅度增加醉酒程度。添加疾病 drunk。
    "ALCOHOL_WEAK"          , // 稍微增加醉酒程度。添加疾病 drunk。
    "ALCOHOL"               , // 增加醉酒程度。添加疾病 drunk。
    "ANTIBIOTIC"            , // 帮助抵抗感染。移除疾病 infected 并添加疾病 recover。
    "BANDAGE"               , // 停止出血。
    "BIRDFOOD"              , // 使小鸟变得友好。
    "BLECH"                 , // 导致呕吐, 添加疾病 poison, 增加疼痛并伤害躯干。
    "BLECH_BECAUSE_UNCLEAN" , // 导致警告。
    "CATFOOD"               , // 使猫变得友好。
    "CATTLEFODDER"          , // 使大型草食动物变得友好。
    "CHEW"                  , // 显示消息 "You chew your %s.", 但其他什么也不做。
    "CIG"                   , // 缓解尼古丁渴望。添加疾病 cig。
    "COKE"                  , // 减少饥饿。添加疾病 high。
    "CRACK"                 , // 减少饥饿。添加疾病 high。
    "DISINFECTANT"          , // 防止感染。
    "DOGFOOD"               , // 使狗变得友好。
    "FIRSTAID"              , // 治疗。
    "FLUMED"                , // 添加疾病 took_flumed。
    "FLUSLEEP"              , // 添加疾病 took_flumed 并增加疲劳。
    "FUNGICIDE"             , // 杀死真菌和孢子。移除疾病 fungus 和 spores。
    "HALLU"                 , // 添加疾病 hallu。
    "HONEYCOMB"             , // 产生蜡。
    "INHALER"               , // 移除疾病 asthma。
    "IODINE"                , // 添加疾病 iodine。
    "MARLOSS"               , // "当你吃下这颗浆果时, 你有一种近乎宗教的体验, 感觉与你的周围环境融为一体..."
    "METH"                  , // 添加疾病 meth。
    "NONE"                  , // "你不能对你的 [x] 做任何有趣的事情。"
    "PKILL"                 , // 减少疼痛。添加疾病 pkill[n], 其中 [n] 是在此食物上使用的标志 PKILL_[n] 的级别。
    "PLANTBLECH"            , // 如果玩家没有植物突变, 则激活 BLECH iuse 动作。
    "POISON"                , // 添加疾病 poison 和 foodpoison。
    "PROZAC"                , // 如果当前没有出现, 添加疾病 took_prozac, 否则起到轻微的兴奋剂作用。很少有 took_prozac_bad 的不良反应。
    "PURIFIER"              , // 移除随机数量的负面突变。
    "SEWAGE"                , // 导致呕吐。
    "SLEEP"                 , // 大幅度增加疲劳。
    "THORAZINE"             , // 移除疾病 hallu、visuals、high。另外, 如果疾病 dermatik 也不存在, 则移除疾病 formication。有增加疲劳的负面反应的机会。
    "VITAMINS"              , // 增加健康度 (不要与 HP 混淆) 。
    "WEED"                  , // 让你与 Cheech & Chong 一起滚动。添加疾病 weed_high。
    "XANAX"                 , // 缓解焦虑。添加疾病 took_xanax。
][number];


/**放置NPC */
type UAPlaceNpc = {
    /**在地图上放置一个NPC */
    type: "place_npc";
    /**npc职业ID */
    npc_class_id: NpcClassID;
    /**生成时播报的消息 */
    summon_msg?: (DescText);
    /**将 npc 随机放置在玩家周围, 如果 false: 让玩家决定将其放置在哪里 (默认值: false)  */
    place_randomly?: boolean;
    /**该动作需要多少移动点 */
    moves?: number;
    /**随机 NPC 放置的最大半径。 */
    radius?: number;
}
/**运行Eoc */
type UARunEoc = {
    /**执行某个ECO */
    type: "effect_on_conditions";
    /**说明 */
    description: (DescText);
    /**在菜单中显示的名称 */
    menu_text: (DescText);
    /**eoc列表 */
    effect_on_conditions: (IDObj<EocID> | InlineEoc)[];
}
/**产生爆炸 */
type UAExplosion = {
    /**产生爆炸 */
    type: "explosion";
    /**爆炸数据 */
    explosion: Explosion;
    /**绘制爆炸半径的大小 */
    draw_explosion_radius?: number;
    /**绘制爆炸时使用的颜色。 */
    draw_explosion_color?: (Color);
    /**是否做闪光弹效果 */
    do_flashbang?: boolean;
    /**玩家是否免疫闪光弹效果 */
    flashbang_player_immune?: boolean;
    /**产生的地形效果的传播半径 */
    fields_radius?: number;
    /**产生的地形效果 */
    fields_type?: (FieldID);
    /**产生的地形效果的最小强度 */
    fields_min_intensity?: number;
    /**产生的地形效果的最大强度 */
    fields_max_intensity?: number;
    /**爆炸产生的 EMP 爆炸半径 */
    emp_blast_radius?: number;
    /**爆炸产生的扰频器爆炸半径 */
    scrambler_blast_radius?: number;
};
/**学习法术 */
type UALearnSpell = {
    /**学习法术 */
    type: "learn_spell";
    /**学习的法术列表 */
    spells: SpellID[];
}
/**施法 */
type UACastSpell = {
    /**施法 */
    type: "cast_spell";
    /**法术ID */
    spell_id: SpellID;
    /**不会失败 */
    no_fail?: boolean;
    /**法术等级 */
    level: number;
    /**需要穿戴此物品才能施法 */
    need_worn?: boolean;
}
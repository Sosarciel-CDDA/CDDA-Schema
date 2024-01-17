import { AmmunitionTypeID, BoolObj, Eoc, EocEffect, SpellID, EffectID, TalkTopicID, EocID, FlagID, AmmoID, ArmorID, GenericID, GunID, ItemGroupID, MonsterID, MutationID, NpcClassID, NpcInstanceID, EnchantmentID } from "./Schema";
export declare class ModDefine {
    /**mod物品前缀 */
    MOD_PREFIX: string;
    constructor(prefix: string);
    /**生成适用于此mod的ARMOR ID */
    genArmorID(id: string): ArmorID;
    /**生成适用于此mod的附魔 ID */
    genEnchantmentID(id: string): EnchantmentID;
    /**生成适用于此mod的 通用物品 ID */
    genGenericID(id: string): GenericID;
    /**生成适用于此mod的 枪械 ID */
    genGunID(id: string): GunID;
    /**生成适用于此mod的 子弹 ID */
    genAmmoID(id: string): AmmoID;
    /**生成适用于此mod的 EOC ID */
    genEOCID(id: string): EocID;
    /**生成适用于此mod的 Effect ID */
    genEffectID(id: string): EffectID;
    /**生成适用于此mod的 物品组ID */
    genItemGroupID(id: string): ItemGroupID;
    /**生成适用于此mod的 变异ID */
    genMutationID(id: string): MutationID;
    /**生成适用于此mod的 NPC职业ID */
    genNpcClassID(id: string): NpcClassID;
    /**生成适用于此mod的 NPCID */
    genNpcInstanceID(id: string): NpcInstanceID;
    /**生成适用于此mod的 法术ID */
    genSpellID(id: string): SpellID;
    /**生成适用于此mod的 怪物ID */
    genMonsterID(id: string): MonsterID;
    /**生成适用于此mod的 材质类型 ID */
    genAmmuTypeID(id: string): AmmunitionTypeID;
    /**生成适用于此mod的 FLAG ID */
    genFlagID(id: string): FlagID;
    /**生成适用于此mod的 TalkTopic ID */
    genTalkTopicID(id: string): TalkTopicID;
    /**生成适用此mod的触发eoc
     * @param forceId 强制使用原id
    */
    genActEoc(id: string, effect: EocEffect[], condition?: (BoolObj), forceId?: boolean): Eoc;
}

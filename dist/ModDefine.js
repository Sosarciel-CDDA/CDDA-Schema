"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModDefine = void 0;
class ModDefine {
    /**mod物品前缀 */
    MOD_PREFIX;
    constructor(prefix) {
        this.MOD_PREFIX = prefix;
    }
    /**生成适用于此mod的ARMOR ID */
    genArmorID(id) {
        return `${this.MOD_PREFIX}_ARMOR_${id}`;
    }
    /**生成适用于此mod的附魔 ID */
    genEnchantmentID(id) {
        return `${this.MOD_PREFIX}_ENCH_${id}`;
    }
    /**生成适用于此mod的 通用物品 ID */
    genGenericID(id) {
        return `${this.MOD_PREFIX}_GENERIC_${id}`;
    }
    /**生成适用于此mod的 枪械 ID */
    genGunID(id) {
        return `${this.MOD_PREFIX}_GUN_${id}`;
    }
    /**生成适用于此mod的 子弹 ID */
    genAmmoID(id) {
        return `${this.MOD_PREFIX}_AMMO_${id}`;
    }
    /**生成适用于此mod的 EOC ID */
    genEOCID(id) {
        return `${this.MOD_PREFIX}_EOC_${id}`;
    }
    /**生成适用于此mod的 Effect ID */
    genEffectID(id) {
        return `${this.MOD_PREFIX}_EFF_${id}`;
    }
    /**生成适用于此mod的 物品组ID */
    genItemGroupID(id) {
        return `${this.MOD_PREFIX}_ITEMGP_${id}`;
    }
    /**生成适用于此mod的 变异ID */
    genMutationID(id) {
        return `${this.MOD_PREFIX}_MUT_${id}`;
    }
    /**生成适用于此mod的 NPC职业ID */
    genNpcClassID(id) {
        return `${this.MOD_PREFIX}_NPCCLS_${id}`;
    }
    /**生成适用于此mod的 NPCID */
    genNpcInstanceID(id) {
        return `${this.MOD_PREFIX}_NPC_${id}`;
    }
    /**生成适用于此mod的 法术ID */
    genSpellID(id) {
        return `${this.MOD_PREFIX}_SPELL_${id}`;
    }
    /**生成适用于此mod的 怪物ID */
    genMonsterID(id) {
        return `${this.MOD_PREFIX}_MON_${id}`;
    }
    /**生成适用于此mod的 材质类型 ID */
    genAmmuTypeID(id) {
        return `${this.MOD_PREFIX}_AMMUNIT_${id}`;
    }
    /**生成适用于此mod的 FLAG ID */
    genFlagID(id) {
        return `${this.MOD_PREFIX}_FLAG_${id}`;
    }
    /**生成适用于此mod的 TalkTopic ID */
    genTalkTopicID(id) {
        return `${this.MOD_PREFIX}_TALKTC_${id}`;
    }
    /**生成适用此mod的触发eoc
     * @param forceId 强制使用原id
    */
    genActEoc(id, effect, condition, forceId = false) {
        return {
            type: "effect_on_condition",
            id: forceId ? id : this.genEOCID(id),
            eoc_type: "ACTIVATION",
            effect, condition
        };
    }
}
exports.ModDefine = ModDefine;

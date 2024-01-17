import {
    AmmunitionTypeID, BoolObj, Eoc, EocEffect, EocEffectList, SpellID,
    EffectID, TalkTopicID, EocID ,FlagID,AmmoID, ArmorID, GenericID, GunID,
    ItemGroupID,MonsterID,MutationID,NpcClassID,NpcInstanceID, EnchantmentID
} from "./Schema";


export class ModDefine{
    /**mod物品前缀 */
    MOD_PREFIX:string;
    constructor(prefix:string){
        this.MOD_PREFIX = prefix;
    }
    /**生成适用于此mod的ARMOR ID */
    genArmorID(id:string):ArmorID{
        return `${this.MOD_PREFIX}_ARMOR_${id}`;
    }
    /**生成适用于此mod的附魔 ID */
    genEnchantmentID(id:string):EnchantmentID{
        return `${this.MOD_PREFIX}_ENCH_${id}`;
    }
    /**生成适用于此mod的 通用物品 ID */
    genGenericID(id:string):GenericID{
        return `${this.MOD_PREFIX}_GENERIC_${id}`;
    }
    /**生成适用于此mod的 枪械 ID */
    genGunID(id:string):GunID{
        return `${this.MOD_PREFIX}_GUN_${id}`;
    }
    /**生成适用于此mod的 子弹 ID */
    genAmmoID(id:string):AmmoID{
        return `${this.MOD_PREFIX}_AMMO_${id}`;
    }
    /**生成适用于此mod的 EOC ID */
    genEOCID(id: string):EocID{
        return `${this.MOD_PREFIX}_EOC_${id}`;
    }
    /**生成适用于此mod的 Effect ID */
    genEffectID(id: string):EffectID{
        return `${this.MOD_PREFIX}_EFF_${id}`;
    }
    /**生成适用于此mod的 物品组ID */
    genItemGroupID(id:string):ItemGroupID{
        return `${this.MOD_PREFIX}_ITEMGP_${id}`;
    }
    /**生成适用于此mod的 变异ID */
    genMutationID(id: string):MutationID{
        return `${this.MOD_PREFIX}_MUT_${id}`;
    }
    /**生成适用于此mod的 NPC职业ID */
    genNpcClassID(id:string):NpcClassID{
        return `${this.MOD_PREFIX}_NPCCLS_${id}`;
    }
    /**生成适用于此mod的 NPCID */
    genNpcInstanceID(id:string):NpcInstanceID{
        return `${this.MOD_PREFIX}_NPC_${id}`;
    }
    /**生成适用于此mod的 法术ID */
    genSpellID(id:string):SpellID{
        return `${this.MOD_PREFIX}_SPELL_${id}`;
    }
    /**生成适用于此mod的 怪物ID */
    genMonsterID(id:string):MonsterID{
        return `${this.MOD_PREFIX}_MON_${id}`;
    }
    /**生成适用于此mod的 材质类型 ID */
    genAmmuTypeID(id:string):AmmunitionTypeID{
        return `${this.MOD_PREFIX}_AMMUNIT_${id}`;
    }
    /**生成适用于此mod的 FLAG ID */
    genFlagID(id:string):FlagID{
        return `${this.MOD_PREFIX}_FLAG_${id}`;
    }
    /**生成适用于此mod的 TalkTopic ID */
    genTalkTopicID(id:string):TalkTopicID{
        return `${this.MOD_PREFIX}_TALKTC_${id}`;
    }
    /**生成适用此mod的触发eoc 
     * @param forceId 强制使用原id
    */
    genActEoc(id:string,effect:EocEffect[],condition?: (BoolObj),forceId:boolean=false):Eoc{
        return {
            type:"effect_on_condition",
            id: forceId? id as any:this.genEOCID(id),
            eoc_type:"ACTIVATION",
            effect,condition
        }
    }
}



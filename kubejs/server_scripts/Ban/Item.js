ServerEvents.recipes(event => {
    //Alex的生物Alexsmobs
    event.remove({id:'alexsmobs:enderiophage_rocket'}); // 移除末影噬菌体火箭
    //AE2
    event.remove({output: 'appliedenergistics2:spatial_pylon'}); // 移除空间塔
    event.remove({output: 'appliedenergistics2:spatial_io_port'}); // 移除空间io接口
    event.remove({output: 'appliedenergistics2:spatial_anchor'}); // 移除空间锚
    event.remove({output: 'appliedenergistics2:2_cubed_spatial_cell_component'}); // 移除空间元件 2
    event.remove({output: 'appliedenergistics2:16_cubed_spatial_cell_component'}); // 移除空间元件 16
    event.remove({output: 'appliedenergistics2:128_cubed_spatial_cell_component'}); // 移除空间元件 128
    event.remove({output: 'appliedenergistics2:portable_cell'}); // 移除便携元件
    event.remove({output: 'appliedenergistics2:4k_portable_cell'}); // 移除4k便携元件
    event.remove({output: 'appliedenergistics2:16k_portable_cell'}); // 移除16k便携元件
    event.remove({output: 'appliedenergistics2:64k_portable_cell'}); // 移除64k便携元件
    event.remove({output: 'appliedenergistics2:entropy_manipulator'}); // 移除熵变机械臂
    event.remove({output: 'appliedenergistics2:matter_cannon'}); // 移除物质炮
    event.remove({output: 'appliedenergistics2:tiny_tnt'}); // 移除迷你TNT
    event.remove({output: 'ae2wtlib:infinity_booster_card'}); // 移除无线增幅卡
    event.remove({output: 'appliedenergistics2:network_tool'}); // 移除网络工具
    // 时装工坊
    event.remove({mod: 'armourers_workshop'});// 时装工坊mod
    // 无尽贪婪伪
    event.remove({id: 'endless:sd_creative_storage_upgrade'}); // 创造抽屉升级
    event.remove({id: 'endless:sd_creative_vending_upgrade'}); // 创造抽屉升级
    // 星辉魔法
    event.remove({id: 'astralsorcery:altar/knowledge_share'}); // 知识共享
    event.remove({id: 'astralsorcery:altar/illumination_wand'}); // 辉光星杖
    event.remove({id: 'astralsorcery:altar/exchange_wand'}); // 更替星杖
    event.remove({id: 'astralsorcery:altar/illuminator'}); // 洞穴照明器
    event.remove({id: 'astralsorcery:altar/fountain'}); // 万象泉
    event.remove({id: 'astralsorcery:altar/fountain_prime_liquid'}); // 纳耳狂曼引口
    event.remove({id: 'astralsorcery:altar/fountain_prime_vortex'}); // 费萨利德引口
})

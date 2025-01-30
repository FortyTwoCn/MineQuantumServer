onEvent('recipes', event => {
    // 粗制碳网
    event.shaped('kubejs:IC2_carbon_fibre', [
        'AA',
        'AA'
    ], {
        A: '#forge:dusts/coal'
    });

    // 粗制碳板
    event.shapeless('kubejs:IC2_carbon_mesh', [
        'kubejs:IC2_carbon_fibre', 
        'kubejs:IC2_carbon_fibre'
    ]);

    // 碳板
    event.custom({
        type: 'mekanism:compressing',
        itemInput: { ingredient: { item: 'kubejs:IC2_carbon_mesh' } },
        gasInput: { amount: 1, gas: 'mekanism:liquid_osmium' },
        output: { item: 'kubejs:IC2_carbon_plate' }
    });

    // 合金锭
    event.shaped('2x kubejs:IC2_mixed_metal', [
        'BBB',
        'CCC',
        'DDD'
    ], {
        B: '#forge:plates/iron',
        C: '#forge:plates/bronze',
        D: '#forge:plates/tin'
    });

    // 高级合金
    event.custom({
        type: 'mekanism:compressing',
        itemInput: { ingredient: { item: 'kubejs:IC2_mixed_metal' } },
        gasInput: { amount: 1, gas: 'mekanism:liquid_osmium' },
        output: { item: 'kubejs:IC2_alloy' }
    });

    // 强化铱板
    event.shaped('kubejs:IC2_iridium', [
        'YGY',
        'GZG',
        'YGY'
    ], {
        Y: '#forge:ingots/iridium',
        Z: '#forge:gems/diamond',
        G: 'kubejs:IC2_alloy'
    });

    // 反物质强化铱板
    event.custom({
        type: 'mekanism:nucleosynthesizing',
        itemInput: { ingredient: { item: 'kubejs:IC2_iridium' } },
        gasInput: { amount: 7, gas: 'mekanism:antimatter' },
        output: { item: 'kubejs:IC2_AntimatterIridium' },
        duration: 1500
    });

    // 煤球
    event.shaped('kubejs:IC2_coal_ball', [
        'CCC',
        'CSC',
        'CCC'
    ], {
        C: '#forge:dusts/coal',
        S: 'minecraft:flint'
    });

    // 压缩煤球
    event.custom({
        type: 'mekanism:compressing',
        itemInput: { ingredient: { item: 'kubejs:IC2_coal_ball' } },
        gasInput: { amount: 1, gas: 'mekanism:liquid_osmium' },
        output: { item: 'kubejs:IC2_coal_block' }
    });

    // 煤块
    event.shaped('kubejs:IC2_coal_chunk', [
        'CCC',
        'CSC',
        'CCC'
    ], {
        C: 'kubejs:IC2_coal_block',
        S: '#forge:obsidian'
    });

    // 钻石
    event.custom({
        type: 'mekanism:compressing',
        itemInput: { ingredient: { item: 'kubejs:IC2_coal_chunk' } },
        gasInput: { amount: 1, gas: 'mekanism:liquid_osmium' },
        output: { item: 'minecraft:diamond' }
    });
});

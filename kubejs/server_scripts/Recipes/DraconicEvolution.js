//   ____                        _                     
//  / __ \                      | |                    
// | |  | | _   _   __ _  _ __  | |_  _   _  _ __ ___  
// | |  | || | | | / _` || '_ \ | __|| | | || '_ ` _ \ 
// | |__| || |_| || (_| || | | || |_ | |_| || | | | | |
//  \___\_\ \__,_| \__,_||_| |_| \__| \__,_||_| |_| |_|
//                                                     
//														
//BY FortyTwocn / 2025
//QQ:760450201
onEvent('recipes', event => {
    // 移除所有原版融合配方
    const removeRecipes = [
        // 双足飞龙系列
        'draconicevolution:tools/wyvern_shovel',
        'draconicevolution:tools/wyvern_hoe',
        'draconicevolution:tools/wyvern_pickaxe',
        'draconicevolution:tools/wyvern_axe',
        'draconicevolution:tools/wyvern_bow',
        'draconicevolution:tools/wyvern_sword',
        'draconicevolution:tools/wyvern_chestpiece',
        // 神龙系列
        'draconicevolution:tools/draconic_shovel',
        'draconicevolution:tools/draconic_hoe',
        'draconicevolution:tools/draconic_pickaxe',
        'draconicevolution:tools/draconic_axe',
        'draconicevolution:tools/draconic_bow',
        'draconicevolution:tools/draconic_sword',
        'draconicevolution:tools/draconic_chestpiece',
        'draconicevolution:tools/draconic_staff',
        // 混沌系列
        'draconicevolution:tools/chaotic_shovel',
        'draconicevolution:tools/chaotic_hoe',
        'draconicevolution:tools/chaotic_pickaxe',
        'draconicevolution:tools/chaotic_axe',
        'draconicevolution:tools/chaotic_bow',
        'draconicevolution:tools/chaotic_sword',
        'draconicevolution:tools/chaotic_chestpiece',
        'draconicevolution:tools/chaotic_staff',
        'draconicevolution:tools/alt_chaotic_staff'
    ];
    removeRecipes.forEach(id => event.remove({id: id}));

    // 定义通用配方构建函数
    const createFusionRecipe = (output, catalyst, energy, tier, ingredients) => ({
        type: 'draconicevolution:fusion_crafting',
        result: { item: output },
        catalyst: { item: catalyst },
        total_energy: energy,
        tier: tier,
        ingredients: ingredients.map(i => i.startsWith('#') ? { tag: i.slice(1) } : { item: i }) //识别tag还是item 如果有#则自动变成{ tag:  } 不然就是{ item:  }
    });

    // 双足飞龙系列配方
    const wyvernIngredients = [
        'draconicevolution:wyvern_energy_core', 'mekanism:pellet_antimatter',
        'draconicevolution:wyvern_energy_core', 'mekanism:pellet_antimatter',
        'create:shadow_steel', 'draconicevolution:wyvern_energy_core',
        'create:shadow_steel', 'draconicevolution:wyvern_energy_core',
        'cataclysm:ignitium_ingot', 'draconicevolution:wyvern_core',
        'cataclysm:ignitium_ingot', 'draconicevolution:wyvern_core',
        'lazierae2:speculative_processor', 'extrabotany:theuniverse',
        'lazierae2:speculative_processor', 'extrabotany:theuniverse',
        'kubejs:quintuple_alfsteel_ingot', 'draconicevolution:wyvern_core',
        'kubejs:quintuple_alfsteel_ingot', 'draconicevolution:wyvern_core',
        'envirocore:aethium_crystal', 'draconicevolution:wyvern_energy_core',
        'envirocore:aethium_crystal', 'draconicevolution:wyvern_energy_core',
        'draconicevolution:wyvern_energy_core', 'mekanism:pellet_antimatter',
        'draconicevolution:wyvern_energy_core', 'mekanism:pellet_antimatter'
    ];

    const wyvernTools = [
        { output: 'draconicevolution:wyvern_shovel', catalyst: 'astralsorcery:infused_crystal_shovel' },
        { output: 'draconicevolution:wyvern_hoe', catalyst: 'aiotbotania:terra_hoe' },
        { output: 'draconicevolution:wyvern_pickaxe', catalyst: 'occultism:infused_pickaxe' },
        { output: 'draconicevolution:wyvern_axe', catalyst: 'twilightforest:minotaur_axe' },
        { output: 'draconicevolution:wyvern_bow', catalyst: 'mekanism:electric_bow' },
        { output: 'draconicevolution:wyvern_sword', catalyst: 'create_stuff_additions:shadow_steel_sword' },
        { output: 'draconicevolution:wyvern_chestpiece', catalyst: 'mekanism:mekasuit_bodyarmor' }
    ];

    wyvernTools.forEach(tool => {
        event.custom(createFusionRecipe(
            tool.output,
            tool.catalyst,
            80000000,
            'WYVERN',
            wyvernIngredients
        ));
    });
    // 神龙系列完整材料
    const draconicIngredients = [
        'draconicevolution:draconic_energy_core',
        'mekanism:pellet_antimatter',
        'draconicevolution:draconic_energy_core',
        'mekanism:pellet_antimatter',
        'taiga:nihilite_ingot',
        'draconicevolution:draconic_energy_core',
        'taiga:nihilite_ingot',
        'draconicevolution:draconic_energy_core',
        'pneumaticcraft:printed_circuit_board',
        'draconicevolution:awakened_core',
        'pneumaticcraft:printed_circuit_board',
        'draconicevolution:awakened_core',
        'draconicevolution:reactor_stabilizer',
        'emendatusenigmatica:enderium_block',
        'draconicevolution:reactor_stabilizer',
        'emendatusenigmatica:enderium_block',
        'draconicevolution:reactor_stabilizer',
        'draconicevolution:reactor_stabilizer',
        'draconicevolution:reactor_stabilizer',
        'draconicevolution:reactor_stabilizer',
        'lazierae2:speculative_processor',
        'draconicevolution:awakened_core',
        'lazierae2:speculative_processor',
        'draconicevolution:awakened_core',
        'envirocore:nanorite_crystal',
        'draconicevolution:draconic_energy_core',
        'envirocore:nanorite_crystal',
        'draconicevolution:draconic_energy_core',
        'draconicevolution:draconic_energy_core',
        'mekanism:pellet_antimatter',
        'draconicevolution:draconic_energy_core',
        'mekanism:pellet_antimatter'
    ];

    // 神龙工具定义
    const draconicTools = [
        { output: 'draconicevolution:draconic_shovel', catalyst: 'draconicevolution:wyvern_shovel' },
        { output: 'draconicevolution:draconic_hoe', catalyst: 'draconicevolution:wyvern_hoe' },
        { output: 'draconicevolution:draconic_pickaxe', catalyst: 'draconicevolution:wyvern_pickaxe' },
        { output: 'draconicevolution:draconic_axe', catalyst: 'draconicevolution:wyvern_axe' },
        { output: 'draconicevolution:draconic_bow', catalyst: 'draconicevolution:wyvern_bow' },
        { output: 'draconicevolution:draconic_sword', catalyst: 'draconicevolution:wyvern_sword' },
        { output: 'draconicevolution:draconic_chestpiece', catalyst: 'draconicevolution:wyvern_chestpiece' },
        { output: 'draconicevolution:draconic_staff', catalyst: 'draconicevolution:awakened_core' } 
    ];

    // 应用神龙配方
    draconicTools.forEach(tool => {
        event.custom(createFusionRecipe(
            tool.output,
            tool.catalyst,
            320000000,
            'DRACONIC',
            draconicIngredients
        ));
    });

    // 混沌系列完整材料（以剑为例）
    const chaoticIngredients = [
        'minecraft:bedrock',
        'minecraft:bedrock',
        'minecraft:bedrock'
    ];

    const chaoticTools = [
        { output: 'draconicevolution:chaotic_shovel', catalyst: 'draconicevolution:draconic_shovel' },
        { output: 'draconicevolution:chaotic_hoe', catalyst: 'draconicevolution:draconic_hoe' },
        { output: 'draconicevolution:chaotic_pickaxe', catalyst: 'draconicevolution:draconic_pickaxe' },
        { output: 'draconicevolution:chaotic_axe', catalyst: 'draconicevolution:draconic_axe' },
        { output: 'draconicevolution:chaotic_bow', catalyst: 'draconicevolution:draconic_bow' },
        { output: 'draconicevolution:chaotic_sword', catalyst: 'draconicevolution:draconic_sword' },
        { output: 'draconicevolution:chaotic_chestpiece', catalyst: 'draconicevolution:draconic_chestpiece' },
        { output: 'draconicevolution:chaotic_staff', catalyst: 'draconicevolution:chaotic_core' }
    ];

    // 应用混沌配方
    chaoticTools.forEach(tool => {
        event.custom({
            type: 'draconicevolution:fusion_crafting',
            result: { item: tool.output },
            catalyst: { item: tool.catalyst },
            total_energy: 1280000000,
            tier: 'CHAOTIC',
            ingredients: chaoticIngredients.map(i => ({ item: i }))
        });
    });

// 升级混沌权杖配方
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        result: { item: 'draconicevolution:chaotic_staff' },
        catalyst: { item: 'draconicevolution:chaotic_core' },
        total_energy: 2560000000,
        tier: 'CHAOTIC',
        ingredients: chaoticIngredients.map(i => ({ item: i }))
    });
});

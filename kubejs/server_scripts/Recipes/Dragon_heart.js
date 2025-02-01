//   ____                        _                     
//  / __ \                      | |                    
// | |  | | _   _   __ _  _ __  | |_  _   _  _ __ ___  
// | |  | || | | | / _` || '_ \ | __|| | | || '_ ` _ \ 
// | |__| || |_| || (_| || | | || |_ | |_| || | | | | |
//  \___\_\ \__,_| \__,_||_| |_| \__| \__,_||_| |_| |_|
//                                                     
//														
//CREATED BY FortyTwocn / 2025
//QQ:760450201
//龙心合成
//等级DRACONIUM基础 WYVERN双足 DRACONIC 神龙 CHAOTIC混沌
onEvent('recipes', event => {
	//充能龙块
    event.custom({
        type: 'draconicevolution:fusion_crafting', // 注入配方
        result: {
            item: 'kubejs:draconium_block_charged' // 输出：充能龙块
        },
        catalyst: {
            tag: 'forge:storage_blocks/draconium'// 输入 TAG标签 龙块
        },
        total_energy: 10000000,  //10M电
        tier: 'DRACONIUM',
        ingredients: [
            { tag: 'forge:dusts/redstone' },   // 红石
            { tag: 'forge:dusts/redstone' },   // 红石
            { tag: 'forge:dusts/redstone' },   // 红石
            { tag: 'forge:dusts/redstone' }    // 红石
        ]
    });
	//觉醒龙块
    event.custom({
        type: 'draconicevolution:fusion_crafting', // 注入配方
        result: {
            item: 'draconicevolution:awakened_draconium_block',// 输出：觉醒龙块
			count: 2
        },
        catalyst: {
            item: 'kubejs:artifical_dragon_heart',// 输入 人造龙心
        },
        total_energy: 5000000,  //5M电
        tier: 'CHAOTIC',
        ingredients: [
            { item: 'draconicevolution:draconium_core' },   // 龙核心
            { item: 'draconicevolution:draconium_core' },   // 龙核心
            { item: 'kubejs:draconium_block_charged' },   // 充能龙块
            { item: 'kubejs:draconium_block_charged' },   // 充能龙块
			{ item: 'draconicevolution:wyvern_energy_core' },   // 飞龙能量核心
            { item: 'draconicevolution:wyvern_energy_core' },   // 飞龙能量核心
            { item: 'draconicevolution:draconium_core' },   // 龙核心
            { item: 'draconicevolution:draconium_core' }    // 龙核心
        ]
    });
  //人造龙心框架
    event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
			{
			type: 'pneumaticcraft:stacked_item',  // 输入类型为堆叠物品
			item: 'draconicevolution:draconium_ingot',   // 输入物品 龙锭
			count: 18                             // 输入物品数量
			}
		],
		pressure: 4.8,  // 所需压力（1.0 bar）
		results: [
			{
			item: 'kubejs:artifical_dragon_heart_shell'  // 输出物品  人造龙心框架
			}
		]
	});
  //未注入能量的龙心
	event.custom({
		type: 'create:filling', // 配方类型为 Create 的填充
		ingredients: [
			{
			item: 'kubejs:artifical_dragon_heart_shell' // 输入物品 
			},
			{
			fluidTag: 'tconstruct:molten_enderium', // 输入液体 
			amount: 1000
			}
		],
		results: [
			{
			item: 'kubejs:non_energetic_artifical_dragon_heart' // 输出物品为 未注入能量的龙心
			}
    ]
  });
  // 人造龙心
	event.custom({
		type: 'mekanism:nucleosynthesizing', // 配方类型 反质子核合成器 
		itemInput: {
			ingredient: {
				item: 'kubejs:non_energetic_artifical_dragon_heart' // 输入物品 未注入能量的龙心
						}
				   },
		gasInput: {
		amount: 5, // 需要 7 个单位
		gas: 'mekanism:antimatter' // 气体类型 反物质
				},
		output: {
		item: 'kubejs:artifical_dragon_heart' // 输出物品 人造龙心
				},
		duration: 1500 // 配方耗时为 1250 ticks
	});
  //龙心
    event.custom({
        type: 'draconicevolution:fusion_crafting', // 注入配方
        result: {
            item: 'draconicevolution:dragon_heart' // 输出：龙心
        },
        catalyst: {
            item: 'minecraft:dragon_egg'// 输入 龙蛋
        },
        total_energy: 8000000,  //8M电
        tier: 'DRACONIUM',
        ingredients: [
            { item: 'kubejs:draconium_block_charged' },   // 充能龙块
			{ item: 'kubejs:draconium_block_charged' },   // 充能龙块
            { item: 'minecraft:end_crystal' },   // 末影水晶
            { item: 'minecraft:end_crystal' },   // 末影水晶
            { item: 'minecraft:end_crystal' },   // 末影水晶
            { item: 'minecraft:end_crystal' }    // 末影水晶

        ]
    })
});

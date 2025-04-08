//   ____                        _                     
//  / __ \                      | |                    
// | |  | | _   _   __ _  _ __  | |_  _   _  _ __ ___  
// | |  | || | | | / _` || '_ \ | __|| | | || '_ ` _ \ 
// | |__| || |_| || (_| || | | || |_ | |_| || | | | | |
//  \___\_\ \__,_| \__,_||_| |_| \__| \__,_||_| |_| |_|
//                                                     
//														
//BY FortyTwocn / 2024
//QQ:760450201
onEvent('recipes', event => {
	//改变输入 黑曜石粉末变为矿词 混合配方
	//event.replaceInput({ type: 'create:mixing' }, 'create:powdered_obsidian', '#forge:dusts/obsidian') //无效
	//
	event.remove({id: 'create_stuff_additions:blazing_sword_recipe'});//烈焰剑
	event.remove({id: 'create_stuff_additions:blazing_shovel_recipe'});//烈焰铲
	event.remove({id: 'create_stuff_additions:blazing_axe_recipe'});//烈焰斧
	event.remove({id: 'create_stuff_additions:blazing_pickaxe_recipe'});//烈焰镐
	event.remove({id: 'create:mixing/chromatic_compound'});//异彩化合物
	//异彩化合物
	event.custom({
		type: 'create:mixing',    
		ingredients: [  
			{ tag: 'forge:dusts/glowstone' },
			{ tag: 'forge:dusts/glowstone' },
			{ tag: 'forge:dusts/glowstone' },
			{ tag: 'forge:dusts/obsidian' },
			{ tag: 'forge:dusts/obsidian' },
			{ tag: 'forge:dusts/obsidian' },
			{ item: 'create:polished_rose_quartz' }
		],
		results: [
			{ item: 'create:chromatic_compound', count: 1 }
			],
		heatRequirement: 'superheated'
	});
	//烈焰剑
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { item: 'minecraft:golden_sword' },
            { tag: 'forge:dusts/obsidian' }
        ],
        results: [
            { item: 'create_stuff_additions:blazing_cleaver', 'count': 1 }
        ],
        heatRequirement: 'heated'
    });
	//烈焰铲
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { item: 'minecraft:golden_shovel' },
            { tag: 'forge:dusts/obsidian' }
        ],
        results: [
            { item: 'create_stuff_additions:blazing_shovel', 'count': 1 }
        ],
        heatRequirement: 'heated'
    });
	//烈焰斧
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { item: 'minecraft:golden_axe' },
            { tag: 'forge:dusts/obsidian' }
        ],
        results: [
            { item: 'create_stuff_additions:blazing_axe', 'count': 1 }
        ],
        heatRequirement: 'heated'
    });
	//烈焰镐
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { item: 'minecraft:golden_pickaxe' },
            { tag: 'forge:dusts/obsidian' }
        ],
        results: [
            { item: 'create_stuff_additions:blazing_pickaxe', 'count': 1 }
        ],
        heatRequirement: 'heated'
    });
})
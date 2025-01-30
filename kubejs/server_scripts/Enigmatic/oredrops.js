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
//
//使原版和修改的矿石掉落 Emendatus Enigmatica 区块和集群
//

onEvent('block.loot_tables', event => {
	
//
//
//-----主世界-----
//
//
	//煤炭 非矿块 
	//event.addSimpleBlock('#forge:ores/coal', 'emendatusenigmatica:coal_chunk')
	//铁
	event.addSimpleBlock('#forge:ores/iron', 'emendatusenigmatica:iron_chunk')
	//金
	event.addSimpleBlock('#forge:ores/gold', 'emendatusenigmatica:gold_chunk')
	//钻石 非矿块
	//event.addSimpleBlock('#forge:ores/diamond', 'emendatusenigmatica:diamond_chunk')
	//绿宝石 非矿块
	//event.addSimpleBlock('#forge:ores/emerald', 'emendatusenigmatica:emerald_chunk')
	//青金石 非矿块
	//event.addSimpleBlock('#forge:ores/lapis', 'emendatusenigmatica:lapis_chunk')
	//红石 非矿块
	//event.addSimpleBlock('#forge:ores/redstone', 'emendatusenigmatica:redstone_chunk')
	//铜
	event.addSimpleBlock('#forge:ores/copper', 'emendatusenigmatica:copper_chunk')
	//铝
	event.addSimpleBlock('#forge:ores/aluminum', 'emendatusenigmatica:aluminum_chunk')
	//银
	event.addSimpleBlock('#forge:ores/silver', 'emendatusenigmatica:silver_chunk')
	//铅
	event.addSimpleBlock('#forge:ores/lead', 'emendatusenigmatica:lead_chunk')
	//镍
	event.addSimpleBlock('#forge:ores/nickel', 'emendatusenigmatica:nickel_chunk')
	//铀
	event.addSimpleBlock('#forge:ores/uranium', 'emendatusenigmatica:uranium_chunk')
	//锇
	event.addSimpleBlock('#forge:ores/osmium', 'emendatusenigmatica:osmium_chunk')
	//锡
	event.addSimpleBlock('#forge:ores/tin', 'emendatusenigmatica:tin_chunk')
	//锌
	event.addSimpleBlock('#forge:ores/zinc', 'emendatusenigmatica:zinc_chunk')
	//萤石
	event.addSimpleBlock('#forge:ores/fluorite', 'emendatusenigmatica:fluorite_chunk')
	//朱砂
	event.addSimpleBlock('#forge:ores/cinnabar', 'emendatusenigmatica:cinnabar_chunk')
	//磷灰石
	event.addSimpleBlock('#forge:ores/apatite', 'emendatusenigmatica:apatite_chunk')
	//硫
	event.addSimpleBlock('#forge:ores/sulfur', 'emendatusenigmatica:sulfur_chunk')
	//硝酸钾 非矿块
	//event.addSimpleBlock('#forge:ores/potassium_nitrate', 'emendatusenigmatica:potassium_nitrate_chunk')
	//赛特斯石英
	event.addBlock('emendatusenigmatica:certus_quartz_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(2, 3)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'appliedenergistics2:certus_quartz_crystal'})
			})
		})
	//充能赛特斯石英
	event.addBlock('emendatusenigmatica:charged_certus_quartz_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(2, 3)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'appliedenergistics2:charged_certus_quartz_crystal'})
			})
		})

//
//
//-----下届-----
//
//
	//煤炭 非矿块
/*
	event.addBlock('emendatusenigmatica:coal_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:coal_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:coal_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:coal_chunk'})
			})
		})
*/
	//铁
	event.addBlock('emendatusenigmatica:iron_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:iron_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:iron_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:iron_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:iron_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:iron_chunk'})
			})
		})
	//金
	event.addBlock('emendatusenigmatica:gold_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:gold_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:gold_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:gold_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:gold_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:gold_chunk'})
			})
		})
	event.addBlock('geolosys:nether_gold_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:gold_chunk'})
			})
		})
	//钻石 非矿块
/*
	event.addBlock('emendatusenigmatica:diamond_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:diamond_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:diamond_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:diamond_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:diamond_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:diamond_chunk'})
			})
		})
*/
	//绿宝石 非矿块
/*
	event.addBlock('emendatusenigmatica:emerald_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:emerald_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:coal_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:emerald_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:emerald_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:emerald_chunk'})
			})
		})
*/
	//青金石 非矿块
/*
	event.addBlock('emendatusenigmatica:lapis_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lapis_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:lapis_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lapis_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:lapis_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lapis_chunk'})
			})
		})
*/
	//红石 非矿块
/*
	event.addBlock('emendatusenigmatica:redstone_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:redstone_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:redstone_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:redstone_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:redstone_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:redstone_chunk'})
			})
		})
*/
	//下届石英
	event.addBlock('emendatusenigmatica:quartz_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:quartz_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:quartz_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:quartz_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:quartz_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:quartz_chunk'})
			})
		})
	//铜
	event.addBlock('emendatusenigmatica:copper_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:copper_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:copper_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:copper_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:copper_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:copper_chunk'})
			})
		})
	//铝
	event.addBlock('emendatusenigmatica:aluminum_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:aluminum_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:aluminum_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:aluminum_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:aluminum_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:aluminum_chunk'})
			})
		})
	//银
	event.addBlock('emendatusenigmatica:silver_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:silver_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:silver_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:silver_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:silver_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:silver_chunk'})
			})
		})
	//铅
	event.addBlock('emendatusenigmatica:lead_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lead_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:lead_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lead_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:lead_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lead_chunk'})
			})
		})
	//镍
	event.addBlock('emendatusenigmatica:nickel_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:nickel_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:nickel_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:nickel_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:nickel_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:nickel_chunk'})
			})
		})
	//铀
	event.addBlock('emendatusenigmatica:uranium_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:uranium_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:uranium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:uranium_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:uranium_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:uranium_chunk'})
			})
		})
	//锇
	event.addBlock('emendatusenigmatica:osmium_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:osmium_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:osmium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:osmium_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:osmium_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:osmium_chunk'})
			})
		})
	//锡
	event.addBlock('emendatusenigmatica:tin_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:tin_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:tin_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:tin_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:tin_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:tin_chunk'})
			})
		})
	//锌
	event.addBlock('emendatusenigmatica:zinc_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:zinc_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:zinc_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:zinc_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:zinc_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:zinc_chunk'})
			})
		})
    //钴
	event.addBlock('#forge:ores/cobalt', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:cobalt_chunk'})
			}) 
		})
	//赛特斯石英
	event.addBlock('emendatusenigmatica:certus_quartz_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(3, 4)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'appliedenergistics2:certus_quartz_crystal'})
			})
		})
	event.addBlock('emendatusenigmatica:certus_quartz_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(3, 4)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'appliedenergistics2:certus_quartz_crystal'})
			})
		})
	event.addBlock('emendatusenigmatica:certus_quartz_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(3, 4)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'appliedenergistics2:certus_quartz_crystal'})
			})
		})
	//充能赛特斯石英
	event.addBlock('emendatusenigmatica:charged_certus_quartz_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(3, 4)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'appliedenergistics2:charged_certus_quartz_crystal'})
			})
		})
	event.addBlock('emendatusenigmatica:charged_certus_quartz_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(3, 4)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'appliedenergistics2:charged_certus_quartz_crystal'})
			})
		})
	event.addBlock('emendatusenigmatica:charged_certus_quartz_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(3, 4)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'appliedenergistics2:charged_certus_quartz_crystal'})
			})
		})
	//萤石
	event.addBlock('emendatusenigmatica:fluorite_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:fluorite_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:fluorite_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:fluorite_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:fluorite_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:fluorite_chunk'})
			})
		})
	//朱砂
	event.addBlock('emendatusenigmatica:cinnabar_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:cinnabar_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:cinnabar_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:cinnabar_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:cinnabar_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:cinnabar_chunk'})
			})
		})
	//磷灰石
	event.addBlock('emendatusenigmatica:apatite_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:apatite_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:apatite_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:apatite_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:apatite_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:apatite_chunk'})
			})
		})
	//硫
	event.addBlock('emendatusenigmatica:sulfur_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:sulfur_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:sulfur_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:sulfur_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:sulfur_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:sulfur_chunk'})
			})
		})
	//硝酸钾 非矿块
/*
	event.addBlock('emendatusenigmatica:potassium_nitrate_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:potassium_nitrate_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:potassium_nitrate_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:potassium_nitrate_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:potassium_nitrate_nylium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:potassium_nitrate_chunk'})
			})
		})
*/
//
//
//-----末地-----
//
//
	//碳 非矿块
	//event.addSimpleBlock('emendatusenigmatica:coal_end_stone_ore', 'emendatusenigmatica:coal_cluster')
	//铁
	event.addSimpleBlock('emendatusenigmatica:iron_end_stone_ore', 'emendatusenigmatica:iron_cluster')
	//金
	event.addSimpleBlock('emendatusenigmatica:gold_end_stone_ore', 'emendatusenigmatica:gold_cluster')
	//钻石 非矿块
	//event.addSimpleBlock('emendatusenigmatica:diamond_end_stone_ore', 'emendatusenigmatica:diamond_cluster')
	//绿宝石 非矿块
	//event.addSimpleBlock('emendatusenigmatica:emerald_end_stone_ore', 'emendatusenigmatica:emerald_cluster')
	//青金石 非矿块
	//event.addSimpleBlock('emendatusenigmatica:lapis_end_stone_ore', 'emendatusenigmatica:lapis_cluster')
	//红石 非矿块
	//event.addSimpleBlock('emendatusenigmatica:redstone_end_stone_ore', 'emendatusenigmatica:redstone_cluster')
	//铜
	event.addSimpleBlock('emendatusenigmatica:copper_end_stone_ore', 'emendatusenigmatica:copper_cluster')
	//铝
	event.addSimpleBlock('emendatusenigmatica:aluminum_end_stone_ore', 'emendatusenigmatica:aluminum_cluster')
	//银
	event.addSimpleBlock('emendatusenigmatica:silver_end_stone_ore', 'emendatusenigmatica:silver_cluster')
	//铅
	event.addSimpleBlock('emendatusenigmatica:lead_end_stone_ore', 'emendatusenigmatica:lead_cluster')
	//镍
	event.addSimpleBlock('emendatusenigmatica:nickel_end_stone_ore', 'emendatusenigmatica:nickel_cluster')
	//铀
	event.addSimpleBlock('emendatusenigmatica:uranium_end_stone_ore', 'emendatusenigmatica:uranium_cluster')
	//锇
	event.addSimpleBlock('emendatusenigmatica:osmium_end_stone_ore', 'emendatusenigmatica:osmium_cluster')
	//锡
	event.addSimpleBlock('emendatusenigmatica:tin_end_stone_ore', 'emendatusenigmatica:tin_cluster')
	//锌
	event.addSimpleBlock('emendatusenigmatica:zinc_end_stone_ore', 'emendatusenigmatica:zinc_cluster')
	//萤石
	event.addSimpleBlock('emendatusenigmatica:fluorite_end_stone_ore', 'emendatusenigmatica:fluorite_cluster')
	//朱砂
	event.addSimpleBlock('emendatusenigmatica:cinnabar_end_stone_ore', 'emendatusenigmatica:cinnabar_cluster')
	//磷灰石
	event.addSimpleBlock('emendatusenigmatica:apatite_end_stone_ore', 'emendatusenigmatica:apatite_cluster')
	//硫
	event.addSimpleBlock('emendatusenigmatica:sulfur_end_stone_ore', 'emendatusenigmatica:sulfur_cluster')
	//硝酸钾 非矿块
	//event.addSimpleBlock('emendatusenigmatica:sulfur_end_stone_ore', 'emendatusenigmatica:sulfur_cluster')
	//赛特斯石英
	event.addBlock('emendatusenigmatica:certus_quartz_end_stone_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(6, 8)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'appliedenergistics2:certus_quartz_crystal'})
			})
		})
	//充能赛特斯石英
	event.addBlock('emendatusenigmatica:charged_certus_quartz_end_stone_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(6, 8)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'appliedenergistics2:charged_certus_quartz_crystal'})
			})
		})
//
//fin
//
})

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
StartupEvents.registry('minecraft:item', event => {
    //UI类别
    event.create('kubejs:alert').displayName('感叹号');
    event.create('kubejs:arrow_down').displayName('箭头下');
    event.create('kubejs:arrow_left').displayName('箭头左');
    event.create('kubejs:arrow_left2').displayName('回车左');
    event.create('kubejs:arrow_right').displayName('箭头右');
    event.create('kubejs:arrow_right2').displayName('回车右');
    event.create('kubejs:arrow_up').displayName('箭头上');
    event.create('kubejs:check').displayName('正确');
    event.create('kubejs:cross_blue').displayName('蓝色错误');
    event.create('kubejs:cross_o').displayName('红色错误');
    event.create('kubejs:home').displayName('主页');
    event.create('kubejs:info').displayName('信息');
    event.create('kubejs:notify').displayName('提醒');
    event.create('kubejs:server').displayName('服务器');
    event.create('kubejs:search').displayName('搜索');
    event.create('kubejs:refresh').displayName('刷新');
    event.create('kubejs:settings').displayName('设置');
    event.create('kubejs:speech').displayName('说话');
    //物品
    event.create('kubejs:fb_hb_56').displayName('胡萝卜币');
    event.create('kubejs:fb_hb_46').displayName('红鹰币');
    event.create('kubejs:fb_gem_4').displayName('绿宝石');
    event.create('kubejs:fb_gem_5').displayName('蓝宝石');
    event.create('kubejs:fb_gem_6').displayName('红宝石');
    event.create('kubejs:fb_schematic_30').displayName('量子科技签到券');
    event.create('kubejs:fb_schematic_50').displayName('量子科技兑换券');
    event.create('kubejs:fb_chest_21').displayName('VIP1宝箱');
    event.create('kubejs:fb_chest_22').displayName('VIP2宝箱');
    event.create('kubejs:fb_chest_23').displayName('VIP3宝箱');
    event.create('kubejs:fb_chest_24').displayName('VIP4宝箱');
    event.create('kubejs:fb_chest_25').displayName('VIP6宝箱');
    event.create('kubejs:fb_chest_26').displayName('KING');
    //战利品箱
    event.create('kubejs:common_lootbox').displayName('普通战利品箱');
    event.create('kubejs:rare_lootbox').displayName('稀有战利品箱');
    event.create('kubejs:epic_lootbox').displayName('史诗战利品箱');
    event.create('kubejs:legendary_lootbox').displayName('传奇战利品箱');
    //快乐包
    event.create('kubejs:miners_delight').displayName('矿工快乐包');
    event.create('kubejs:sorcerers_delight').displayName('法师快乐包');
    event.create('kubejs:farmers_delight').displayName('农夫快乐包');
    event.create('kubejs:blacksmiths_delight').displayName('铁匠快乐包');
    event.create('kubejs:scavengers_delight').displayName('拾荒者快乐包');
    event.create('kubejs:alchemists_delight').displayName('炼金术师快乐包');
    // CPU
    event.create('kubejs:cpu_core_mk_1026').displayName('CPU核心550A');
    event.create('kubejs:cpu_core_eg_28222').displayName('CPU核心550C');
    event.create('kubejs:cpu_core_as_81221').displayName('CPU核心550W');
    //记忆芯片
    event.create('kubejs:memory_basic_empty').displayName('基础记忆芯片备片');
    event.create('kubejs:memory_basic_filled').displayName('基础记忆芯片');
    event.create('kubejs:memory_advanced_empty').displayName('高级记忆芯片备片');
    event.create('kubejs:memory_advanced_filled').displayName('高级记忆芯片');
    event.create('kubejs:memory_elite_empty').displayName('精英记忆芯片备片');
    event.create('kubejs:memory_elite_filled').displayName('精英记忆芯片');
    event.create('kubejs:memory_ultimate_empty').displayName('终极记忆芯片备片');
    event.create('kubejs:memory_ultimate_filled').displayName('终极记忆芯片');
    // Mastery Shards
    event.create('kubejs:automation_mastery_shard').displayName('自动化专精碎片');
    event.create('kubejs:botanical_mastery_shard').displayName('植物学专精碎片');
    event.create('kubejs:astronomy_mastery_shard').displayName('天文学专精碎片');
    event.create('kubejs:alchemy_mastery_shard').displayName('炼金专精碎片');
    event.create('kubejs:ritual_mastery_shard').displayName('仪式专精碎片');
    event.create('kubejs:aura_mastery_shard').displayName('灵气专精碎片');
    event.create('kubejs:engineering_mastery_shard').displayName('工程师专精碎片');
    event.create('kubejs:energistics_mastery_shard').displayName('能源专精碎片');
    event.create('kubejs:dimensional_mastery_shard').displayName('龙芯碎片');
    event.create('kubejs:battle_mastery_shard').displayName('战斗专精碎片');
    event.create('kubejs:excavation_mastery_shard').displayName('挖掘专精碎片');
    event.create('kubejs:culinary_mastery_shard').displayName('烹饪专精碎片');
    //专精凭证
    event.create('kubejs:automation_mastery_token').displayName('自动化专精凭证');
    event.create('kubejs:botanical_mastery_token').displayName('植物学专精凭证');
    event.create('kubejs:astronomy_mastery_token').displayName('天文学专精凭证');
    event.create('kubejs:alchemy_mastery_token').displayName('炼金专精凭证');
    event.create('kubejs:ritual_mastery_token').displayName('仪式专精凭证');
    event.create('kubejs:aura_mastery_token').displayName('灵气专精凭证');
    event.create('kubejs:engineering_mastery_token').displayName('工程师专精凭证');
    event.create('kubejs:energistics_mastery_token').displayName('能源专精凭证');
    event.create('kubejs:dimensional_mastery_token').displayName('维度专精凭证');
    event.create('kubejs:battle_mastery_token').displayName('战斗专精凭证');
    event.create('kubejs:excavation_mastery_token').displayName('挖掘专精凭证');
    event.create('kubejs:culinary_mastery_token').displayName('烹饪专精凭证');
    //环境塑造器
    event.create('kubejs:worldshaper_handle').displayName('环境塑造器握把');
    event.create('kubejs:worldshaper_cog').displayName('环境塑造器齿轮');
    event.create('kubejs:worldshaper_barrel').displayName('环境塑造器枪管');
    //龙心合成
    event.create('kubejs:artifical_dragon_heart').displayName('人造龙心');
    event.create('kubejs:non_energetic_artifical_dragon_heart').displayName('未注能的人造龙心');
    event.create('kubejs:artifical_dragon_heart_shell').displayName('人造龙心框架');
    // other
    event.create('kubejs:quintuple_alfsteel_ingot').displayName('五重精灵合金锭');
    event.create('kubejs:compressed_steel_ingot').displayName('压缩钢锭');
    event.create('kubejs:hot_compressed_steel_ingot').displayName('热压缩钢锭');
    event.create('kubejs:superheated_compressed_steel_ingot').displayName('过热压缩钢锭');
    //ic2
    event.create('kubejs:ic2_antimatteriridium').displayName('反物质强化铱板');
    event.create('kubejs:ic2_iridiumhdpe').displayName('强化铱板复合HDPE装甲板');
    event.create('kubejs:ic2_antimatteriridiumhdpe').displayName('反物质强化铱板复合HDPE装甲板');
	//植物魔法
	event.create('kubejs:botania_packed_ender_pearl').displayName('一包末影珍珠');
	event.create('kubejs:botania_packed_manaresource').displayName('一包魔力珍珠');
});
//   ____                        _                     
//  / __ \                      | |                    
// | |  | | _   _   __ _  _ __  | |_  _   _  _ __ ___  
// | |  | || | | | / _` || '_ \ | __|| | | || '_ ` _ \ 
// | |__| || |_| || (_| || | | || |_ | |_| || | | | | |
//  \___\_\ \__,_| \__,_||_| |_| \__| \__,_||_| |_| |_|
//                                                     
//														
//在JEI隐藏一些被禁用的东西
//TO玩家:看这里干嘛 删除这里并不能让你合成一些被禁用的物品
//BY FortyTwocn / 2024
//QQ:760450201
onEvent('jei.hide.items', event => {
//我的世界原版
	event.hide('minecraft:note_block');// 音符盒
//神化
	event.hide('apotheosis:iron_mining_arrow');// 铁采矿箭
	event.hide('apotheosis:diamond_mining_arrow');// 钻石采矿箭
//新生魔艺
	event.hide({'ars_nouveau:glyph_explosion'});// 爆炸符文
//神秘学
	event.hide({'occultism:dimensional_matrix'});// 维度储存水晶
	event.hide({'occultism:storage_controller'});// 维度储存促动器
	event.hide({'occultism:storage_controller_base'});// 维度储存促动器基座
	event.hide({'occultism:storage_stabilizer_tier1'});// 维度储存稳定器
	event.hide({'occultism:storage_stabilizer_tier2'});// 维度储存稳定器
	event.hide({'occultism:storage_stabilizer_tier3'});// 维度储存稳定器
	event.hide({'occultism:storage_stabilizer_tier4'});// 维度储存稳定器
//应用能源
	event.hide('appliedenergistics2:spatial_pylon');// 空间塔
	event.hide('appliedenergistics2:spatial_io_port');// 空间io接口
	event.hide('appliedenergistics2:spatial_anchor');// 空间锚
	event.hide('appliedenergistics2:2_cubed_spatial_cell_component');// 空间元件
	event.hide('appliedenergistics2:16_cubed_spatial_cell_component');// 空间元件
	event.hide('appliedenergistics2:128_cubed_spatial_cell_component');// 空间元件
	event.hide('appliedenergistics2:portable_cell');// 便携元件
	event.hide('appliedenergistics2:4k_portable_cell');// 便携元件
	event.hide('appliedenergistics2:16k_portable_cell');// 便携元件
	event.hide('appliedenergistics2:64k_portable_cell');// 便携元件
	event.hide('appliedenergistics2:entropy_manipulator');// 熵变机械臂
	event.hide('appliedenergistics2:matter_cannon');// 物质炮
	event.hide('appliedenergistics2:tiny_tnt');// 迷你TNT
	event.hide('appliedenergistics2:network_tool');// 网络工具
	event.hide('ae2wtlib:infinity_booster_card');// 无线增幅卡
//星辉魔法
	event.hide('astralsorcery:knowledge_share');// 知识共享
	event.hide('astralsorcery:illumination_wand');// 辉光星杖
	event.hide('astralsorcery:exchange_wand');// 更替星杖
	event.hide('astralsorcery:illuminator');// 洞穴照明器
	event.hide('astralsorcery:fountain');// 万象泉
	event.hide('astralsorcery:fountain_prime_liquid');// 纳耳狂曼引口
	event.hide('astralsorcery:fountain_prime_vortex');// 费萨利德引口
//植物魔法
	event.hide('botania:crafting_halo');// 合成环
	event.hide('botania:auto_crafting_halo');// 工厂环
	event.hide('botania:ender_hand');// 末影之手
	event.hide('botania:laputa_shard');// 拉姆达碎片
	event.hide('botania:mana_gun');// 魔力脉冲枪
	event.hide('botania:black_hole_talisman');// 黑洞护符
	event.hide('botania:terraform_rod');// 大地权杖
	event.hide('botania:dirt_rod');// 大地法杖
	event.hide('botania:ghost_rail');//幻影轨道
	event.hide('botania:gravity_rod');//黑山法杖
	event.hide('botania:fel_pumpkin');//恶魔南瓜头
	event.hide('botania:hopperhock');//漏斗花
	event.hide('botania:hopperhock_chibi');//小漏斗花
	event.hide('botania:floating_hopperhock_chibi');//浮空小漏斗花
	event.hide('botania:floating_hopperhock');//浮空漏斗花
	event.hide('botania:loonium');//聚宝花
	event.hide('botania:floating_loonium');//浮空聚宝花
	event.hide('botania:rannuncarpus');//手掌花
	event.hide('botania:rannuncarpus_chibi');//小手掌花
	event.hide('botania:floating_rannuncarpus');//浮空手掌花
	event.hide('botania:floating_rannuncarpus_chibi');//浮空小手掌花
	event.hide('botania:mana_bomb');//魔力风暴
	event.hide('botania:exchange_rod');//移壳杆
	event.hide('botania:drum_gathering');//收集之鼓
//循环
	event.hide('cyclic:chorus_flight');// 紫颂果
	event.hide('cyclic:chorus_spectral');// 紫颂果
	event.hide('cyclic:hopper_fluid');// 流体漏斗 
	event.hide('cyclic:hopper');// 木漏斗
	event.hide('cyclic:doorbell');// 门铃
	event.hide('cyclic:wireless_energy');// 传输节点
	event.hide('cyclic:wireless_item');// 传输节点
	event.hide('cyclic:wireless_fluid');// 传输节点
	event.hide('cyclic:sound_recorder');// 声音记录器
	event.hide('cyclic:sound_player');// 声音播放器
	event.hide('cyclic:apple_sprout_diamond');// 钻石苹果芽
	event.hide('cyclic:apple_sprout_emerald');// 绿宝石苹果芽
	event.hide('cyclic:eye_teleport');// 末影传送锚点
	event.hide('cyclic:uncrafter');// 分解磨床
	event.hide('appliedenergistics2:portable_cell');// 祛魔台
	event.hide('cyclic:workbench');// 工作台
	event.hide('cyclic:anvil');// 钻石能量铁砧
	event.hide('cyclic:anvil_magma');// 岩浆铁砧
	event.hide('cyclic:energy_pipe');// 能量管道
	event.hide('cyclic:item_pipe');// 物品管道
	event.hide('cyclic:fluid_pipe');// 流体管道
	event.hide('cyclic:ender_book');// 末影之书
	event.hide('cyclic:inventory_cake');// 末影物品栏蛋糕
	event.hide('cyclic:offset_scepter');// 建筑权杖放置
	event.hide('cyclic:replace_scepter');// 建筑权杖更替
	event.hide('cyclic:build_scepter');// 建筑权杖填充
	event.hide('cyclic:randomize_scepter');// 随机方块转置杖
	event.hide('cyclic:magic_net');// 生物捕捉球
	event.hide('cyclic:crafting_bag');// 高级手持工作台
	event.hide('cyclic:tile_transporter_empty');// 空的搬箱袋
	event.hide('cyclic:heart_empty');// 空的心之容器
//无尽贪婪伪
	event.hide('endless:skullfire_sword');// 炽焰之啄颅剑 氪金物品
//工业先锋
	event.hide('industrialforegoing:black_hole_controller');// 黑洞存储控制器
	event.hide('industrialforegoing:infinity_trident');//无限三叉戟
	event.hide('industrialforegoing:infinity_backpack');//无限背包 
	event.hide('industrialforegoing:infinity_nuke');//无限核弹
//通用机械MEK	
	event.hide('mekanismadditions:obsidian_tnt');// 黑曜石TNT
	event.hide('mekanism:flamethrower');// 火焰喷射器
	event.hide('mekanism:robit');// 机器人
	event.hide('mekanism:digital_miner');// 数字型采矿机
	event.hide('mekanism:upgrade_anchor');// 锚锭升级
	event.hide('mekanism:cardboard_box');// 纸箱
	event.hide('mekanism:teleporter_frame');// 传送框架
	event.hide('mekanism:teleporter');// 传送机
	event.hide('mekanism:portable_teleporter');// 便携传送机
                   // 各种气球
	event.hide('mekanismadditions:dark_red_balloon');
	event.hide('mekanismadditions:cyan_balloon');
	event.hide('mekanismadditions:blue_balloon');
	event.hide('mekanismadditions:aqua_balloon');
	event.hide('mekanismadditions:brown_balloon');
	event.hide('mekanismadditions:black_balloon');
	event.hide('mekanismadditions:gray_balloon');
	event.hide('mekanismadditions:green_balloon');
	event.hide('mekanismadditions:light_blue_balloon');
	event.hide('mekanismadditions:light_gray_balloon');
	event.hide('mekanismadditions:lime_balloon');
	event.hide('mekanismadditions:magenta_balloon');
	event.hide('mekanismadditions:orange_balloon');
	event.hide('mekanismadditions:pink_balloon');
	event.hide('mekanismadditions:purple_balloon');
	event.hide('mekanismadditions:red_balloon');
	event.hide('mekanismadditions:white_balloon');
	event.hide('mekanismadditions:yellow_balloon');
// 开放式电脑 不能跨服同步数据
	event.hide('opencomputers:tabletcase1');//平板电脑
	event.hide('opencomputers:tabletcase2');//平板电脑
//气动工艺
	event.hide('pneumaticcraft:spawner_agitator');// 刷怪笼激活器
	event.hide('pneumaticcraft:pressurized_spawner');// 气动刷怪笼
	event.hide('pneumaticcraft:spawner_extractor');// 刷怪笼抽取器
	event.hide('pneumaticcraft:empty_spawner');// 空刷怪笼
//匠魂3
	event.hide('tconstruct:efln_ball');// EFLN
	event.hide('tconstruct:glow_ball');// 荧光球
	event.hide('tconstruct:piggy_backpack');// 肩达架
// 热力时代
	event.hide('thermal:explosive_grenade');// 手榴弹
	event.hide('thermal:fire_grenade');// 狱火烧夷弹
	event.hide('thermal:ice_grenade');// 冰川冻结弹
	event.hide('thermal:lightning_grenade');// 震天雷击弹
	event.hide('thermal:earth_grenade');// 地岩碎裂弹
	event.hide('thermal:ender_grenade');// 末影侵扰弹
	event.hide('thermal:glowstone_grenade');// 圣光辐照弹
	event.hide('thermal:redstone_grenade');// 红石发信弹
	event.hide('thermal:explosive_grenade');// 弹力黏着弹
	event.hide('thermal:phyto_grenade');// 植育一号催熟弹
	event.hide('thermal:fire_tnt');// 狱火烧夷炸药
	event.hide('thermal:ice_tnt');// 冰川冻结炸药
	event.hide('thermal:lightning_tnt');// 震天雷击炸药
	event.hide('thermal:earth_tnt');// 地岩碎裂炸药
	event.hide('thermal:ender_tnt');// 末影侵扰炸药
	event.hide('thermal:glowstone_tnt');// 圣光辐照炸药
	event.hide('thermal:redstone_tnt');// 红石发信炸药
	event.hide('thermal:slime_tnt');// 弹力黏着炸药
	event.hide('thermal:phyto_tnt');// PNT
	event.hide('thermal:fire_tnt_minecart');// 狱火烧夷炸药矿车
	event.hide('thermal:ice_tnt_minecart');// 冰川冻结炸药矿车
	event.hide('thermal:lightning_tnt_minecart');// 震天雷击炸药矿车
	event.hide('thermal:earth_tnt_minecart');// 地岩碎裂炸药矿车
	event.hide('thermal:ender_tnt_minecart');// 末影侵扰炸药矿车
	event.hide('thermal:glowstone_tnt_minecart');// 圣光辐照炸药矿车
	event.hide('thermal:redstone_tnt_minecart');// 红石发信炸药矿车
	event.hide('thermal:slime_tnt_minecart');// 弹力黏着炸药矿车
	event.hide('thermal:phyto_tnt_minecart');// PNT矿车
	event.hide('thermal:press_coin_die');// 通货冲压模具
//加速火把
	event.hide('torcherino:torcherino');// 加速火把
	event.hide('torcherino:compressed_torcherino');// 压缩加速火把
	event.hide('torcherino:double_compressed_torcherino');// 二重压缩加速火把
//暮色森林
	event.hide('twilightforest:block_and_chain');// 链锤
	event.hide('twilightforest:uncrafting_table');// 拆解台
//
//end
//
})

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
   //Alex的生物Alexsmobs
   event.remove({id:'alexsmobs:enderiophage_rocket'}); // 移除末影噬菌体火箭
   //神秘学
   event.remove({id:'occultism:ritual/craft_dimensional_matrix'});//维度水晶矩阵
   event.remove({id:'occultism:ritual/craft_storage_controller_base'});//维度储存促动器基座
   event.remove({id:'occultism:crafting/storage_controller'});//维度储存促动器
   event.remove({id:'occultism:ritual/craft_storage_stabilizer_tier1'});//维度储存稳定器
   event.remove({id:'occultism:ritual/craft_storage_stabilizer_tier2'});
   event.remove({id:'occultism:ritual/craft_storage_stabilizer_tier3'});
   event.remove({id:'occultism:ritual/craft_storage_stabilizer_tier4'});
   //新生魔艺
   event.remove({id:'ars_nouveau:glyph_explosion'});//爆炸符文
   //神化
   event.remove({id: 'apotheosis:fletching/explosive_arrow'});//爆炸箭
   event.remove({id: 'apotheosis:fletching/iron_mining_arrow'});//采矿箭
   event.remove({id: 'apotheosis:fletching/diamond_mining_arrow'});//采矿箭
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
    event.remove({id: 'aeadditions:chemical_interface'}); // 化学品接口
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
   //植物魔法
    event.remove({id: 'botania:crafting_halo'}); // 合成环
    event.remove({id: 'botania:auto_crafting_halo'}); // 工厂环
    event.remove({id: 'botania:ender_hand'}); // 末影之手
    event.remove({id: 'botania:laputa_shard'}); // 拉姆达碎片
    event.remove({id: 'botania:mana_gun'}); // 魔力脉冲枪
    event.remove({id: 'botania:black_hole_talisman'}); // 黑洞护符
    event.remove({id: 'botania:terrafrom_road'}); // 大地权杖
    event.remove({id: 'botania:dirt_rod'}); // 大地法杖
    event.remove({id: 'botania:mana_bomb'}); // 魔力风暴
    event.remove({id: 'botania:drum_gathering'}); // 收集之鼓
    event.remove({id: 'botania:ghost_rail'}); // 幻影轨道
    event.remove({id: 'botania:gravity_rod'}); // 黑山法杖
    event.remove({id: 'botania:fel_pumpkin'}); // 恶魔南瓜头
    event.remove({id: 'botania:enchange_rod'}); // 移壳杆
    event.remove({id: 'red_string_container'}); // 红线容器
    event.remove({id: 'botania:spawner_mover'}); // 生命聚合器
   event.remove({id: 'botania:lens_explosive'}); // 爆炸透镜
    event.remove({id: 'botania:petal_apothecary/loonium'}); // 聚宝花
    event.remove({id: 'botania:petal_apothecary/rannuncarpus'}); // 手掌花
    event.remove({id: 'botania:petal_apothecary/hopperhock'}); // 漏斗花
    // 区块加载器
    event.remove({mod: 'chunkloaders'});
    // 机械动力
    event.remove({output: 'create:chute'}); // 溜槽
    event.remove({output: 'create:smart_chute'});// 溜槽
    event.remove({output: 'create:schematicannon'}); // 蓝图
    event.remove({output: 'create:schematic_table'});// 蓝图
    event.remove({output: 'create:schematic'});// 蓝图
    event.remove({output: 'create:schematic_and_quill'});// 蓝图
    // 循环
    event.remove({id: 'cyclic:chorus_flight'}); //闪烁的紫颂果
    event.remove({id: 'cyclic:chorus_spectral'}); //腐坏的紫颂果
    event.remove({id: 'cyclic:hopper_fluid'});// 流体漏斗 
    event.remove({id: 'cyclic:hopper'});// 木漏斗
    event.remove({id: 'cyclic:doorbell'});// 门铃
    event.remove({id: 'cyclic:wireless_energy'});// 传输节点
    event.remove({id: 'cyclic:wireless_item'});// 传输节点
    event.remove({id: 'cyclic:wireless_fluid'});// 传输节点
    event.remove({id: 'cyclic:sound_recorder'});// 声音记录器
    event.remove({id: 'cyclic:sound_player'});// 声音播放器
    event.remove({id: 'cyclic:apple_sprout_diamond'});// 钻石苹果芽
    event.remove({id: 'cyclic:apple_sprout_emerald'});// 绿宝石苹果芽
    event.remove({id: 'cyclic:eye_teleport'});// 末影传送锚点
    event.remove({id: 'cyclic:uncrafter'});// 分解磨床
    event.remove({id: 'appliedenergistics2:portable_cell'});// 祛魔台
    event.remove({id: 'cyclic:workbench'});// 工作台
    event.remove({id: 'cyclic:anvil'});// 钻石能量铁砧
    event.remove({id: 'cyclic:anvil_magma'});// 岩浆铁砧   
    event.remove({id: 'cyclic:energy_pipe'});// 能量物品流体管道
    event.remove({id: 'cyclic:item_pipe'});// 能量物品流体管道
    event.remove({id: 'cyclic:fluid_pipe'});// 能量物品流体管道
    event.remove({id: 'cyclic:ender_book'});// 末影之书
    event.remove({id: 'cyclic:inventory_cake'});// 末影物品栏蛋糕
    event.remove({id: 'cyclic:offset_scepter'});// 建筑权杖放置
    event.remove({id: 'cyclic:replace_scepter'});// 建筑权杖更替
    event.remove({id: 'cyclic:build_scepter'});// 建筑权杖填充
    event.remove({id: 'cyclic:randomize_scepter'});// 随机方块转置杖
    event.remove({id: 'cyclic:magic_net'});// 生物捕捉球
    event.remove({id: 'cyclic:crafting_bag'});// 高级手持工作台
    event.remove({id: 'cyclic:tile_transporter_empty'});// 空的搬箱袋
    event.remove({id: 'cyclic:heart_empty'});// 空的心之容器
    event.remove({id: 'cyclic:heart'});// 心之容器
    event.remove({id: 'cyclic:forester'});// 树场
   // 创造模式抽屉升级
   event.remove({id: 'storagedrawers:creative_storage_upgrade'});
   event.remove({id: 'storagedrawers:creative_vending_upgrade'});
   //沉浸工艺
   event.remove({output: 'immersiveengineering:chemthrower'});// 移除化学喷射器配方
   //工业先锋
   event.remove({output: 'industrialforegoing:mob_duplicator'});// 自动刷怪机配方
   event.remove({output: 'industrialforegoing:mob_imprisonment_tool'});// 大师球配方
   event.remove({id: 'industrialforegoing:dissolution_chamber/infinity_nuke'});// 无限核弹
   event.remove({id: 'industrialforegoing:dissolution_chamber/infinity_trident'}); //无限三叉戟
   event.remove({id: 'industrialforegoing:dissolution_chamber/infinity_backpack'}); //无限背包
   //MEK
   event.remove({id: 'mekanismadditions:obsidian_tnt'});// 移除黑曜石TNT配方
   event.remove({id: 'mekanism:flamethrower'});// 移除火焰喷射器配方
   event.remove({id: 'mekanism:robit'});// 移除机器人配方
   event.remove({id: 'mekanism:digital_miner'});// 移除数字型采矿机配方
   event.remove({id: 'mekanism:upgrade/anchor'});// 移除锚锭升级配方
   event.remove({id: 'mekanism:cardboard_box'});// 移除纸箱配方
   event.remove({id: 'mekanism:teleporter_frame'});// 移除传送框架配方
   event.remove({id: 'mekanism:teleporter'});// 移除传送机配方
   event.remove({id: 'mekanism:portable_teleporter'});// 移除便携传送机配方
                     // 移除各种气球配方
   event.remove({output: 'mekanismadditions:dark_red_balloon'});
   event.remove({output: 'mekanismadditions:cyan_balloon'});
   event.remove({output: 'mekanismadditions:blue_balloon'});
   event.remove({output: 'mekanismadditions:aqua_balloon'});
   event.remove({output: 'mekanismadditions:brown_balloon'});
   event.remove({output: 'mekanismadditions:black_balloon'});
   event.remove({output: 'mekanismadditions:gray_balloon'});
   event.remove({output: 'mekanismadditions:green_balloon'});
   event.remove({output: 'mekanismadditions:light_blue_balloon'});
   event.remove({output: 'mekanismadditions:light_gray_balloon'});
   event.remove({output: 'mekanismadditions:lime_balloon'});
   event.remove({output: 'mekanismadditions:magenta_balloon'});
   event.remove({output: 'mekanismadditions:orange_balloon'});
   event.remove({output: 'mekanismadditions:pink_balloon'});
   event.remove({output: 'mekanismadditions:purple_balloon'});
   event.remove({output: 'mekanismadditions:red_balloon'});
   event.remove({output: 'mekanismadditions:white_balloon'});
   event.remove({output: 'mekanismadditions:yellow_balloon'});
   //开放式电脑
   event.remove({output: 'opencomputers:tabletcase1'});// 移除平板电脑1的配方
   event.remove({output: 'opencomputers:tabletcase2'});// 移除平板电脑2的配方
   event.remove({output: 'opencomputers:chunkloaderupgrade'});// 移除区块载入升级的配方
    // 气动工艺
   event.remove({id: 'pneumaticcraft:spawner_agitator'});// 刷怪笼激活器
   event.remove({id: 'pneumaticcraft:spawner_extractor'});//刷怪笼抽取器
   event.remove({id: 'pneumaticcraft:pressurized_spawner'});// 移除气动刷怪笼
   //匠魂
   event.remove({output: 'tconstruct:efln_ball'});// 移除 EFLN
   event.remove({output: 'tconstruct:glow_ball'});   // 移除 荧光球
   event.remove({output: 'tconstruct:piggy_backpack'});// 移除 肩达架
   //我的世界原版
   event.remove({id: 'minecraft:end_crystal'});// 移除末影水晶的配方
   event.remove({id: 'tconstruct:common/glass/vanilla/end_crystal'});// 移除末影水晶的配方
   event.remove({id: 'minecraft:note_block'});// 移除音符盒的配方
   //热力系列
    event.remove({id: 'thermal:explosive_grenade_4'});// 手榴弹
    event.remove({id: 'thermal:fire_grenade_4'});// 狱火烧夷弹
    event.remove({id: 'thermal:ice_grenade_4'});// 冰川冻结弹
    event.remove({id: 'thermal:lightning_grenade_4'});// 震天雷击弹
    event.remove({id: 'thermal:earth_grenade_4'});// 地岩碎裂弹
    event.remove({id: 'thermal:ender_grenade_4'});// 末影侵扰弹
    event.remove({id: 'thermal:glowstone_grenade_4'});// 圣光辐照弹
    event.remove({id: 'thermal:redstone_grenade_4'});// 红石发信弹
    event.remove({id: 'thermal:explosive_grenade_4'});// 弹力黏着弹
    event.remove({id: 'thermal:phyto_grenade_4'});// 植育一号催熟弹
    event.remove({id: 'thermal:fire_tnt'});// 狱火烧夷炸药
    event.remove({id: 'thermal:ice_tnt'});// 冰川冻结炸药
    event.remove({id: 'thermal:lightning_tnt'});// 震天雷击炸药
    event.remove({id: 'thermal:earth_tnt'});// 地岩碎裂炸药
    event.remove({id: 'thermal:ender_tnt'});// 末影侵扰炸药
    event.remove({id: 'thermal:glowstone_tnt'});// 圣光辐照炸药
    event.remove({id: 'thermal:redstone_tnt'});// 红石发信炸药
    event.remove({id: 'thermal:slime_tnt'});// 弹力黏着炸药
    event.remove({id: 'thermal:phyto_tnt'});// PNT
    event.remove({id: 'thermal:fire_tnt_minecart'});// 狱火烧夷炸药矿车
    event.remove({id: 'thermal:ice_tnt_minecart'});// 冰川冻结炸药矿车
    event.remove({id: 'thermal:lightning_tnt_minecart'});// 震天雷击炸药矿车
    event.remove({id: 'thermal:earth_tnt_minecart'});// 地岩碎裂炸药矿车
    event.remove({id: 'thermal:ender_tnt_minecart'});// 末影侵扰炸药矿车
    event.remove({id: 'thermal:glowstone_tnt_minecart'});// 圣光辐照炸药矿车
    event.remove({id: 'thermal:redstone_tnt_minecart'});// 红石发信炸药矿车
    event.remove({id: 'thermal:slime_tnt_minecart'});// 弹力黏着炸药矿车
    event.remove({id: 'thermal:phyto_tnt_minecart'});// PNT矿车
    event.remove({id: 'thermal:press_coin_die'});// 通货冲压模具
    // 加速火把
    event.remove({id: 'torcherino:torcherino'});// 加速火把  
    event.remove({id: 'torcherino:compressed_torcherino'});// 压缩加速火把
    event.remove({id: 'torcherino:double_compressed_torcherino'});// 二重压缩加速火把
    //暮色森林
    event.remove({id: 'twilightforest:equipment/block_and_chain'});// 链锤   
    event.remove({id: 'twilightforest:uncrafting_table'});// 拆解台
   //金币购买
   event.remove({id: 'mekanismgenerators:reactor/controller'});// 移除聚变反应堆控制器配方
   event.remove({id: 'mekanismgenerators:turbine/rotor'});// 移除涡轮转子配方
   //点卷购买
   event.remove({id: 'endless:skullfire_sword'});
})

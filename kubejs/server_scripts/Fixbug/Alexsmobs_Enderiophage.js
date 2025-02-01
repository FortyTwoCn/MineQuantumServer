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
// 将末影噬菌体火箭的掉落物替换为末影噬菌体火箭
onEvent('lootjs', event => {
    event.addEntityLootModifier('alexsmobs:enderiophage')
        // 先移除原有的掉落物
        .removeLoot('alexsmobs:capsid')
        // 添加新的掉落物
        .addLoot('alexsmobs:enderiophage_rocket');
});

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
onEvent('lootjs', event => {
    // 将末影噬菌体火箭的掉落物替换为
    event.addEntityLootModifier('alexsmobs:enderiophage')
        .replace('alexsmobs:capsid', 'alexsmobs:enderiophage_rocket');
});

// 注意:此文件无用 原因未知

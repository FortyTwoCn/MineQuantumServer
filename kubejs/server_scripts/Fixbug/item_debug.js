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
//修复一些物品合成的问题
// 末影粉合成
onEvent('recipes', event => {
    event.shapeless('emendatusenigmatica:ender_dust', [
        'appliedenergistics2:ender_dust'
    ]);

    event.shapeless('appliedenergistics2:ender_dust', [
        'emendatusenigmatica:ender_dust'
    ]);
// 石英粉合成
    event.shapeless('emendatusenigmatica:quartz_dust', [
        'appliedenergistics2:nether_quartz_dust'
    ]);
// 赛特斯石英
    event.shapeless('appliedenergistics2:certus_quartz_crystal', [
        'emendatusenigmatica:certus_quartz_gem'
    ]);

    event.shapeless('appliedenergistics2:charged_certus_quartz_crystal', [
        'emendatusenigmatica:charged_certus_quartz_gem'
    ]);

    event.shapeless('appliedenergistics2:charged_quartz_ore', [
        'emendatusenigmatica:charged_certus_quartz_ore'
    ]);

    event.shapeless('appliedenergistics2:quartz_ore', [
        'emendatusenigmatica:certus_quartz_ore'
    ]);
// 橡木告示牌
    event.remove({ output: 'minecraft:oak_sign' });
});

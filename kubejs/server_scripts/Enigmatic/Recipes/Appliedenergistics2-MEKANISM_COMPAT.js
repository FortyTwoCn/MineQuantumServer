//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//MATERIAL UNIFICATION SCRIPT
//CREATED BY NEEPNOOP & ANOKKA / 2021
//
//   ____                        _                     
//  / __ \                      | |                    
// | |  | | _   _   __ _  _ __  | |_  _   _  _ __ ___  
// | |  | || | | | / _` || '_ \ | __|| | | || '_ ` _ \ 
// | |__| || |_| || (_| || | | || |_ | |_| || | | | | |
//  \___\_\ \__,_| \__,_||_| |_| \__| \__,_||_| |_| |_|
//                                                     
//														
//CHANGED BY FortyTwocn / 2024
//QQ:760450201
onEvent('recipes', event => {
	// 移除无效的Mekanism粉碎/提纯配方
	event.remove({id: 'mekanism:compat/appliedenergistics2/fluix_crystal_to_dust'}) // 移除 Fluix 水晶转化为粉末的配方
	event.remove({id: 'mekanism:compat/appliedenergistics2/certus_crystal_to_dust'}) // 移除 赛特斯水晶转化为粉末的配方
	event.remove({id: 'mekanism:compat/appliedenergistics2/certus_crystal_purification'}) // 移除 赛特斯水晶的提纯配方
	event.remove({id: 'mekanism:compat/appliedenergistics2/fluix_crystal_purification'}) // 移除 Fluix 水晶的提纯配方
	// 添加新的粉碎配方
	event.recipes.mekanism.crushing('appliedenergistics2:certus_quartz_dust', '#forge:gems/certus_quartz') // 将 赛特斯水晶粉碎为 赛特斯石英粉末
	event.recipes.mekanism.crushing('appliedenergistics2:certus_quartz_dust', '#forge:gems/charged_certus_quartz') // 将充能 赛特斯水晶粉碎为 赛特斯石英粉末
	event.recipes.mekanism.crushing('appliedenergistics2:fluix_dust', '#forge:gems/fluix') // 将 Fluix 水晶粉碎为 Fluix 粉末
	// 硅的粉碎配方
	event.recipes.mekanism.crushing('#forge:gems/silicon', '#forge:sand') // 将沙子粉碎为硅
//
//fin
//
})

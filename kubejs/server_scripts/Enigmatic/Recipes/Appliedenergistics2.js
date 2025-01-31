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
//BY FortyTwocn / 2024
//QQ:760450201
onEvent('recipes', event => {
	event.remove({id: 'appliedenergistics2:smelting/silicon'})
	event.replaceInput({type: 'appliedenergistics2:inscriber'}, 'appliedenergistics2:silicon', '#forge:silicon')
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'appliedenergistics2:silicon', '#forge:silicon')
	event.replaceInput({type: 'appliedenergistics2:grinder'}, 'appliedenergistics2:fluix_crystal', '#forge:gems/fluix')
	event.replaceInput({}, 'appliedenergistics2:nether_quartz_dust', '#forge:dusts/quartz')
//
//fin
//
})

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
	// 这不是完全符合 Emendatus Enigmatica，但我们知道有些人可能会想要这个功能
	event.replaceInput({}, 'immersiveengineering:slag', '#forge:slag')
	// 这是 Emendatus Enigmatica 的部分产物
	event.replaceInput({}, 'immersiveengineering:coal_coke', '#forge:gems/coal_coke')
	event.replaceInput({}, '#forge:coal_coke', '#forge:gems/coal_coke')

	// 从合成表中移除制作金属粉末
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_osmium'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_silver'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_cobalt'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_uranium'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_aluminum'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_iron'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_gold'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_copper'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_zinc'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_nickel'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_lead'})
	event.remove({id: 'immersiveengineering:crafting/hammercrushing_tin'})

	//
	// 完
	//
})

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
	//沥青配方
	event.remove({id: 'immersivepetroleum:asphalt'})
	event.shaped('8x immersivepetroleum:asphalt', [
		'SBS',
		'GWG',
		'SBS'
	], {
		S: '#forge:sand',
		B: '#forge:bitumen',
		W: '#forge:buckets/water',
		G: '#forge:gravel'
	})
	//沥青配方2
	event.remove({id: 'immersivepetroleum:asphalt2'})
	event.shaped('12x immersivepetroleum:asphalt', [
		'SBS',
		'GWG',
		'SBS'
	], {
		S: '#forge:slag',
		B: '#forge:bitumen',
		W: '#forge:buckets/water',
		G: '#forge:gravel'
	})
	//替换为TAG标签
    event.replaceInput({}, 'immersivepetroleum:bitumen', '#forge:gems/bitumen')
    event.replaceInput({}, '#forge:bitumen', '#forge:gems/bitumen')
//
//fin
//
})

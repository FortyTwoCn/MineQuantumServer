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
	//Emendatus Enigmatica朱砂作为催化剂
	event.recipes.thermal.smelter_catalyst('emendatusenigmatica:cinnabar_gem').primaryMod(3.0).secondaryMod(3.0).energyMod(2.5).minChance(0.0).useChance(0.8)
	//改变输入
	event.replaceInput({}, 'thermal:bitumen', '#forge:gems/bitumen')
	event.replaceInput({}, '#forge:bitumen', '#forge:gems/bitumen')
	event.replaceInput({}, 'thermal:cinnabar', '#forge:gems/cinnabar')
    event.replaceInput({}, 'thermal:apatite', '#forge:gems/apatite')
    event.replaceInput({}, 'thermal:sulfur', '#forge:gems/sulfur')
    event.replaceInput({}, 'thermal:niter', '#forge:gems/niter')
    event.replaceInput({}, 'thermal:coal_coke', '#forge:gems/coal_coke')
    event.replaceInput({}, '#forge:coal_coke', '#forge:gems/coal_coke')
//
//fin
//
})
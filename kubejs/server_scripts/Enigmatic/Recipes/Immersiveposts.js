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
	//移除各种棒子的合成
	event.remove({id: 'immersiveposts:has_gold_rod'})
	event.remove({id: 'immersiveposts:has_copper_rod'})
	event.remove({id: 'immersiveposts:has_silver_rod'})
	event.remove({id: 'immersiveposts:has_lead_rod'})
	event.remove({id: 'immersiveposts:has_nickel_rod'})
	event.remove({id: 'immersiveposts:has_uranium_rod'})
	event.remove({id: 'immersiveposts:has_constantan_rod'})
	event.remove({id: 'immersiveposts:has_electrum_rod'})
//
//fin
//
})
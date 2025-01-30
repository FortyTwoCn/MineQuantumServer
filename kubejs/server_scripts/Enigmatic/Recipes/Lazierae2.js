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
    // 替换末影粉
    event.replaceInput({}, 'appliedenergistics2:ender_dust', '#forge:dusts/ender');
	// 替换谐振水晶合成表的末影粉
	event.remove({ id: 'lazierae2:aggregator/resonating_gem' });
	event.custom({
    type: 'lazierae2:aggregator',
    process_time: 120,
    energy_cost: 2000,
    output: {
      item: 'lazierae2:resonating_gem'
    },
    input: [
      {
        item: 'appliedenergistics2:sky_dust'
      },
      {
        tag: 'forge:gems/diamond'
      },
      {
        tag: 'forge:dusts/ender'
      }
    ]
  });
	//替换脉冲离心机合成末影粉
    event.remove({ id: 'appliedenergistics2:centrifuge/ender_dust' });
    event.custom({
    type: 'lazierae2:centrifuge',
    process_time: 80,
    energy_cost: 800,
    output: {
      item: 'emendatusenigmatica:ender_dust'
    },
    input: [
      {
        tag: 'forge:ender_pearls'
      }
    ]
  });
});

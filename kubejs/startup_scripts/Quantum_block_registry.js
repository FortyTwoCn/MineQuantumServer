//   ____                        _                     
//  / __ \                      | |                    
// | |  | | _   _   __ _  _ __  | |_  _   _  _ __ ___  
// | |  | || | | | / _` || '_ \ | __|| | | || '_ ` _ \ 
// | |__| || |_| || (_| || | | || |_ | |_| || | | | | |
//  \___\_\ \__,_| \__,_||_| |_| \__| \__,_||_| |_| |_|
//                                                     
//														
//注册方块
//BY FortyTwocn / 2024
//QQ:760450201
onEvent('block.registry', (event) => {
    const blocks = [
        { name: 'draconium_block_charged', material: 'iron', hardness: 5, display: '充能龙块' },
        { name: 'compressed_steel_block', material: 'iron', hardness: 5, display: '压缩钢块' },
        { name: 'hot_compressed_steel_block', material: 'iron', hardness: 5, display: '热压缩钢块' },
        { name: 'superheated_compressed_steel_block', material: 'iron', hardness: 5, display: '过热压缩钢块' },
		{ name: 'lucky_block', material: 'iron', hardness: 5, display: '幸运方块' },
		{ name: 'money_lucky_block', material: 'iron', hardness: 5, display: '金币幸运方块' },
		{ name: 'machine_lucky_block', material: 'iron', hardness: 5, display: '机械幸运方块' },
		{ name: 'mineral_lucky_block', material: 'iron', hardness: 5, display: '矿物幸运方块' },
		{ name: 'magic_lucky_block', material: 'iron', hardness: 5, display: '魔法幸运方块' },
    ];
//这个是例子
//{ name: 'magic_lucky_block', material: 'iron', hardness: 5, display: '魔法幸运方块' },
// name对应贴图名字 material 材质 hardness 硬度 display 展示名称
    blocks.forEach((block) => {
        const block_event = event.create(block.name).material(block.material).hardness(block.hardness).displayName(block.display);
    });
});

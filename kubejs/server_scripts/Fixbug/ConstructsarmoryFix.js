//   ____		_	         
//  / __ \	          | |	        
// | |  | | _   _   __ _  _ __  | |_  _   _  _ __ ___  
// | |  | || | | | / _` || '_ \ | __|| | | || '_ ` _ \ 
// | |__| || |_| || (_| || | | || |_ | |_| || | | | | |
//  \___\_\ \__,_| \__,_||_| |_| \__| \__,_||_| |_| |_|
//				     
//														
//BY FortyTwocn / 2025
//QQ:760450201
onEvent('block.right_click', event => {
    const { player, block } = event;
    // 正确获取装备和主手物品（去掉括号）
    const chestplate = player.chestArmorItem;
    const mainHand = player.mainHandItem;
    // 白名单配置
    const allowedBlocks = [
        //'minecraft:crafting_table'
    ];
    // 条件判断逻辑
    if (
        chestplate.id === 'constructsarmory:material_armor_chestplate' && // 穿戴指定胸甲
        mainHand.isEmpty() &&                                             // 主手为空
        block.entity !== null &&                                          // 方块有Tile Data
        !allowedBlocks.includes(block.id)                                 // 不在白名单中
    ) {
        event.cancel();
        player.tell(Text.of('§6§l系统 §f§l>>> §c您无法在穿戴匠魂胸甲时空手与此方块交互！'));
    }
});

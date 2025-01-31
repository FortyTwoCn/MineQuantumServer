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
//修复机械手绕过权限与特定方块交互
//blocklist里添加 方块id 即可禁止特定触发方式以外的右键
onEvent('block.right_click', event => {
    // 机械手右键操作
    if (banblocklist.indexOf(event.block.id) != -1 && event.getEntity() == 'Deployer') {
        event.cancel();
    }
    // 检测无人机在刷怪笼周围的情况 如果有取消
    if (banblocklist.indexOf(event.block.id) != -1) {
        const pos = event.block.getPos();
        const level = event.level;
        // 创建检测区域（以刷怪笼为中心的5x5x5立方体）
        const searchBox = AABB.of(pos)
            .inflate(2); // 向所有方向扩展2格
        // 在区域内查找无人机实体
        const drones = level.getEntitiesWithin(
            'pneumaticcraft:drone',
            searchBox
        );
        // 如果找到至少一个无人机
        if (drones.size() > 0) {
            // 取消事件并阻止后续操作
            event.cancel();
        }
    }
}); 

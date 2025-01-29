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
var banblocklist = [
    'minecraft:spawner',
    'draconicevolution:stabilized_spawner'
];
onEvent('block.right_click', event => {
	//获取方块id
    //Utils.server.tell(event.block.id);
    //获取操作玩家
    // Utils.server.tell(event.getEntity());
    //禁止虚拟玩家对特定方块进行
	if(banblocklist.indexOf(event.block.id) != -1 && event.getEntity() == 'Deployer') event.cancel()
})

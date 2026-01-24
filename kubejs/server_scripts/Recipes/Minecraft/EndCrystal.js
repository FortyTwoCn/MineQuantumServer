ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:end_crystal' });
    event.shaped(
        Item.of('minecraft:end_crystal', 1), // 输出
        [
            'GGG',
            'GSG',
            'GTG'
        ],
        {
            G: '#c:glass_blocks',      //玻璃
            S: 'minecraft:nether_star', //下界之星
            T: 'minecraft:ghast_tear'   //恶魂之泪
        }
    );
});
ServerEvents.tags('block', event => {
    event.add('quantum:infinityclockbanlist', [
        '@industrialforegoing',
        '@sfm',
        '@mekanism_extras',
        '@mekanism',
        'ae2:cable_bus',
        'create:mechanical_piston',
        'create:sticky_mechanical_piston',
        'create:mechanical_bearing',
        'create:windmill_bearing',
        'create:clockwork_bearing',
        'createdieselgenerators:pumpjack_bearing',
        'occultism:dimensional_mineshaft',
        'minecraft:spawner',
		'minecraft:hopper'
    ])
})

BlockEvents.rightClicked(event => {
    const { item, block, player } = event;
    if (item.id !== 'avaritia:infinity_clock') return;

    // 获取物品组件数据
    let data = item.customData;
    if (!data || !data.mode) return;

    // 解析当前模式
    let isClockUp = parseInt(String(data.mode.infinity_clock_up));
    if (isNaN(isClockUp) || isClockUp === 0) return;
    // 拦截黑名单中的方块
    if (block.hasTag('quantum:infinityclockbanlist')) {
        player.setStatusMessage(Text.red('⚠ 该方块被禁止加速！'));
        event.cancel();
        return;
    }

    // 拦截高倍率
    let speed = parseInt(String(data.SpeedMultiplier)) || 0;
    if (speed >= 512) {
        player.setStatusMessage(Text.red('⚠ 已禁止使用过高的倍速！'));
        event.cancel();
    }
});
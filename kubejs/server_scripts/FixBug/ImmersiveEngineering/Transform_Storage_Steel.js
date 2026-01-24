BlockEvents.rightClicked('c:storage_blocks/steel', event => {
    // 只处理主手
    if (event.hand === "OFF_HAND") return;
    const heldItem = event.getItem();
    if (heldItem.getId() === 'immersiveengineering:hammer') {
        event.level.setBlock(event.block.pos, 'immersiveengineering:storage_steel');
        event.cancel();
    }
});
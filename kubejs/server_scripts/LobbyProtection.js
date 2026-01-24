// priority: 0

/*
    主城/指定世界保护脚本
*/

// ================= 配置区域 =================

const PROTECTED_DIMENSION = 'ResourceKey[minecraft:dimension / minecraft:overworld]'; 

const ADMIN_UUIDS = [
    '你的UUID',
];

const BANNED_ITEMS = [
    'minecraft:flint_and_steel',
    'minecraft:end_crystal',
    'actuallyadditions:laser_wrench',
    'ae2:certus_quartz_wrench',
    'ae2:nether_quartz_wrench',
    'advancedperipherals:computer_tool',
    'apothic_enchanting:ender_lead',
    'apothic_enchanting:flimsy_ender_lead',
    'apothic_enchanting:inert_trident',
    'apothic_enchanting:occult_ender_lead',
    'ars_nouveau:spell_bow',
    'ars_nouveau:spell_crossbow',
    'avaritia:blaze_bow',
    'avaritia:crystal_bow',
    'avaritia:endest_pearl',
    'avaritia:infinity_bow',
    'avaritia:infinity_crossbow',
    'avaritia:infinity_pickaxe',
    'avaritia:infinity_sword',
    'botania:crystal_bow',
    'botania:livingwood_bow',
    'botania:mana_gun',
    'botania:slingshot',
    'cataclysm:cursed_bow',
    'create:wrench',
    'draconicevolution:chaotic_bow',
    'draconicevolution:crystal_binder',
    'draconicevolution:draconic_bow',
    'draconicevolution:wyvern_bow',
    'enderio:yeta_wrench',
    'eternal_starlight:bow_of_blood',
    'eternal_starlight:crystal_crossbow',
    'eternal_starlight:flowglaze_bow',
    'eternal_starlight:mechanical_crossbow',
    'eternal_starlight:moonring_bow',
    'eternal_starlight:starfall_longbow',
    'eternal_starlight:starfire_crossbow',
    'eternal_starlight:wilted_crossbow',
    'framedblocks:framed_wrench',
    'iceandfire:dragon_horn',
    'iceandfire:dragonbone_bow',
    'iceandfire:tide_trident',
    'industrialforegoing:infinity_nuke',
    'industrialupgrade:energy/electric_wrench',
    'industrialupgrade:energy/wrench',
    'industrialupgrade:energy_tools/nano_bow',
    'industrialupgrade:energy_tools/quantum_bow',
    'industrialupgrade:energy_tools/spectral_bow',
    'integrateddynamics:wrench',
    'mekanism:electric_bow',
    'minecraft:bow',
    'minecraft:crossbow',
    'minecraft:trident',
    'pneumaticcraft:pneumatic_wrench',
    'refurbished_furniture:wrench',
    'rftoolsbase:smartwrench',
    'rftoolsbase:smartwrench_select',
    'touhou_little_maid:smart_slab_init',
    'twilightforest:ender_bow',
    'twilightforest:ice_bow',
    'twilightforest:seeker_bow',
    'twilightforest:triple_bow',
	'eternal_starlight:chain_of_souls'
];

const BANNED_INTERACT_LIST = [
    'minecraft:chest',
    'minecraft:furnace',
    'minecraft:hopper',

    'c:fence_gates',
    '#minecraft:trapdoors',
];

// ================= 脚本逻辑 =================

const isAdmin = (player) => {
    if (!player) return false;
    return ADMIN_UUIDS.includes(player.uuid.toString());
};

const isProtectedWorld = (level) => {
    return String(level.dimension) === PROTECTED_DIMENSION;
};

// 禁止破坏
BlockEvents.broken(event => {
    if (!isProtectedWorld(event.level)) return;
    if (isAdmin(event.player)) return;
    event.player.setStatusMessage(Text.red('⚠ 此区域禁止破坏方块！'));
    event.cancel();
});

// 禁止放置
BlockEvents.placed(event => {
    if (!isProtectedWorld(event.level)) return;
    if (isAdmin(event.player)) return;
    event.player.setStatusMessage(Text.red('⚠ 此区域禁止放置方块！'));
    event.cancel();
});

// 禁止 PVP
/*
EntityEvents.hurt(event => {
    if (!event.entity.isPlayer()) return;
    const attacker = event.source.player;
    if (!attacker) return;
    if (!isProtectedWorld(event.level)) return;
    if (isAdmin(attacker)) return;
    attacker.setStatusMessage(Text.red('⚠ 此区域禁止 PVP！'));
    event.cancel();
});
*/

// 禁止使用指定物品
ItemEvents.rightClicked(event => {
    if (!isProtectedWorld(event.level)) return;
    if (isAdmin(event.player)) return;
    if (BANNED_ITEMS.includes(event.item.id)) {
        event.player.setStatusMessage(Text.red('⚠ 此区域禁止使用该物品！'));
        event.cancel();
    }
});

// 禁止与指定方块交互 
BlockEvents.rightClicked(event => {
    if (!isProtectedWorld(event.level)) return;
    if (isAdmin(event.player)) return;

    const block = event.block;
    let isBanned = false;

    for (let entry of BANNED_INTERACT_LIST) {
        if (entry.startsWith('#') || entry.startsWith('c:')) {
            let tag = entry.startsWith('#') ? entry.substring(1) : entry;
            if (block.hasTag(tag)) {
                isBanned = true;
                break;
            }
        } else {
            if (block.id === entry) {
                isBanned = true;
                break;
            }
        }
    }

    if (isBanned) {
        event.player.setStatusMessage(Text.red('⚠ 此区域禁止与该方块交互！'));
        event.cancel();
    }
});
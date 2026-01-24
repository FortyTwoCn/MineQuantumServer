ServerEvents.tags('entity_type', quantum => {

    quantum.add('c:bosses', [
        "cataclysm:amethyst_crab",
        "cataclysm:ancient_remnant",
        "cataclysm:coralssus",
        "cataclysm:ender_golem",
        "cataclysm:ender_guardian",
        "cataclysm:ignis",
        "cataclysm:ignited_revenant",
        "cataclysm:kobolediator",
        "cataclysm:maledictus",
        "cataclysm:modern_remnant",
        "cataclysm:netherite_monstrosity",
        "cataclysm:the_baby_leviathan",
        "cataclysm:the_harbinger",
        "cataclysm:the_leviathan",
        "cataclysm:the_prowler",
        "cataclysm:wadjet",
        "eternal_starlight:starlight_golem",
        "eternal_starlight:the_gatekeeper",
		"@iceandfire",
        "#neoforge:bosses"
    ])

    quantum.add('quantum:jank_blacklist', [
        'ars_nouveau:animated_block',
        'create:package',
        'mekanism:robit',
        'twilightforest:hedge_spider',
        'twilightforest:swarm_spider',
        'touhou_little_maid:maid',
        '#c:bosses',
        "@occultism",
        "@industrialupgrade"
    ])
	
    quantum.add('quantum:jar_blacklist', [
        'ars_nouveau:animated_block',
        'create:package',
        'mekanism:robit',
        'twilightforest:hedge_spider',
        'twilightforest:swarm_spider',
        'occultism:marid',
        'touhou_little_maid:maid',
    ])

    quantum.add('apothic_spawners:blacklisted_from_spawners', '#quantum:jank_blacklist')
    quantum.add('enderio:soul_vial_blacklist', '#quantum:jank_blacklist')
    quantum.add('industrialforegoing:mob_duplicator_blacklist', '#quantum:jank_blacklist')
    quantum.add('industrialforegoing:mob_crusher_blacklist', '#quantum:jank_blacklist')
    quantum.add('enderio:spawner_blacklist', '#quantum:jank_blacklist')
    quantum.add('ars_additions:source_spawner_denylist', '#quantum:jank_blacklist')
    quantum.add('ars_nouveau:jar_blacklist', '#quantum:jar_blacklist')
    quantum.add('ars_nouveau:interact_jar_blacklist', '#c:bosses')
});

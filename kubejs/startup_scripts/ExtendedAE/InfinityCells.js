StartupEvents.registry('item', quantum => {
    //岩浆
    quantum.create('lava_cell', 'custom_infinity_cell')
        .texture('kubejs:item/lava_cell')
        .fluidType('minecraft:lava')
        .cellModel('kubejs:block/drive/lava_cell');
	//IU石油
    quantum.create('iufluidpetroleum_cell', 'custom_infinity_cell')
        .texture('kubejs:item/black_cell')
        .fluidType('industrialupgrade:iufluidpetroleum')
        .cellModel('kubejs:block/drive/black_cell');
	//IU天然气
    quantum.create('iufluidgas_cell', 'custom_infinity_cell')
        .texture('kubejs:item/light_blue_cell')
        .fluidType('industrialupgrade:iufluidgas')
        .cellModel('kubejs:block/drive/light_blue_cell');
	//IU碘
    quantum.create('iufluidiodine_cell', 'custom_infinity_cell')
        .texture('kubejs:item/purple_cell')
        .fluidType('industrialupgrade:iufluidiodine')
        .cellModel('kubejs:block/drive/purple_cell');
	//IU溴
    quantum.create('iufluidbromine_cell', 'custom_infinity_cell')
        .texture('kubejs:item/orange_cell')
        .fluidType('industrialupgrade:iufluidbromine')
        .cellModel('kubejs:block/drive/orange_cell');
	//IU氯
    quantum.create('iufluidchlorum_cell', 'custom_infinity_cell')
        .texture('kubejs:item/green_cell')
        .fluidType('industrialupgrade:iufluidchlorum')
        .cellModel('kubejs:block/drive/green_cell');
	//IU氟
    quantum.create('iufluidfluor_cell', 'custom_infinity_cell')
        .texture('kubejs:item/yellow_cell')
        .fluidType('industrialupgrade:iufluidfluor')
        .cellModel('kubejs:block/drive/yellow_cell');
})
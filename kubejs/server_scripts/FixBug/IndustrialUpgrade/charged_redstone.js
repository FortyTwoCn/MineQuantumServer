ServerEvents.recipes(event => {
    event.custom({
        "type": "ae2:transform",
        "ingredients": [
            { "tag": "c:dusts/polonium" },
            { "item": "minecraft:redstone", "count": 4 },
            { "tag": "c:ingots/electrum" }
        ],
        "result": {
            // 我靠 为啥这个4就是不生效啊
			"count": 4,
            "id": "industrialupgrade:charged_redstone"
        },
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        }
    }).id('kubejs:charged_redstone')
})
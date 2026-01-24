ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "chemical_input": {
            "amount": 5,
            "chemical": "mekanism:antimatter"
        },
        "duration": 1000,
        "item_input": {
            "count": 1,
            "item": "minecraft:wither_skeleton_skull"
        },
        "output": {
            "count": 1,
            "id": "minecraft:nether_star"
        },
        "per_tick_usage": false
    })
})
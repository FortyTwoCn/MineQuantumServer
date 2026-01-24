//   ____                        _                     
//  / __ \                      | |                    
// | |  | | _   _   __ _  _ __  | |_  _   _  _ __ ___  
// | |  | || | | | / _` || '_ \ | __|| | | || '_ ` _ \ 
// | |__| || |_| || (_| || | | || |_ | |_| || | | | | |
//  \___\_\ \__,_| \__,_||_| |_| \__| \__,_||_| |_| |_|
//                                                     
//  Converted for NeoForge 1.21.1 / KubeJS 7+

ServerEvents.recipes(event => {

    // 充能龙块
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "techLevel": "draconium",
        "totalEnergy": 10000000,
        "catalyst": {
            "type": "draconicevolution:stack",
            "count": 1,
            "items": [
                "draconicevolution:draconium_block"
            ]
        },
        "ingredients": [
            { "consume": true, "ingredient": { "tag": "c:dusts/redstone" } },
            { "consume": true, "ingredient": { "tag": "c:dusts/redstone" } },
            { "consume": true, "ingredient": { "tag": "c:dusts/redstone" } },
            { "consume": true, "ingredient": { "tag": "c:dusts/redstone" } }
        ],
        "result": {
            "id": "kubejs:draconium_block_charged",
            "count": 1
        }
    });

    //  觉醒龙块
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "techLevel": "chaotic", 
        "totalEnergy": 5000000,
        "catalyst": {
            "type": "draconicevolution:stack",
            "count": 1,
            "items": [
                "kubejs:artifical_dragon_heart"
            ]
        },
        "ingredients": [
            { "consume": true, "ingredient": { "item": "draconicevolution:draconium_core" } },
            { "consume": true, "ingredient": { "item": "draconicevolution:draconium_core" } },
            { "consume": true, "ingredient": { "item": "kubejs:draconium_block_charged" } },
            { "consume": true, "ingredient": { "item": "kubejs:draconium_block_charged" } },
            { "consume": true, "ingredient": { "item": "draconicevolution:wyvern_energy_core" } },
            { "consume": true, "ingredient": { "item": "draconicevolution:wyvern_energy_core" } },
            { "consume": true, "ingredient": { "item": "draconicevolution:draconium_core" } },
            { "consume": true, "ingredient": { "item": "draconicevolution:draconium_core" } }
        ],
        "result": {
            "id": "draconicevolution:awakened_draconium_block",
            "count": 2
        }
    });

    // 人造龙心框架
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": "draconicevolution:draconium_ingot",
                "count": 18
            }
        ],
        "pressure": 4.8,
        "results": [
            {
                "id": "kubejs:artifical_dragon_heart_shell",
                "count": 1
            }
        ]
    });

    // 未注入能量的龙心
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "kubejs:artifical_dragon_heart_shell"
            },
            {
				"type": "neoforge:single",
                "fluid": "minecraft:water", 
                "amount": 1000
            }
        ],
        "results": [
            {
                "id": "kubejs:non_energetic_artifical_dragon_heart",
                "count": 1
            }
        ]
    });

    // 人造龙心
    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "item_input": {
            "item": "kubejs:non_energetic_artifical_dragon_heart",
            "amount": 1
        },
        "chemical_input": {
            "chemical": "mekanism:antimatter",
            "amount": 5
        },
        "output": {
            "id": "kubejs:artifical_dragon_heart",
            "count": 1
        },
        "duration": 1500,
        "per_tick_usage": false
    });

    // 龙心
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "techLevel": "draconium",
        "totalEnergy": 8000000,
        "catalyst": {
            "type": "draconicevolution:stack",
            "count": 1,
            "items": [
                "minecraft:dragon_egg"
            ]
        },
        "ingredients": [
            { "consume": true, "ingredient": { "item": "kubejs:draconium_block_charged" } },
            { "consume": true, "ingredient": { "item": "kubejs:draconium_block_charged" } },
            { "consume": true, "ingredient": { "item": "minecraft:end_crystal" } },
            { "consume": true, "ingredient": { "item": "minecraft:end_crystal" } },
            { "consume": true, "ingredient": { "item": "minecraft:end_crystal" } },
            { "consume": true, "ingredient": { "item": "minecraft:end_crystal" } }
        ],
        "result": {
            "id": "draconicevolution:dragon_heart",
            "count": 1
        }
    });

});
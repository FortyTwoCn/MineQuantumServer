仪式配方
仪式配方目前只支持部分配置，如果修改了“静态”属性，这些修改只会影响在 JEI（Just Enough Items）中显示的信息，而不会影响实际的配方。

完全可配置的配方是我想实现的目标，但由于其复杂性，这几乎是一个新的模组本身，因此暂时搁置。

属性
ingredients：可以自由配置，唯一的限制是 JEI 最多只能显示 12 种物品，但在实际制作中，配方可以使用任意数量的物品，只要它们能够放置在 8x8 区域内，围绕着五角星的金色祭品碗。
entity_to_sacrifice：如果设置了，仪式开始时需要牺牲一个来自标签的实体。
display_name 属性用于显示祭品的名称，翻译需要在语言文件中提供。
item_to_use：如果设置了，需要使用（右键点击）标签中的物品才能开始仪式。
entity_to_summon：召唤的实体类型。
duration：仪式持续的时间，单位为秒。
spirit_max_age：灵魂的最大生命时间，单位为秒。

ritual_type: "occultism:summon" — 召唤仪式
ritual_type: "occultism:summon_tamed" — 召唤已驯服的生物
ritual_type: "occultism:summon_spirit_with_job" — 召唤具有职业的灵魂
ritual_type: "occultism:summon_wild_hunt" — 召唤野猎仪式
ritual_type: "occultism:familiar" — 召唤使魔
ritual_type: "occultism:craft" — 制作仪式
ritual_type: "occultism:craft_with_spirit_name" — 使用灵魂名称的制作仪式
ritual_type: "occultism:craft_miner_spirit" — 制作矿工灵魂的仪式
...
示例配方
{
  "type": "occultism:ritual",
  "ritual_type": "occultism:summon",
  "ritual_type": "occultism:summon_tamed",
  "ritual_type": "occultism:summon_spirit_with_job",
  "ritual_type": "occultism:summon_wild_hunt",
  "ritual_type": "occultism:familiar",
  "ritual_type": "occultism:craft",
  "ritual_type": "occultism:craft_with_spirit_name",
  "ritual_type": "occultism:craft_miner_spirit",
  "activation_item": {
    "item": "occultism:book_of_binding_bound_foliot"
  },
  "pentacle_id": "occultism:summon_foliot",
  "duration": 60,
  "spirit_max_age": 86400,
  "spirit_job_type": "occultism:crush_tier1",
  "item_to_use": {
    "item": "minecraft:egg"
  },
  "entity_to_sacrifice": {
    "tag": "forge:cows",
    "display_name": "ritual.occultism.sacrifice.cows"
  },
  "entity_to_summon": "minecraft:sheep",
  "ritual_dummy": {
    "item": "occultism:ritual_dummy/custom_ritual"
  },
  "ingredients": [
    {
      "tag": "forge:ores/iron"
    },
    {
      "item": "minecraft:egg"
    }
  ],
  "result": {
    "item": "occultism:jei_dummy/none"
  }
}
...
//kubejs

onEvent('recipes', event => {
  event.custom({
    type: 'occultism:ritual',
    ritual_type: 'occultism:summon',               // 祭典类型：召唤
    activation_item: { 
      item: 'occultism:book_of_binding_bound_foliot'  // 激活物品（绑定 Folio 的书）
    },
    pentacle_id: 'occultism:summon_foliot',         // 五角星的 ID
    duration: 60,                                  // 祭典持续时间（秒）
    spirit_max_age: 86400,                         // 灵魂最大生命时间（秒）
    spirit_job_type: 'occultism:crush_tier1',       // 灵魂的工作类型
    item_to_use: { 
      item: 'minecraft:egg'                        // 启动仪式所需的物品（鸡蛋）
    },
    entity_to_sacrifice: { 
      tag: 'forge:cows',                           // 牺牲的实体标签（牛）
      display_name: 'ritual.occultism.sacrifice.cows' // 牺牲实体的名称（需在语言文件中翻译）
    },
    entity_to_summon: 'minecraft:sheep',            // 召唤的实体（羊）
    ritual_dummy: { 
      item: 'occultism:ritual_dummy/custom_ritual'  // 仪式的虚拟物品
    },
    ingredients: [
      { 
        tag: 'forge:ores/iron'                     // 输入物品：铁矿石
      },
      { 
        item: 'minecraft:egg'                      // 输入物品：鸡蛋
      }
    ],
    result: {
      item: 'occultism:jei_dummy/none'             // 结果：无物品（用于 JEI 虚拟配方）
    }
  })
})

这个示例配置了一个“召唤”仪式，其中包括需要牺牲的动物（牛）、所用物品（鸡蛋）、以及召唤的实体（羊）。仪式的持续时间为 60 秒，灵魂的最大寿命为 86400 秒（1 天）。

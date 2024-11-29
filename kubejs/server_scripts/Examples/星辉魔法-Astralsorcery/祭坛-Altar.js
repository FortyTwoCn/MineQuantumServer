//星辉合成台
//原版数据包
{
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 100,
  "starlight": 100,
  "pattern": [
    "_____",
    "__B__",
    "_ACA_",
    "__A__",
    "_____"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:aquamarine"
    },
    "B": {
      "item": "astralsorcery:parchment"
    },
    "C": {
      "item": "minecraft:book"
    }
  },
  "output": [
    {
      "item": "astralsorcery:tome",
      "count": 1
    }
  ],
  "effects": [
    "astralsorcery:built_in_effect_discovery_central_beam"
  ]
}

//kubejs版
onEvent('recipes', event => {
  event.custom({
    type: 'astralsorcery:altar',
    altar_type: 0,                     // 祭坛类型
    duration: 100,                     // 持续时间
    starlight: 100,                    // 需要的星能
    pattern: [
      '_____',
      '__B__',
      '_ACA_',
      '__A__',
      '_____'
    ],                                  // 祭坛图案
    key: {
      A: {
        item: 'astralsorcery:aquamarine'  // A代表的物品
      },
      B: {
        item: 'astralsorcery:parchment'   // B代表的物品
      },
      C: {
        item: 'minecraft:book'            // C代表的物品
      }
    },
    output: [
      {
        item: 'astralsorcery:tome',       // 输出物品
        count: 1                          // 输出数量
      }
    ],
    effects: [
      'astralsorcery:built_in_effect_discovery_central_beam'  // 祭坛特效不要改
    ]
  })
})

//星辉祭坛
//原版数据包
{
  "type": "astralsorcery:altar",
  "altar_type": 1,
  "duration": 200,
  "starlight": 800,
  "pattern": [
    "_____",
    "__B__",
    "_CDC_",
    "_AAA_",
    "_____"
  ],
  "key": {
    "A": {
      "tag": "forge:rods/wooden"
    },
    "B": {
      "item": "astralsorcery:hand_telescope"
    },
    "C": {
      "tag": "forge:ingots/gold"
    },
    "D": {
      "tag": "minecraft:planks"
    }
  },
  "output": [
    {
      "item": "astralsorcery:telescope",
      "count": 1
    }
  ],
  "effects": [
    "astralsorcery:built_in_effect_discovery_central_beam",
    "astralsorcery:built_in_effect_attunement_sparkle"
  ]
}

//kubejs合成
onEvent('recipes', event => {
  event.custom({
    type: 'astralsorcery:altar',
    altar_type: 1,                     // 祭坛类型
    duration: 200,                     // 持续时间
    starlight: 800,                    // 需要的星能
    pattern: [
      '_____',
      '__B__',
      '_CDC_',
      '_AAA_',
      '_____'
    ],                                  // 祭坛图案
    key: {
      A: {
        tag: 'forge:rods/wooden'        // A代表的物品标签（木棍）
      },
      B: {
        item: 'astralsorcery:hand_telescope'  // B代表的物品（手持望远镜）
      },
      C: {
        tag: 'forge:ingots/gold'        // C代表的物品标签（金锭）
      },
      D: {
        tag: 'minecraft:planks'         // D代表的物品标签（木板）
      }
    },
    output: [
      {
        item: 'astralsorcery:telescope', // 输出物品（望远镜）
        count: 1                          // 输出数量
      }
    ],
    effects: [
      'astralsorcery:built_in_effect_discovery_central_beam',  // 祭坛特效勿动
      'astralsorcery:built_in_effect_attunement_sparkle'      
    ]
  })
})

//天辉祭坛
//原版数据包格式
{
  "type": "astralsorcery:altar",
  "altar_type": 2,
  "duration": 400,
  "starlight": 2600,
  "pattern": [
    "AB_BA",
    "C___C",
    "__D__",
    "C___C",
    "AB_BA"
  ],
  "key": {
    "A": {
      "tag": "astralsorcery:stardust"
    },
    "B": {
      "item": "astralsorcery:illumination_powder"
    },
    "C": {
      "item": "astralsorcery:resonating_gem"
    },
    "D": {
      "type": "astralsorcery:crystal",
      "hasToBeAttuned": true,
      "hasToBeCelestial": false,
      "canBeAttuned": false,
      "canBeCelestialCrystal": false
    }
  },
  "recipe_class": "astralsorcery:constellation_copy_stats",
  "output": [
    {
      "item": "astralsorcery:rock_collector_crystal",
      "count": 1
    }
  ],
  "options": {
    "constellationSlot": 12
  },
  "effects": [
    "astralsorcery:built_in_effect_constellation_finish",
    "astralsorcery:built_in_effect_discovery_central_beam",
    "astralsorcery:altar_default_sparkle",
    "astralsorcery:built_in_effect_constellation_lines",
    "astralsorcery:built_in_effect_attunement_sparkle"
  ]
}
//kubejs格式
onEvent('recipes', event => {
  event.custom({
    type: 'astralsorcery:altar',
    altar_type: 2,                     // 祭坛类型
    duration: 400,                     // 持续时间
    starlight: 2600,                    // 需要的星光
    pattern: [
      'AB_BA',
      'C___C',
      '__D__',
      'C___C',
      'AB_BA'
    ],                                  // 祭坛图案
    key: {
      A: {
        tag: 'astralsorcery:stardust'    // A代表的物品标签（星尘）
      },
      B: {
        item: 'astralsorcery:illumination_powder'  // B代表的物品（照明粉）
      },
      C: {
        item: 'astralsorcery:resonating_gem'      // C代表的物品（共鸣宝石）
      },
      D: {
        type: 'astralsorcery:crystal',              // D代表的物品类型（水晶）
        hasToBeAttuned: true,                       // 必须是调和过的水晶
        hasToBeCelestial: false,                    // 不能是天体水晶
        canBeAttuned: false,                        // 不能调和
        canBeCelestialCrystal: false                // 不能是天体水晶
      }
    },
    recipe_class: 'astralsorcery:constellation_copy_stats',  // 配方类
    output: [
      {
        item: 'astralsorcery:rock_collector_crystal', // 输出物品（岩石采集水晶）
        count: 1                                      // 输出数量
      }
    ],
    options: {
      constellationSlot: 12   // 星座槽位
    },
    effects: [
      'astralsorcery:built_in_effect_constellation_finish',   // 完成星座的效果
      'astralsorcery:built_in_effect_discovery_central_beam',  // 星座发现效果
      'astralsorcery:altar_default_sparkle',                   // 祭坛默认的闪光效果
      'astralsorcery:built_in_effect_constellation_lines',     // 星座连线效果
      'astralsorcery:built_in_effect_attunement_sparkle'       // 调和闪光效果
    ]
  })
})

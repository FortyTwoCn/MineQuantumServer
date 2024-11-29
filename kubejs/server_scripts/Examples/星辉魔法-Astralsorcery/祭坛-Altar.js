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
  "starlight": 1200,
  "pattern": [
    "_____",
    "ABCBA",
    "_DED_",
    "AFFFA",
    "AD_DA"
  ],
  "key": {
    "A": {
      "item": "astralsorcery:marble_pillar"
    },
    "B": {
      "item": "astralsorcery:aquamarine"
    },
    "C": {
      "tag": "astralsorcery:starmetal"
    },
    "D": {
      "tag": "forge:ingots/gold"
    },
    "E": {
      "type": "astralsorcery:fluid",
      "fluid": [
        {
          "fluid": "astralsorcery:liquid_starlight",
          "amount": 1000
        }
      ]
    },
    "F": {
      "item": "astralsorcery:marble_runed"
    }
  },
  "output": [
    {
      "item": "astralsorcery:infuser",
      "count": 1
    }
  ],
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
    starlight: 1200,                    // 需要的星光
    pattern: [
      '_____',
      'ABCBA',
      '_DED_',
      'AFFFA',
      'AD_DA'
    ],                                  // 祭坛图案
    key: {
      A: {
        item: 'astralsorcery:marble_pillar'  // A代表的物品（大理石柱）
      },
      B: {
        item: 'astralsorcery:aquamarine'     // B代表的物品（海蓝宝石）
      },
      C: {
        tag: 'astralsorcery:starmetal'      // C代表的物品标签（星铁）
      },
      D: {
        tag: 'forge:ingots/gold'            // D代表的物品标签（黄金锭）
      },
      E: {
        type: 'astralsorcery:fluid',        // E代表流体
        fluid: [
          {
            fluid: 'astralsorcery:liquid_starlight',  // 流体（星光液体）
            amount: 1000                          // 流体数量（1000mb）
          }
        ]
      },
      F: {
        item: 'astralsorcery:marble_runed'   // F代表的物品（符文大理石）
      }
    },
    output: [
      {
        item: 'astralsorcery:infuser',     // 输出物品（注入器）
        count: 1                            // 输出数量
      }
    ],
    effects: [
      'astralsorcery:built_in_effect_constellation_finish',   // 完成星座的效果
      'astralsorcery:built_in_effect_discovery_central_beam',  // 星座发现效果
      'astralsorcery:altar_default_sparkle',                   // 祭坛默认的闪光效果
      'astralsorcery:built_in_effect_constellation_lines',     // 星座连线效果
      'astralsorcery:built_in_effect_attunement_sparkle'       // 调和闪光效果
    ]
  })
})


//五彩祭坛
//我的世界原版数据包
{
  "type": "astralsorcery:altar",
  "altar_type": 3,
  "duration": 600,
  "starlight": 3200,
  "pattern": [
    "__ABC",
    "_ABDB",
    "ABCBA",
    "E_BA_",
    "EEE__"
  ],
  "key": {
    "A": {
      "tag": "forge:nuggets/gold"
    },
    "B": {
      "item": "astralsorcery:marble_runed"
    },
    "C": {
      "item": "astralsorcery:glass_lens"
    },
    "D": {
      "item": "astralsorcery:infused_glass"
    },
    "E": {
      "tag": "forge:ingots/gold"
    }
  },
  "output": [
    {
      "item": "astralsorcery:observatory",
      "count": 1
    }
  ],
  "focus_constellation": "astralsorcery:lucerna",
  "relay_inputs": [
    {
      "item": "astralsorcery:illumination_powder"
    },
    {
      "item": "astralsorcery:nocturnal_powder"
    },
    {
      "item": "astralsorcery:illumination_powder"
    },
    {
      "tag": "astralsorcery:stardust"
    },
    {
      "item": "astralsorcery:illumination_powder"
    },
    {
      "item": "astralsorcery:nocturnal_powder"
    },
    {
      "item": "astralsorcery:illumination_powder"
    },
    {
      "tag": "astralsorcery:stardust"
    }
  ],
  "effects": [
    "astralsorcery:built_in_effect_constellation_finish",
    "astralsorcery:built_in_effect_trait_relay_highlight",
    "astralsorcery:built_in_effect_discovery_central_beam",
    "astralsorcery:built_in_effect_trait_focus_circle",
    "astralsorcery:altar_default_sparkle",
    "astralsorcery:built_in_effect_constellation_lines",
    "astralsorcery:built_in_effect_attunement_sparkle"
  ]
}
//kubejs格式
onEvent('recipes', event => {
  event.custom({
    type: 'astralsorcery:altar',
    altar_type: 3,                     // 祭坛类型
    duration: 600,                     // 持续时间
    starlight: 3200,                    // 需要的星光
    pattern: [
      '__ABC',
      '_ABDB',
      'ABCBA',
      'E_BA_',
      'EEE__'
    ],                                  // 祭坛图案
    key: {
      A: {
        tag: 'forge:nuggets/gold'       // A代表的物品标签（黄金金块）
      },
      B: {
        item: 'astralsorcery:marble_runed'  // B代表的物品（符文大理石）
      },
      C: {
        item: 'astralsorcery:glass_lens'   // C代表的物品（玻璃透镜）
      },
      D: {
        item: 'astralsorcery:infused_glass' // D代表的物品（注入玻璃）
      },
      E: {
        tag: 'forge:ingots/gold'          // E代表的物品标签（黄金锭）
      }
    },
    output: [
      {
        item: 'astralsorcery:observatory',  // 输出物品（天文台）
        count: 1                            // 输出数量
      }
    ],
    focus_constellation: 'astralsorcery:lucerna',  // 聚焦星座（Lucerna）
    relay_inputs: [
      {
        item: 'astralsorcery:illumination_powder'  // 输入物品（照明粉）
      },
      {
        item: 'astralsorcery:nocturnal_powder'    // 输入物品（夜间粉末）
      },
      {
        item: 'astralsorcery:illumination_powder'  // 输入物品（照明粉）
      },
      {
        tag: 'astralsorcery:stardust'             // 输入标签（星尘）
      },
      {
        item: 'astralsorcery:illumination_powder'  // 输入物品（照明粉）
      },
      {
        item: 'astralsorcery:nocturnal_powder'    // 输入物品（夜间粉末）
      },
      {
        item: 'astralsorcery:illumination_powder'  // 输入物品（照明粉）
      },
      {
        tag: 'astralsorcery:stardust'             // 输入标签（星尘）
      }
    ],
    effects: [
      'astralsorcery:built_in_effect_constellation_finish',    // 完成星座的效果
      'astralsorcery:built_in_effect_trait_relay_highlight',   // 特质传送高亮效果
      'astralsorcery:built_in_effect_discovery_central_beam',  // 星座发现效果
      'astralsorcery:built_in_effect_trait_focus_circle',      // 聚焦圆环效果
      'astralsorcery:altar_default_sparkle',                   // 祭坛默认的闪光效果
      'astralsorcery:built_in_effect_constellation_lines',     // 星座连线效果
      'astralsorcery:built_in_effect_attunement_sparkle'       // 调和闪光效果
    ]
  })
})

//需要堆叠 数据包
{
  "type": "pneumaticcraft:pressure_chamber",
  "inputs": [
    {
      "type": "pneumaticcraft:stacked_item",
      "item": "minecraft:packed_ice",
      "count": 4
    }
  ],
  "pressure": 2.5,
  "results": [
    {
      "item": "minecraft:blue_ice"
    }
  ]
}
//需要堆叠 kubejs
onEvent('recipes', event => {
  event.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
      {
        type: 'pneumaticcraft:stacked_item',  // 输入类型为堆叠物品
        item: 'minecraft:packed_ice',         // 输入物品（打包冰）
        count: 4                             // 输入物品数量（4个打包冰）
      }
    ],
    pressure: 2.5,  // 所需压力（2.5 bar）
    results: [
      {
        item: 'minecraft:blue_ice'  // 输出物品（蓝冰）
      }
    ]
  })
})
//不需要堆叠
onEvent('recipes', event => {
  event.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
      {
        item: 'minecraft:packed_ice'       // 输入物品（打包冰）
      }
    ],
    pressure: 2.5,  // 所需压力（2.5 bar）
    results: [
      {
        item: 'minecraft:blue_ice'  // 输出物品（蓝冰）
      }
    ]
  })
})

//多物品参考
onEvent('recipes', event => {
  event.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
      {
        item: 'minecraft:milk_bucket'  // 输入物品（牛奶桶）
      },
      {
        type: 'pneumaticcraft:stacked_item',  // 输入类型为堆叠物品
        tag: 'forge:dyes/green',              // 输入物品标签（绿色染料）
        count: 4                              // 输入物品数量（4个绿色染料）
      }
    ],
    pressure: 1.0,  // 所需压力（1.0 bar）
    results: [
      {
        item: 'minecraft:slime_ball',  // 输出物品（史莱姆球）
        count: 4                      // 输出数量（4个史莱姆球）
      },
      {
        item: 'minecraft:bucket'      // 输出物品（桶）
      }
    ]
  })
})


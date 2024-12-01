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

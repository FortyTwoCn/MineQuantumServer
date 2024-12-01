//数据包
{
  "type": "botania:pure_daisy",
  "input": {
    "type": "block",
    "block": "minecraft:packed_ice"
  },
  "output": {
    "name": "minecraft:blue_ice"
  }
}
//kubejs
onEvent('recipes', event => {
  event.custom({
    type: 'botania:pure_daisy',
    input: {
      type: 'block',                      // 输入类型为方块
      block: 'minecraft:packed_ice'       // 输入物品（浮冰）为啥这东西packed？打包起来的冰？
    },
    output: {
      name: 'minecraft:blue_ice'          // 输出物品（蓝冰）
    }
  })
})

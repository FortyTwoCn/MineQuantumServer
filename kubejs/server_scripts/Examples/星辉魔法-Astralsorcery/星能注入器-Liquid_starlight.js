//原版数据包
{
  "type": "astralsorcery:infuser",
  "fluidInput": "astralsorcery:liquid_starlight",
  "input": {
    "item": "minecraft:nether_gold_ore"
  },
  "output": {
    "item": "minecraft:gold_nugget",
    "count": 21
  },
  "consumptionChance": 0.1,
  "duration": 120,
  "consumeMultipleFluids": false,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
}

//kubejs格式
onEvent('recipes', event => {
  event.custom({
    type: 'astralsorcery:infuser',
    fluidInput: 'astralsorcery:liquid_starlight', // 流体输入
    input: {
      item: 'minecraft:nether_gold_ore'           // 物品输入
    },
    output: {
      item: 'minecraft:gold_nugget',              // 输出物品
      count: 21                                   // 输出数量
    },
    consumptionChance: 0.1,                       // 消耗几率
    duration: 120,                                // 持续时间
    consumeMultipleFluids: false,                 // 是否消耗多个流体
    acceptChaliceInput: true,                     // 是否接受圣杯输入
    copyNBTToOutputs: false                       // 是否将NBT数据复制到输出
  })
})

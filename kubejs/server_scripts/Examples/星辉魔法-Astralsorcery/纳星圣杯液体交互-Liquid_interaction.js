//10毫升和10毫升水相聚为一个原石
//原版数据包
{
  "type": "astralsorcery:liquid_interaction",
  "reactant1": "minecraft:water",  //流体一
  "reactant1Amount": 10,           //流体一合成一次的消耗量
  "reactant2": "minecraft:lava",   //流体二
  "reactant2Amount": 10,           //流体二合成一次的消耗量
  "chanceConsumeReactant1": 0.1,   //10%概率消耗流体一
  "chanceConsumeReactant2": 0.1,   //10%概率消耗流体二
  "weight": 3,                     //相比于其他配方的权重存在多个圣杯
  "result": {
    "id": "astralsorcery:drop_item", //掉落物
    "data": {
      "output": {
        "item": "minecraft:stone",//物品ID
        "count": 1                //数量
      }
    }
  }
}
//使用kubejs
onEvent('recipes', event => {
  event.custom({
    type: 'astralsorcery:liquid_interaction',
    reactant1: 'minecraft:water',          // 流体一
    reactant1Amount: 10,                   // 流体一合成一次的消耗量
    reactant2: 'minecraft:lava',           // 流体二
    reactant2Amount: 10,                   // 流体二合成一次的消耗量
    chanceConsumeReactant1: 0.1,           // 10%概率消耗流体一
    chanceConsumeReactant2: 0.1,           // 10%概率消耗流体二
    weight: 3,                             // 相比于其他配方的权重
    result: {
      id: 'astralsorcery:drop_item',       // 掉落物
      data: {
        output: {
          item: 'minecraft:stone',        // 物品ID
          count: 1                        // 数量
        }
      }
    }
  })
})

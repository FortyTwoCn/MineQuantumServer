//原版数据包格式
{
  "type": "botania:mana_infusion",
  "input": {
    "item": "minecraft:acacia_sapling"
  },
  "output": {
    "item": "minecraft:dark_oak_sapling"
  },
  "mana": 120,
  "group": "botania:sapling_cycle",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
}
//kubejs格式
onEvent('recipes', event => {
  event.custom({
    type: 'botania:mana_infusion',
    input: {
      item: 'minecraft:acacia_sapling'  // 输入物品（橡木树苗）
    },
    output: {
      item: 'minecraft:dark_oak_sapling'  // 输出物品（深色橡木树苗）
    },
    mana: 120,  // 需要的法力值
    group: 'botania:sapling_cycle',  // 配方分组
    catalyst: {
      type: 'block',  // 催化剂类型为方块
      block: 'botania:alchemy_catalyst'  // 催化剂（炼金催化剂）
    }
  })
})

//原版数据包格式
{
  "type": "botania:elven_trade",
  "ingredients": [
    {
      "item": "minecraft:diamond_block"
    }
  ],
  "output": [
    {
      "item": "minecraft:diamond_block"
    }
  ]
}
//kubejs格式

onEvent('recipes', event => {
  event.custom({
    type: 'botania:elven_trade',
    ingredients: [
      {
        item: 'minecraft:diamond_block'  // 输入物品（钻石块）
      }
    ],
    output: [
      {
        item: 'minecraft:diamond_block'  // 输出物品（钻石块）
      }
    ]
  })
})

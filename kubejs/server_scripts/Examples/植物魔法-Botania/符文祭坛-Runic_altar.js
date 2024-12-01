//原版
{
  "type": "botania:runic_altar",
  "output": {
    "item": "botania:rune_air",
    "count": 2
  },
  "mana": 5200,
  "ingredients": [
    {
      "tag": "forge:dusts/mana"
    },
    {
      "tag": "forge:ingots/manasteel"
    },
    {
      "tag": "minecraft:carpets"
    },
    {
      "item": "minecraft:feather"
    },
    {
      "item": "minecraft:string"
    }
  ]
}
//kubejs
onEvent('recipes', event => {
  event.custom({
    type: 'botania:runic_altar',
    output: {
      item: 'botania:rune_air',   // 输出物品（风之符文）
      count: 2                   // 输出数量
    },
    mana: 5200,                    // 需要的法力值
    ingredients: [
      {
        tag: 'forge:dusts/mana'    // 输入物品标签（魔力尘）
      },
      {
        tag: 'forge:ingots/manasteel'  // 输入物品标签（曼金锭）
      },
      {
        tag: 'minecraft:carpets'    // 输入物品标签（地毯）
      },
      {
        item: 'minecraft:feather'   // 输入物品（羽毛）
      },
      {
        item: 'minecraft:string'    // 输入物品（线）
      }
    ]
  })
})

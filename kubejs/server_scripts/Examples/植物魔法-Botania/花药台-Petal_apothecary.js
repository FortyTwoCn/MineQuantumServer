//原版
{
  "type": "botania:petal_apothecary",
  "output": {
    "item": "botania:agricarnation"
  },
  "ingredients": [
    {
      "tag": "botania:petals/lime"
    },
    {
      "tag": "botania:petals/lime"
    },
    {
      "tag": "botania:petals/green"
    },
    {
      "tag": "botania:petals/yellow"
    },
    {
      "tag": "botania:runes/spring"
    },
    {
      "item": "botania:redstone_root"
    }
  ]
}
//kubejs
onEvent('recipes', event => {
  event.custom({
    type: 'botania:petal_apothecary',
    output: {
      item: 'botania:agricarnation'  // 输出物品（花）
    },
    ingredients: [
      {
        tag: 'botania:petals/lime'  // 输入物品（青花瓣）
      },
      {
        tag: 'botania:petals/lime'  // 输入物品（青花瓣）
      },
      {
        tag: 'botania:petals/green'  // 输入物品（绿花瓣）
      },
      {
        tag: 'botania:petals/yellow'  // 输入物品（黄花瓣）
      },
      {
        tag: 'botania:runes/spring'  // 输入物品（春天符文）
      },
      {
        item: 'botania:redstone_root'  // 输入物品（红石根）
      }
    ]
  })
})

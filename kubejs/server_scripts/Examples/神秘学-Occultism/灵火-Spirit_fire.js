//原版数据包
{
  "type": "occultism:spirit_fire",
  "ingredient": {
    "item": "occultism:chalk_red_impure"
  },
  "result": {
    "item": "occultism:chalk_red"
  }
}
//kubejs
onEvent('recipes', event => {
  event.custom({
    type: 'occultism:spirit_fire',
    ingredient: {
      item: 'occultism:chalk_red_impure'  // 输入物品（不纯红色粉笔）
    },
    result: {
      item: 'occultism:chalk_red'         // 输出物品（红色粉笔）
    }
  })
})

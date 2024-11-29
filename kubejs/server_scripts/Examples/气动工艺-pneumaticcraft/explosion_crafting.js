//使用原版数据包格式添加气动工艺爆炸合成
{
  "type": "pneumaticcraft:explosion_crafting",
    //输入 铁锭
  "input": {
    "tag": "forge:ingots/iron"
  },
  //输出 压缩铁锭
  "results": [
    {
      "item": "pneumaticcraft:ingot_iron_compressed"
    }
  ],
    //损耗率 20%
  "loss_rate": 20
}
//使用kubejs
onEvent('recipes', event => {
    event.custom({
        type: "pneumaticcraft:explosion_crafting",
          //输入 铁锭
        "input": {
              tag: "forge:ingots/iron"
                 },
        //输出 压缩铁锭
        result: {
            item: "pneumaticcraft:ingot_iron_compressed"
        },
         //损耗率 20%
        "loss_rate": 20
          });
});

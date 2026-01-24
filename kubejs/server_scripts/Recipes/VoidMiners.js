ServerEvents.recipes(event => {

    // 加载Java 类
    const JsonObject = Java.loadClass('com.google.gson.JsonObject');
    const JFloat = Java.loadClass('java.lang.Float');
    const JInt = Java.loadClass('java.lang.Integer');

    /**
     * 添加 Void Miners 挖掘配方
     */
    const addMiner = (item, weight, minTier, dimension) => {
        let tier = minTier || 1;
        let dim = dimension || 'minecraft:overworld';

        let json = new JsonObject();
        json.addProperty("type", "voidminers:miner");
        json.addProperty("allowHigherTiers", true);
        json.addProperty("dimension", dim);
        json.addProperty("minTier", new JInt(tier));
        
        // 构建 output
        let outputJson = new JsonObject();

        let stackJson = new JsonObject();
        stackJson.addProperty("id", item);
        outputJson.add("stack", stackJson);
        
        // 让权重为Float类型
        outputJson.addProperty("weight", new JFloat(weight));
        
        json.add("output", outputJson);

        // 注册配方
        let recipeId = `kubejs:voidminers/${item.replace(':', '_')}_${dim.split(':')[1]}`;
        event.custom(json).id(recipeId);
    };

    // ==========================================
    // 配方列表
    // 格式: addMiner('物品ID', 权重, 等级[不填默认1], '维度[不填默认主世界]')
    // ==========================================
	//例子 
    //addMiner('minecraft:ancient_debris', 0.5, 4, 'minecraft:the_nether'); 

    // ==========
    //主世界
    // ==========
	//群青
    addMiner('ultramarine:jade_ore', 2, 1); //玉矿石
    addMiner('ultramarine:magnesite_ore', 2, 1); //菱镁矿石
    addMiner('ultramarine:hematite_ore', 2, 1); //赤铁矿石
	//龙之进化
	addMiner('draconicevolution:overworld_draconium_ore', 6, 3); //龙矿石
	//MEKE
	addMiner('mekanism_extras:naquadah_ore', 6, 3); //硅岩矿石
	//IU
	addMiner('industrialupgrade:baseore/aluminium', 6, 1); // 铝矿
	addMiner('industrialupgrade:baseore/nickel', 6, 1); // 镍矿
	addMiner('industrialupgrade:baseore/silver', 6, 1); // 银矿
	addMiner('industrialupgrade:baseore/zinc', 6, 1); // 锌矿
	addMiner('industrialupgrade:baseore1/osmium', 6, 1); // 锇矿
	addMiner('industrialupgrade:baseore2/sulfur', 6, 1); // 硫矿
	addMiner('industrialupgrade:blockpreciousore/quartz_ore', 6, 1); // 石英矿
	addMiner('industrialupgrade:baseore/vanadium', 6, 3); // 钒矿
	addMiner('industrialupgrade:baseore/tungsten', 6, 3); // 钨矿
	addMiner('industrialupgrade:baseore/cobalt', 6, 3); // 钴矿
	addMiner('industrialupgrade:baseore/magnesium', 6, 3); // 镁矿
	addMiner('industrialupgrade:baseore/titanium', 6, 3); // 钛矿
	addMiner('industrialupgrade:baseore/chromium', 6, 3); // 铬矿
	addMiner('industrialupgrade:baseore/spinel', 6, 3); // 尖晶石矿
	addMiner('industrialupgrade:baseore/manganese', 6, 3); // 锰矿
	addMiner('industrialupgrade:baseore2/gallium', 6, 3); // 镓矿
	addMiner('industrialupgrade:mineral/crystal', 6, 3); // 水晶矿
	addMiner('industrialupgrade:apatite/calcium_phosphate', 6, 3); // 磷酸钙
	addMiner('industrialupgrade:apatite/sodium_phosphate', 6, 3); // 磷酸钠
	addMiner('industrialupgrade:apatite/potassium_phosphate', 6, 3); // 磷酸钾
	addMiner('industrialupgrade:baseore/mikhail', 6, 5); // 米哈伊尔矿
	addMiner('industrialupgrade:baseore/platinum', 6, 5); // 铂矿
	addMiner('industrialupgrade:baseore/iridium', 6, 5); // 铱矿
	addMiner('industrialupgrade:baseore/germanium', 6, 5); // 锗矿
	addMiner('industrialupgrade:baseore1/tantalum', 6, 5); // 钽矿
	addMiner('industrialupgrade:baseore1/cadmium', 6, 5); // 镉矿
	addMiner('industrialupgrade:baseore2/arsenic', 6, 5); // 砷矿
	addMiner('industrialupgrade:baseore2/barium', 6, 5); // 钡矿
	addMiner('industrialupgrade:baseore2/bismuth', 6, 5); // 铋矿
	addMiner('industrialupgrade:baseore2/gadolinium', 6, 5); // 钆矿
	addMiner('industrialupgrade:baseore2/hafnium', 6, 5); // 铪矿
	addMiner('industrialupgrade:baseore2/yttrium', 6, 5); // 钇矿
	addMiner('industrialupgrade:baseore2/molybdenum', 6, 5); // 钼矿
	addMiner('industrialupgrade:baseore2/neodymium', 6, 5); // 钕矿
	addMiner('industrialupgrade:baseore2/niobium', 6, 5); // 铌矿
	addMiner('industrialupgrade:baseore2/palladium', 6, 5); // 钯矿
	addMiner('industrialupgrade:baseore2/polonium', 6, 5); // 钋矿
	addMiner('industrialupgrade:baseore2/strontium', 6, 5); // 锶矿
	addMiner('industrialupgrade:baseore2/thallium', 6, 5); // 铊矿
	addMiner('industrialupgrade:baseore2/zirconium', 6, 5); // 锆矿
	addMiner('industrialupgrade:thorium_ore/thorium_ore', 6, 5); // 钍矿

    // ==========
    //主世界挖其他维度的矿物-6级以上矿机
    // ==========
	//Minecraft
    addMiner('minecraft:nether_quartz_ore', 6, 6); //下届石英
    addMiner('minecraft:ancient_debris', 2, 6); //远古残骸
    addMiner('minecraft:glowstone', 6, 1); //萤石
	//群青
    addMiner('ultramarine:nether_cobalt_ore', 2, 6); //下届钴矿石

    // ==========
	//   地狱
    // ==========
	//Minecraft
    addMiner('minecraft:glowstone', 6, 1, 'minecraft:the_nether'); //萤石
	//群青
    addMiner('ultramarine:nether_cobalt_ore', 5, 1, 'minecraft:the_nether'); //下届钴矿石
	//龙之进化
	addMiner('draconicevolution:nether_draconium_ore', 6, 1, 'minecraft:the_nether'); //下届龙矿石

    // ==========
    //   末地
    // ==========
	//龙之进化
	addMiner('draconicevolution:end_draconium_ore', 12, 1, 'minecraft:the_end'); //末地龙矿石
	//MEKE
	addMiner('mekanism_extras:end_naquadah_ore', 6, 3, 'minecraft:the_end'); //末地硅岩矿石

    // ==========
	//   星光
    // ==========
    // 永恒星光

});
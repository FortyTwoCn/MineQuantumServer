//   ____                        _                     
//  / __ \                      | |                    
// | |  | | _   _   __ _  _ __  | |_  _   _  _ __ ___  
// | |  | || | | | / _` || '_ \ | __|| | | || '_ ` _ \ 
// | |__| || |_| || (_| || | | || |_ | |_| || | | | | |
//  \___\_\ \__,_| \__,_||_| |_| \__| \__,_||_| |_| |_|
//                                                     
//														
//BY FortyTwocn / 2024
//QQ:760450201
// 钴奇点
onEvent('recipes', event => {
//	event.remove({
//		type: 'endless:neutronium',
//		output: Item.of('endless:singularity', '{endless_singularity:{index:480184,"main":5875439,type:"cobalt"}}')
//		});
    event.custom({
        type: 'endless:neutronium',
        input: [
            {
                tag: 'forge:storage_blocks/cobalt'
            }
        ],
        count: 16500,
        output: {
            item: 'endless:singularity',
            nbt: '{type:cobalt}'
        }
    });
// 铅奇点
    event.custom({
        type: 'endless:neutronium',
        input: [
            {
                tag: 'forge:storage_blocks/lead'
            }
        ],
        count: 18750,
        output: {
            item: 'endless:singularity',
            nbt: '{type:lead}'
        }
    });
// 锌奇点
    event.custom({
        type: 'endless:neutronium',
        input: [
            {
                tag: 'forge:storage_blocks/zinc'
            }
        ],
        count: 18750,
        output: {
            item: 'endless:singularity',
            nbt: '{type:zinc}'
        }
    });
// 镍奇点
    event.custom({
        type: 'endless:neutronium',
        input: [
            {
                tag: 'forge:storage_blocks/nickel'
            }
        ],
        count: 20250,
        output: {
            item: 'endless:singularity',
            nbt: '{type:nickel}'
        }
    });
// 锡奇点
    event.custom({
        type: 'endless:neutronium',
        input: [
            {
                tag: 'forge:storage_blocks/tin'
            }
        ],
        count: 20250,
        output: {
            item: 'endless:singularity',
            nbt: '{type:tin}'
        }
    });
});

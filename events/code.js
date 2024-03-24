const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        if (message.author.bot) return;
        
        if (message.content == 'コード教えて') { //反応するメッセージ(完全一致)     

            await message.channel.send('[Glitch](https://glitch.com/edit/#!/discordjs-v14-node-v16-templates)\n[Github](https://github.com/Touka-Tomosibi/Discordjs-v14-Templat/tree/glitch)');//送信するメッセージ
            
         }
	},
};
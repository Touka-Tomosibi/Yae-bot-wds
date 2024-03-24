const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        if (message.author.bot) return;
        
        if (message.content == 'ダイスを振って') { //反応するメッセージ(完全一致)     

            const a = Math.floor(Math.random() * 6) + 1;
            await message.channel.send(`${a}が出ました`);//送信するメッセージ
            
         }
	},
};
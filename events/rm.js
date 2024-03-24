const { Events } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { rm, rmn, rmh, rme, rms, rmo } = require('../commands/json/rm.json');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        if (message.author.bot) return;
        if (message.content == `y!rm` || message.content.includes('八恵ちゃん') && message.content.includes('曲を選んで')) {     
            const random = Math.floor(Math.random() * rm.length);
		    const user = message.author;

		const exampleEmbed = new EmbedBuilder()
	        .setColor([203, 175, 216])
	        .setTitle(`${user}さん！`)
	        .setAuthor({ name: `${user.displayName}`, iconURL: `${user.displayAvatarURL()}`})
	        //.setThumbnail(``)
	        .setDescription(`**${rm[random]}**なんてどうですか？`)
	        .addFields(
		        { name: `NORMAL`, value: `LV${rmn[random]}`, inline: true },
		        { name: `HARD`, value: `LV${rmh[random]}`, inline: true },
		        { name: `EXTRA`, value: `LV${rme[random]}`, inline: true }
	        )
	        .addFields(
		        { name: `STELLA`, value: `LV${rms[random]}`, inline: true },
		        { name: `OLIVIER`, value: `LV ${rmo[random]}`, inline: true}
	        )
	        .setTimestamp()

            await message.channel.send({ embeds: [exampleEmbed] });
         }
	},
};
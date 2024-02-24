const { Events } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { rm, rmn, rmh, rme, rms, rmo } = require('../commands/json/rm.json');
const cmes = ['八恵ちゃん', '3曲選んで', '3曲選んでみました！'];

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        if (message.author.bot) return;
        if (message.content.includes('y!rmc') && message.content.includes('n')|| message.content.includes(`${cmes[0]}`) && message.content.includes(`${cmes[1]}`) && message.content.includes('NORMAL')) {     

            var number = [];

        for (var i = 0; i < 3; i++) {
            const random = Math.floor(Math.random() * rm.length);
            number.push(random);
        }
		    const user = message.author;

            const exampleEmbed = new EmbedBuilder()
	        .setColor([203, 175, 216])
	        .setTitle(`${user}さん！`)
	        .setAuthor({ name: `${user.displayName}`, iconURL: `${user.displayAvatarURL()}`})
	        //.setThumbnail(``)
	        .setDescription(`NORMALで${cmes[2]}`)
	        .addFields(
		        { name: `${rm[number[0]]}`, value: `LV${rmn[number[0]]}`, inline: true },
		        { name: `${rm[number[1]]}`, value: `LV${rmn[number[1]]}`, inline: true },
		        { name: `${rm[number[2]]}`, value: `LV${rmn[number[2]]}`, inline: true }
	        )
	        .setTimestamp()

            await message.channel.send({ embeds: [exampleEmbed] });
        } else if (message.content.includes('y!rmc') && message.content.includes('h')|| message.content.includes(`${cmes[0]}`) && message.content.includes(`${cmes[1]}`) && message.content.includes('HARD')) {
		 
			var number = [];

        for (var i = 0; i < 3; i++) {
            const random = Math.floor(Math.random() * rm.length);
            number.push(random);
        }
		    const user = message.author;

            const exampleEmbed = new EmbedBuilder()
	        .setColor([203, 175, 216])
	        .setTitle(`${user}さん！`)
	        .setAuthor({ name: `${user.displayName}`, iconURL: `${user.displayAvatarURL()}`})
	        //.setThumbnail(``)
	        .setDescription(`HARDで${cmes[2]}`)
	        .addFields(
		        { name: `${rm[number[0]]}`, value: `LV${rmh[number[0]]}`, inline: true },
		        { name: `${rm[number[1]]}`, value: `LV${rmh[number[1]]}`, inline: true },
		        { name: `${rm[number[2]]}`, value: `LV${rmh[number[2]]}`, inline: true }
	        )
	        .setTimestamp()

            await message.channel.send({ embeds: [exampleEmbed] });

		} else if (message.content.includes('y!rmc') && message.content.includes('e')|| message.content.includes(`${cmes[0]}`) && message.content.includes(`${cmes[1]}`) && message.content.includes('EXTRA')) {
		 
			var number = [];

        for (var i = 0; i < 3; i++) {
            const random = Math.floor(Math.random() * rm.length);
            number.push(random);
        }
		    const user = message.author;

            const exampleEmbed = new EmbedBuilder()
	        .setColor([203, 175, 216])
	        .setTitle(`${user}さん！`)
	        .setAuthor({ name: `${user.displayName}`, iconURL: `${user.displayAvatarURL()}`})
	        //.setThumbnail(``)
	        .setDescription(`EXTRAで${cmes[2]}`)
	        .addFields(
		        { name: `${rm[number[0]]}`, value: `LV${rme[number[0]]}`, inline: true },
		        { name: `${rm[number[1]]}`, value: `LV${rme[number[1]]}`, inline: true },
		        { name: `${rm[number[2]]}`, value: `LV${rme[number[2]]}`, inline: true }
	        )
	        .setTimestamp()

            await message.channel.send({ embeds: [exampleEmbed] });

		} else if (message.content.includes('y!rmc') && message.content.includes('s')|| message.content.includes(`${cmes[0]}`) && message.content.includes(`${cmes[1]}`) && message.content.includes('STELLA')) {
		 
			var number = [];

        for (var i = 0; i < 3; i++) {
            const random = Math.floor(Math.random() * rm.length);
            number.push(random);
        }
		    const user = message.author;

            const exampleEmbed = new EmbedBuilder()
	        .setColor([203, 175, 216])
	        .setTitle(`${user}さん！`)
	        .setAuthor({ name: `${user.displayName}`, iconURL: `${user.displayAvatarURL()}`})
	        //.setThumbnail(``)
	        .setDescription(`STELLAで${cmes[2]}`)
	        .addFields(
		        { name: `${rm[number[0]]}`, value: `LV${rms[number[0]]}`, inline: true },
		        { name: `${rm[number[1]]}`, value: `LV${rms[number[1]]}`, inline: true },
		        { name: `${rm[number[2]]}`, value: `LV${rms[number[2]]}`, inline: true }
	        )
	        .setTimestamp()

            await message.channel.send({ embeds: [exampleEmbed] });

		} else if (message.content.includes('y!rmc') && message.content.includes('o')|| message.content.includes(`${cmes[0]}`) && message.content.includes(`${cmes[1]}`) && message.content.includes('OLIVIER')) {
		 
			var number = [];

			for (var i = 0; i < 3; i++) {
				const random = Math.floor(Math.random() * rm.length);
				number.push(random);
			}
				const user = message.author;
	
				const exampleEmbed = new EmbedBuilder()
				.setColor([203, 175, 216])
				.setTitle(`${user}さん！`)
				.setAuthor({ name: `${user.displayName}`, iconURL: `${user.displayAvatarURL()}`})
				//.setThumbnail(``)
				.setDescription(`OLIVIERで${cmes[2]}`)
				.addFields(
					{ name: `${rm[number[0]]}`, value: `LV ${rmo[number[0]]}`, inline: true },
					{ name: `${rm[number[1]]}`, value: `LV ${rmo[number[1]]}`, inline: true },
					{ name: `${rm[number[2]]}`, value: `LV ${rmo[number[2]]}`, inline: true }
				)
				.setTimestamp()
	
				await message.channel.send({ embeds: [exampleEmbed] });

		}
	},
};
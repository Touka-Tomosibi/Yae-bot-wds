const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { rm, rmn, rmh, rme, rms, rmo } = require('../json/rm.json');
const cmes = ['八恵ちゃん', '3曲選んで', '3曲選んでみました！'];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rmc')
		.setDescription('ランダムに曲を送信します。')
        .addStringOption(option =>
			option.setName('level')
				.setDescription('難易度')
				.setRequired(true)
				.addChoices(
					{ name: 'NORMAL', value: 'no' },
					{ name: 'HARD', value: 'ha' },
                    { name: 'EXTRA', value: 'ex'},
                    { name: 'STELLA', value: 'st'},
                    { name: 'OLIVIER', value: 'ol'}
				)),
	async execute(interaction) {
       
        const level = interaction.options.getString('level');
		const user = interaction.user;
        var number = [];

        for (var i = 0; i < 3; i++) {
            const random = Math.floor(Math.random() * rm.length);
            number.push(random);
        }
     
        if (level == 'no') {

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

		await interaction.reply({ embeds: [exampleEmbed] });

        } else if (level == 'ha') {
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

		await interaction.reply({ embeds: [exampleEmbed] }); 

        } else if (level == 'ex') {
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

		await interaction.reply({ embeds: [exampleEmbed] }); 

        } else if (level == 'st') {
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

		await interaction.reply({ embeds: [exampleEmbed] }); 

        } else if (level == 'ol') {
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

		await interaction.reply({ embeds: [exampleEmbed] });   
        }
	},
};
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { rm, rmn, rmh, rme, rms, rmo } = require('../json/rm.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rm')
		.setDescription('ランダムに曲を送信します。'),
	async execute(interaction) {

		const random = Math.floor(Math.random() * rm.length);
		const user = interaction.user;

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

		await interaction.reply({ embeds: [exampleEmbed] });
	},
};
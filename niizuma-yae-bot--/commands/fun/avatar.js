const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('メンバーを選ぶとアイコンを奪い取れます')
        .addUserOption(option => 
			option.setName('user')
				.setRequired(true)
				.setDescription('メンバー選択')),
	async execute(interaction) {
		const user = interaction.options.getUser('user');

		const embed = new EmbedBuilder()
			.setColor('Random')
			.setTitle(`**${user.displayName}** [**${user.username}**]`)
			.setImage(user.displayAvatarURL({size: 1024}))
			.addFields(
				{ name: `\u200B`, value: `[png](${user.displayAvatarURL({ extension: 'png', size: 1024 })})`,  inline: true},
				{ name: `\u200B`, value: `[jpg](${user.displayAvatarURL({ extension: 'jpg', size: 1024 })})`, inline: true },
				{ name: `\u200B`, value: `[webp](${user.displayAvatarURL({ extension: 'webp', size: 1024 })})`, inline: true }
			)
			.setTimestamp()

		await interaction.reply({embeds : [embed]});
	},
};
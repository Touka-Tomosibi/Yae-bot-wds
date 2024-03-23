const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('pong'),
	async execute(interaction) {
        const sent = await interaction.reply({ content: 'hmm...', fetchReply: true });
		interaction.editReply(`pong！！${sent.createdTimestamp - interaction.createdTimestamp}ms`);
	},
};
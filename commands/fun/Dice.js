const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
  
		.setName('dice') //コマンド名
    
		.setDescription('サイコロを振ります'), //コマンド説明
    
	async execute(interaction) {
    
    const a = Math.floor(Math.random() * 6) + 1;
  
		await interaction.reply(`ダイスで${a}がでました`); //送信される内容
    
	},
};
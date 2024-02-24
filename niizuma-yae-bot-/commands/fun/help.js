const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('helpを表示します'),
	async execute(interaction) {
        const user = interaction.user;

		const exampleEmbed = new EmbedBuilder()
	        .setColor([203, 175, 216])
	        .setTitle(`${user}さん。何かお手伝いできることはありますか？`)
	        .setAuthor({ name: `${user.displayName}`, iconURL: `${user.displayAvatarURL()}`})
	        //.setThumbnail(``)
	        .setDescription(`y! + やりたいこと`)
	        .addFields(
		        { name: `ランダムに曲を選ぶ`, value: `y!rm`, inline: true },
		        { name: `ランダムに3曲選ぶ`, value: `y!rmc 難易度の頭文字の小文字※`, inline: true },
		        { name: `ランダムに曲を選ぶ(会話方式)`, value: `八恵ちゃん 曲を選んで の単語二つを含むメッセージを送る`, inline: true }
	        )
	        .addFields(
		        { name: `ランダムに3曲選ぶ(会話方式)`, value: `八恵ちゃん 3曲選んで 難易度 の単語三つを含むメッセージを送る`, inline: true },
		        { name: `上記は/コマンドでも使用可`, value: `/rm /rmc`, inline: true},
                { name: `※補足`, value: `NORMALの場合n HARDの場合h EXTRAの場合e STELLAの場合s OLIVIERの場合o`, inline: true}
	        )
	        .setTimestamp()

            await interaction.reply({ embeds: [exampleEmbed] });
	},
};
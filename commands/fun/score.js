const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
  
		.setName('score') //コマンド名
		.setDescription('スコアを計算します') //コマンド説明
  
    .addNumberOption(option => 
        option.setName('pff')
            .setDescription('Perfect+')
            .setRequired(true)
    )
    .addNumberOption(option => 
        option.setName('pf')
            .setDescription('Perfect')
            .setRequired(true)
    )
    .addNumberOption(option => 
        option.setName('gr')
            .setDescription('Great')
            .setRequired(true)
    )
    .addNumberOption(option => 
        option.setName('go')
            .setDescription('Good')
            .setRequired(true)
    )
    .addNumberOption(option => 
        option.setName('ba')
            .setDescription('ba')
            .setRequired(true)
    )
    .addNumberOption(option => 
        option.setName('mi')
            .setDescription('Miss')
            .setRequired(true)
    ),
    
	async execute(interaction) {

    var result = [];
    
    result.push(interaction.options.getNumber('pff'));
    result.push(interaction.options.getNumber('pf'));
    result.push(interaction.options.getNumber('gr'));
    result.push(interaction.options.getNumber('go'));
    result.push(interaction.options.getNumber('ba'));
    result.push(interaction.options.getNumber('mi'));
    
    var score = [];
    
    score.push(result[0] * 0);
    score.push(result[1] * 1);
    score.push(result[2] * 4);
    score.push(result[3] * 8);
    score.push(result[4] * 10);
    score.push(result[5] * 10);
    
    //0-1-4-8-10-10
    
    const user = interaction.user;
    
    const exampleEmbed = new EmbedBuilder()
	    .setColor([203, 175, 216])
	    .setTitle(`合計点 -${score[0] + score[1] + score[2] + score[3] + score[4] + score[5]}`)
	    .setAuthor({ name: `${user.displayName}`, iconURL: `${user.displayAvatarURL()}`})
	    //.setThumbnail(``)
	    //.setDescription()
	    .addFields(
		    { name: `Perfect+`, value: `-${score[0]}`, inline: true },
		    { name: `Perfect`, value: `-${score[1]}`, inline: true },
		    { name: `Great`, value: `-${score[2]}`, inline: true }
	    )
	    .addFields(
		    { name: `Good`, value: `-${score[3]}`, inline: true },
		    { name: `Bad`, value: `-${score[4]}`, inline: true},
        { name: `Miss`, value: `-${score[5]}`, inline: true}
	    )
	    .setTimestamp()
                
		await interaction.reply({ embeds: [exampleEmbed] }); //送信される内容
    
	},
};
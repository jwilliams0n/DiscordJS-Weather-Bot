const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uptime')
		.setDescription('View the bot\'s uptime!'),
	async execute(interaction, MessageEmbed, client) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        const uptimeEmbed = new MessageEmbed()
            .setTitle('**' + 'Bot Uptime:' + '**')
            .addFields(
                { name: "**" +  uptime + "**", value: "**" +  ' ' + "**", inline: false },
            )
            .setColor("#FFC0CB")
        interaction.reply({ embeds: [uptimeEmbed] })
	},
};

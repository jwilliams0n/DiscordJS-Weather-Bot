const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('View the commands for the bot!'),
	async execute(interaction) {
		await interaction.reply(`**${interaction.client.user.username} commands:**\n**/ping** - Pong!\n**/userinfo** - View basic userinfo!\n**/serverinfo** - View basic serverinfo!\n**/uptime** - View the bots uptime!\n**/weather [city]** - View the weather for a city!`);
	},
};

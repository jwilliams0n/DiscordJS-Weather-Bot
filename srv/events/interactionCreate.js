module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client, Client, ) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};

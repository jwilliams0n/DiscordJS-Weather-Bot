module.exports = async (client, Client, MessageEmbed) => {
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, botToken } = require('../config.json');

const slashCommands = [];
const commandFiles = fs.readdirSync('./commands-slash/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`../commands-slash/${file}`);
	client.slashCommands.set(command.data.name, command);
	slashCommands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(botToken);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: slashCommands })
	.then(() => console.log('Successfully registered application/slash commands.'))
	.catch(console.error);

client.on('interactionCreate', async interaction => {
		if (!interaction.isCommand()) return;
	
		const command = client.slashCommands.get(interaction.commandName);
	
		if (!command) return;
	
		try {
			await command.execute(interaction, MessageEmbed, client);
		} catch (error) {
			console.error(error);
			return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	});
}

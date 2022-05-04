const { prefix, authorID, clientId, } = require('../config.json');
module.exports = {
    name: 'messageCreate',
    async execute (message, client, Client, MessageEmbed) { 
        
        if (message.content.startsWith(prefix)) {
            message.reply('Weather bot now uses slash commands. Use /help to find out more!')
        }
        // THIS HAS TO STAY AT BOTTOM OF CODE
        if (message.content.startsWith(prefix)) { 

        const args = message.content.slice(prefix.length).split(/ +/);
        const cmd = args.shift();
        const command = client.commands.get(cmd);
    
        if(command) command.execute(client, message, args, Client, MessageEmbed);
    }},
};

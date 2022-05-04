const fs = require('fs');

module.exports = (client, Client) => {
    const command_files = fs.readdirSync('./commands-legacy/').filter(file => file.endsWith('.js'));

    for(const file of command_files){
        const command = require (`../commands-legacy/${file}`);
        if (command.name){
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
}

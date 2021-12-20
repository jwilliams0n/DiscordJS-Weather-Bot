const { Client, Intents, MessageEmbed } = require('discord.js');
const { prefix, botToken, apiToken, embedFooter, embedColour } = require('./config.json');
const axios = require('axios');
const client = new Client({
    partials: [
        "CHANNEL", "MESSAGE", "REACTION",
    ],
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.login(botToken);

client.on('ready', () => {
    var interval = setInterval (function () {
        client.user.setActivity(`${prefix}help`);
    }, 1* 3000);
    console.log(`${client.user.tag} successfully logged in.`)
})

client.on('messageCreate', (message) => {
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();
        switch (command){
            case 'ping':
                    message.reply('Pong!')
                break;
            case 'serverinfo':
                const { guild } = message
                const { name, id, preferredLocale, memberCount, createdTimestamp} = guild
                const serverAge1 = new Date().getTime() - createdTimestamp
                const serverAge2 = Math.round((((serverAge1 / 1000) / 60) / 60) / 24);
                const icon = guild.iconURL()
                const channelCount = guild.channels.cache.size
                const serverinfoEmbed = new MessageEmbed()
                    .setTitle('**' + 'Server Info' + '**')
                    .addFields(
                        { name: "**" + "Name:" + "**", value: name, inline: true },
                        { name: "**" + "ID:" + "**", value: id, inline: true },
                        { name: "**" + "Region:" + "**", value: preferredLocale, inline: true },
                        { name: "**" + "Server Age:" + "**", value: serverAge2 + " days", inline: true },
                        { name: "**" + "Total Members:" + "**", value: `${memberCount}`, inline: true },
                        { name: "**" + "Total Channels:" + "**", value: `${channelCount}`, inline: true },
                    )
                    .setThumbnail(icon)
                    .setFooter(embedFooter)
                    .setColor(embedColour)
                message.channel.send({ embeds: [serverinfoEmbed] });
                break;
            case 'userinfo':
                const accountAge1 = new Date().getTime() - message.author.createdTimestamp;
                const accountAge2 = Math.round((((accountAge1 / 1000) / 60) / 60) / 24);

                const filteredRoles = message.member.roles.cache.filter(role => role.id != message.guild.id);
                const listedRoles = filteredRoles.sort((a, b) => b.position - a.position).map(role => role.toString()); 

                const messageAuthorInfoEmbed = new MessageEmbed()
                    .setTitle('**' + message.author.username + " - " + message.author.id + '**')
                    .setThumbnail(message.author.displayAvatarURL())
                    .addFields(
                        { name: "Bot:", value: `${message.author.bot}` ,inline: true },
                        { name: "Account Age:", value: `${accountAge2}` + " days",inline: true },
                        { name: "Roles", value: `${listedRoles.join(", ")}` ,inline: false },
                    )
                    .setFooter(embedFooter)
                    .setColor(embedColour);
                message.channel.send({embeds: [messageAuthorInfoEmbed]});
                break;
            case 'weather':
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=${apiToken}`).then(response => {
                    const apiData = response;
                    const currentTemp = Math.ceil(apiData.data.main.temp)
                    const wind = apiData.data.wind.speed;
                    const icon = apiData.data.weather[0].icon
                    const cityName = args
                    const country = apiData.data.sys.country
                    const cloudness = apiData.data.weather[0].description;
                    const { pressure, humidity, temp_max, temp_min  } = response.data.main;

                    const weatherEmbed = new MessageEmbed()
                        .setTitle(`The temperature is ${currentTemp}\u00B0C in ${cityName}, ${country}`)
                        .addFields(
                            { name: `Maximum Temperature:`, value: `${temp_max}\u00B0C`, inline: true },
                            { name: `Minimum Temperature:`, value: `${temp_min}\u00B0C`, inline: true },
                            { name: `Humidity:`, value: `${humidity} %`, inline: true },
                            { name: `Wind Speed:`, value: `${wind} m/s`, inline: true },
                            { name: `Pressure:`, value: `${pressure} hpa`, inline: true },
                            { name: `Cloudiness:`, value: `${cloudness}`, inline: true },
                        )
                        .setThumbnail(`http://openweathermap.org/img/w/${icon}.png`)
                        .setColor(embedColour)
                        .setFooter(embedFooter);
                    message.channel.send({ embeds: [weatherEmbed] });
                }).catch(err => {
                    message.reply(`Enter a vailid city name`)
                })
                break;
            case 'help':
                message.reply(`**${client.user.username} commands:**\n*ping* - Pong!\n*userinfo* - View basic userinfo!\n*serverinfo* - View basic serverinfo!\n*weather [city]* - View the weather for a city!`)
                break;
        }
    }
})
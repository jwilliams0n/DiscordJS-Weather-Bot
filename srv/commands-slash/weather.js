const { SlashCommandBuilder } = require('@discordjs/builders');
const { apiToken } = require('../config.json')
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('View the weather for your chosen area')
        .addStringOption(option => option.setName('location').setDescription('The chosen area\'s weather to show')),
	async execute(interaction, MessageEmbed) {
		const target = interaction.options.data[0].value
		axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${target}&units=metric&appid=${apiToken}`).then(response => {
                    const apiData = response;
					const currentTemp = Math.ceil(apiData.data.main.temp)
                    const wind = apiData.data.wind.speed;
                    const icon = apiData.data.weather[0].icon
                    const cityName = interaction.options.data[0].value
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
                        .setColor("#FFC0CB")
				interaction.reply({ embeds: [weatherEmbed] })
			}).catch(err => {
			 	interaction.reply(`Please enter a vailid city name`)
			 })
	},
};

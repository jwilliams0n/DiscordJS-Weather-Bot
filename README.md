# DiscordJS-Weather-Bot
Discord.JS Weather Bot that can be self hosted using your own bot and api token.

A 24/7 hosted version of this bot can be invited to your server here: 
https://discord.com/api/oauth2/authorize?client_id=881917566925308015&permissions=2147551232&scope=bot%20applications.commands


### Bot Commands:
- w!ping - Pong!
- w!userinfo - View basic userinfo.
- w!serverinfo - View basic serverinfo.
- w!weather <city> - View the weather for a city.

  
## If chosing to host your own version of the bot, follow the instructions below.

  
### Prerequisites for this to work:
- A discord.js bot
- An API for the weather information. For my bot I used https://openweathermap.org/api.
  

### How to install + set up the bot:
- Create a folder for your discord bot.
- Download the code from github, into your newly created folder.
- Replace `bot token here` with your bot token in `config.json`.
- Replace `api token here` with your weather API token in `config.json`. 
- Install the required modules through `npm install` in your terminal.
- Run your bot by typing `node index.js` in your terminal.
- You should see `... successfully logged in.` when you bot is working.

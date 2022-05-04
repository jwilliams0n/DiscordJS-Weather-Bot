# DiscordJS-Weather-Bot - Now using slash commands!
Discord.JS Weather Bot that can be self hosted using your own bot and api token.

A 24/7 hosted version of this bot can be invited to your server here: 
https://discord.com/api/oauth2/authorize?client_id=881917566925308015&permissions=2147551232&scope=bot%20applications.commands


### Bot Commands:
- /ping - Pong!
- /userinfo - View basic userinfo.
- /serverinfo - View basic serverinfo.
- /weather <city> - View the weather for a city.

  
## If chosing to host your own version of the bot, follow the instructions below.

  
### Prerequisites for this to work:
- A discord.js bot
- An API for the weather information. For my bot I used https://openweathermap.org/api.
  

### How to install + set up the bot:
- Clone repository:
  ```
  git clone https://github.com/Joshwgaming/DiscordJS-Weather-Bot
  ```
- Configure the bot in `/srv/config.json`:
  ```
  {
    "botToken": "bot token here",
    "prefix": "w!",
    "guildId": "primary guild id here",
    "clientId": "bot's id here",
    "authorID": "your id here",
    "apiToken": "api token here"
  }
  ```
- Install the required npm modules:
  ```
  npm install
  ```
- Start your bot:
  ```
  node index.js
  ```
- Once started, you should see `Logged in as` in your terminal.

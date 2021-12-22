# DiscordJS-Weather-Bot - Updated to DiscordJS v13
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
- Clone repository:
  ```
  git clone https://github.com/Joshwgaming/DiscordJS-Weather-Bot
  ```
- Configure the bot in `config.json`:
  ```
  {
    "prefix": "w!",
    "botToken": "your bot token here",
    "apiToken": "your api token here",
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
- Once started, you should see `... successfully logged in.` in your terminal.

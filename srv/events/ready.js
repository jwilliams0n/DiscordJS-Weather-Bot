module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Logged in as ${client.user.tag}.`);
        
        var interval6666 = setInterval (async function () {
            client.user.setActivity("w!help")

        }, 1 * 60000);//set time to repeat, 60000 = 60 seconds
    }
}

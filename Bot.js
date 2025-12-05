const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: "play.dracosmp.fun",   // server IP
        port: 25565,                 // default port
        username: "cactusfarmer",    // your bot name
        version: "1.21.1"            // server version
    });

    bot.on('login', () => {
        console.log("Bot logged in!");
        setTimeout(() => {
            bot.chat("/login lagatop");
            console.log("Logged in with /login");
        }, 10000); // wait 10 seconds
    });

    bot.on('end', () => {
        console.log("Bot disconnected. Reconnecting...");
        setTimeout(createBot, 5000);
    });

    bot.on('kicked', console.log);
    bot.on('error', console.log);
}

createBot();

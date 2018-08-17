const Discord = require('discord.js');
const bot = new Discord.client();

var prefix = ("*")

bot.on('ready',function() {
    bot.user.setGame ("command:*help);
    console.log("Conectedç");
});

bot.login("NDc5OTk5Mjg1MzY3Mjc1NTQy.DlheaQ.NWXoV9ohSo-0BTeTfbFL-xyxJ4w");


bot.on('message', message => {
    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes: /n -*help");
    }

    if (message.content === "salut"){
        message.reply("Bien le bonjour. :-)");
        console.log("commande Salut effectué");
    }
});

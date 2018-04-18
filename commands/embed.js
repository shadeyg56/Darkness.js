const Discord = require("discord.js");
exports.run = async (client, message, args) => {
	const msg = args.join(" ");
	const embed = new Discord.RichEmbed().setColor(0xed).setDescription(msg);
	message.channel.send({embed});

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "embed",
  category: "Idk",
  description: "Embeds text",
  usage: "embed [msg]"
}; 	
}
const requests = require("node-fetch");
const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
	const user = args.join(" ");
	const response = await requests(`https://api.github.com/users/${user}`);
	const json = await response.json();
	if (!("message" in json)) {
		let embed = new Discord.RichEmbed().setColor(0xed)
		.setTitle(`${json.login}'s GitHub`)
		.setURL(json.html_url)
		.setDescription(json.bio)
		.setThumbnail(json.avatar_url);
		message.channel.send(embed);
	} else {
		message.channel.send(json.message);
	}

}
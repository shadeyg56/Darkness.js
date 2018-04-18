const requests = require("node-fetch");
exports.run = async (client, message, args) => {
	const response = await requests("http://api.yomomma.info/")	
	const json = await response.json()
	message.channel.send(json.joke)

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: "User"
};

exports.help = {
  name: "yomomma",
  category: "Idk",
  description: "Returns a yomomma joke",
  usage: "yomomma"
}; 	
}
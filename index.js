const { Client, RichEmbed, MessageEmbedField } = require('discord.js');
const bot = new Client();

const token = require('dotenv').config();
const PREFIX = '!';
const talkedRecently = new Set();
const andy = bot.emojis.find(emoji => emoji.name === "andy");

bot.on('ready', () => {
	console.log('This bot is online.');
})



bot.on('message', message => {


	let args = message.content.substring(PREFIX.length).split(" ");
	let args2 = message.content;
	let result = Math.round(5 / (Math.random() * 5 + 1));
	//console.log(args);
	//console.log(args2);

	switch (args[0]) {
		

		case 'help': 
			message.author.send("Bootleg Nitro By Lukepwn. Writing any of these commands with the prefix ':', will also work. \n\
			Available Commands: \n\
			!help - List Commands \n\
			!gome - Go You! ; !bandy - It's Andy.. \n\
			!ohyeah - Gachibass ; !empty - :empty \n\
			!mthhic - :mthhic ; !ooo - :ooonoellebis \n\
			!magik - :magik ; !77 - :77head \n\
			!xing || !qui - :xingqui ; !where - :wheredidouremotesgo \n\
			!stonk - :stonks ; !magikm - :magikman.gif \n\
			!woke - :woke.gif ; !pickle - pickle.gif \n\n\
			!domain - Depict your artifact RNG \n\
			!clear - (Mods) Clear Message \n\
			If you got a spare Nitro Boost, consider Boosting PWN Server! Thank You \
			");

			message.delete(1000).catch (console.error);
			message.channel.send("Check your DMs! Thou have been helped...")
			break;
		
		case 'empty':
		case 'emp':
		case 'empt':
			message.channel.send({files: ['emotes/empty.png']});
			//message.delete(100).catch (console.error);
			break;

		case 'mthhic':
		case 'mthh':
			message.channel.send({files: ['emotes/mthhic.png']});
			//message.delete(100).catch (console.error);
			break;

		case 'ooo':
			message.channel.send({files: ['emotes/ooonoellebis.png']});
			//message.delete(100).catch (console.error);
			break;

		case 'magik':
			message.channel.send({files: ['emotes/magik.png']});
			//message.delete(100).catch (console.error);
			break;

		case 'woke':
			message.channel.send({files: ['emotes/woke.gif']});
			//message.delete(100).catch (console.error);
			break;

		case 'gome':
			//if(!message.member.roles.find(r => r.name === "Mods")) return
			message.channel.sendMessage('Go You!');
			message.delete(1000).catch (console.error);
			break;
			
		case 'clear':
			if(!message.member.roles.find(r => r.name === "Mods")) return
			if(!args[1]) return
			message.channel.bulkDelete(args[1]);
			break;

		case 'bandy':
			//if(!message.member.roles.find(r => r.name === "Mods")) return
			message.channel.sendMessage('B' + `${andy}` + 'A' + `${andy}` + 'N' + `${andy}` + 'D' + `${andy}` + 'Y');
			//message.delete(3000).catch (console.error);
			break;

		case 'domain':
			
			const blonk = bot.emojis.find(emoji => emoji.name === "blonk");
			const threedee = bot.emojis.find(emoji => emoji.name === "3d");
			const god = bot.emojis.find(emoji => emoji.name === "BecomeGod");

			if (talkedRecently.has(message.author.id)) {
				message.channel.send("Try again tomorrow - " + message.author);
			} else {

				// Adds the user to the set so that they can't talk for a minute
				talkedRecently.add(message.author.id);
				setTimeout(() => {
					// Removes the user from the set after a minute
					talkedRecently.delete(message.author.id);
				}, 43200000);
			

				switch (result) {
					case 1:
						message.channel.sendMessage("LMAOOO just use your resin someplace else " 
						+ "https://tenor.com/view/piclel-dancing-happy-gif-14688401" );
						break;

					case 2:
						message.channel.sendMessage("enjoy your noob rolls " + `${blonk}`);
						break;

					case 3:
						message.channel.sendMessage("good main stat but those subs... yikes "+ `${threedee}`);
						break;

					case 4:
						message.channel.sendMessage("wtf... run domain now for andy artifacts  " + `${andy}`);
						break;

					case 5:
						message.channel.sendMessage("GO RUN DOMAIN NOW FOR YOUR GOD ROLL " + `${god}`);
						break;
				}
			}
			break;
		

		// case 'suggest':
		// 	let msgSuggest = args.slice(1).join(" ");
			
		// 	const EmbedSuggest = new RichEmbed()
		// 	.setColor(0xffffff)
		// 	.setTitle(message.member.user.tag)
		// 	.setDescription(msgSuggest);
			
		// 	message.guild.channels.find("name", "suggestions").send(EmbedSuggest);
		// 	message.guild.channels.find("name", "suggestions").send("<@151490906728431616>");
		// 	message.delete(3000).catch (console.error);
		// 	break;

		case 'ohyeah':
			const bass = bot.emojis.find(emoji => emoji.name === "gachiBASS");
			message.channel.sendMessage(`${bass}` + `${bass}` + `${bass}` + `${bass}` + `${bass}`);
			message.delete(3000).catch (console.error);
			break;
			
		// case 'helpme':
		// 	let msgHelp = args.slice(1).join(" ");
		// 	//if (message.attachements.size > 0) {
		// 	var Attachment = (message.attachments).array();

		// 	if ((Attachment.length) > 0) {
			
		// 		const EmbedHelp = new RichEmbed()
		// 		.setColor(0xffffff)
		// 		.setTitle(message.member.user.tag)
		// 		.setDescription(msgHelp)
		// 		.setImage(Attachment[0].url);
				
		// 		message.guild.channels.find("name", "advice-and-help").send("<@151490906728431616>");
		// 		message.guild.channels.find("name", "advice-and-help").send(EmbedHelp);
				
		// 		message.delete(3000).catch (console.error);
		// 		break;
		// 	}
			
		// 	else {
		// 		const EmbedHelp = new RichEmbed()
		// 		.setColor(0xffffff)
		// 		.setTitle(message.member.user.tag)
		// 		.setDescription(msgHelp)
				
		// 		message.guild.channels.find("name", "advice-and-help").send(EmbedHelp);
		// 		message.delete(3000).catch (console.error);
		// 		break;
		// 	}
		
		case 'poll':
			if(!message.member.roles.find(r => r.name === "Mods")) return
			let msgArgs = args.slice(1).join(" ");
		
			//message.channel.send("@here");
			
			const Embed = new RichEmbed()
			.setColor(0xffffff)
			.setTitle(msgArgs + "?")
			.setDescription("React to Vote");
			
			if (!args[1]) {
				break;
			}

			message.channel.send(Embed).then(msg => {
				msg.react("👍");
				msg.react("👎");
				
			});
			
			message.delete(3000).catch (console.error);
			break;
			
		case 'video':
			if(!message.member.roles.find(r => r.name === "Mods")) return
			let msgVid = args.slice(1).join(" ");
			const pogu = bot.emojis.find(emoji => emoji.name === "pogu");
			
			if (!args[1]) {
				break;
			}
			
			message.delete(1000).catch (console.error);
			message.channel.send("\:warning: Lukepwn just uploaded a new video! Check it out: " + msgVid).then(msg => {
				msg.react(gome)
			});
			break;
			
		case 'stream':
			if(!message.member.roles.find(r => r.name === "Mods")) return
			let msgVid2 = args.slice(1).join(" ");
			const gome = bot.emojis.find(emoji => emoji.name === "gome");
			
			//message.channel.send("@everyone");
			
			if (!args[1]) {
				break;
			}
			
			message.delete(1000).catch (console.error);
			message.channel.send(gome + " Lukepwn is going live in 10 minutes! Come say hi: " + msgVid2).then(msg => {
				msg.react(gome)
			});
			break;
		
		default: 
			//var array = ['!empty', '!mthhic', '!ooo', '!magik'];
			//var checkArray = array.some(w => ` ${message.content.toLowerCase()}`);
		
			if (message.content.toLowerCase().includes (':empt')) 
				message.channel.send({files: ['emotes/empty.png']});
		
			else if (message.content.toLowerCase().includes (':mthh')) 
				message.channel.send({files: ['emotes/mthhic.png']});
			
			else if (message.content.toLowerCase().includes (':ooo')) 
				message.channel.send({files: ['emotes/ooonoellebis.png']});
			
			else if (message.content.toLowerCase() === ':magik') 
				message.channel.send({files: ['emotes/magik.png']});

			else if(message.content.toLowerCase().includes (':woke'))
				message.channel.send({files: ['emotes/woke.gif']});

			else if(message.content.toLowerCase().includes (':77'))
				message.channel.send({files: ['emotes/77head.png']});

			else if(message.content.toLowerCase().includes (':xing' || ':qui'))
				message.channel.send({files: ['emotes/xingqui.png']});

			else if(message.content.toLowerCase().includes (':ditto'))
				message.channel.send({files: ['emotes/dittopog.gif']});

			else if(message.content.toLowerCase().includes (':magikm'))
				message.channel.send({files: ['emotes/magikman.png']});

			else if(message.content.toLowerCase().includes (':where'))
				message.channel.send({files: ['emotes/where.png']});

			else if(message.content.toLowerCase().includes (':stonk'))
				message.channel.send({files: ['emotes/stonks.png']});

			else if(message.content.toLowerCase().includes ('pickle'))
				message.channel.send("https://tenor.com/view/piclel-dancing-happy-gif-14688401");
				
		
	}
		
})

bot.login(process.env.discord_token);

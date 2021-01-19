const { Client, RichEmbed, MessageEmbedField } = require('discord.js');
const bot = new Client();

const token = require('dotenv').config();
const PREFIX = '!';

bot.on('ready', () => {
	console.log('This bot is online.');
})



bot.on('message', message => {


	let args = message.content.substring(PREFIX.length).split(" ");
	let args2 = message.content;
	//console.log(args);
	//console.log(args2);

	switch (args[0]) {
		

		case 'help': 
			message.author.send("Bootleg Nitro By Lukepwn. Available Commands: \n\
			!help - List Commands \n\
			!gome - Go You! \n\
			!bandy - It's Andy.. \n\
			!ohyeah - Gachibass \n\
			!empty - :empty \n\
			!mthhic - :mthhic \n\
			!ooo - :ooonoellebis \n\
			!magik - :magik \n\
			!woke - :woke.gif \n\
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
			const andy = bot.emojis.find(emoji => emoji.name === "andy");
			message.channel.sendMessage('B' + `${andy}` + 'A' + `${andy}` + 'N' + `${andy}` + 'D' + `${andy}` + 'Y');
			//message.delete(3000).catch (console.error);
			break;

		case 'suggest':
			let msgSuggest = args.slice(1).join(" ");
			
			const EmbedSuggest = new RichEmbed()
			.setColor(0xffffff)
			.setTitle(message.member.user.tag)
			.setDescription(msgSuggest);
			
			message.guild.channels.find("name", "suggestions").send(EmbedSuggest);
			message.guild.channels.find("name", "suggestions").send("<@151490906728431616>");
			message.delete(3000).catch (console.error);
			break;

		case 'ohyeah':
			const bass = bot.emojis.find(emoji => emoji.name === "gachiBASS");
			message.channel.sendMessage(`${bass}` + `${bass}` + `${bass}` + `${bass}` + `${bass}`);
			message.delete(3000).catch (console.error);
			break;
			
		case 'helpme':
			let msgHelp = args.slice(1).join(" ");
			//if (message.attachements.size > 0) {
			var Attachment = (message.attachments).array();

			if ((Attachment.length) > 0) {
			
				const EmbedHelp = new RichEmbed()
				.setColor(0xffffff)
				.setTitle(message.member.user.tag)
				.setDescription(msgHelp)
				.setImage(Attachment[0].url);
				
				message.guild.channels.find("name", "advice-and-help").send("<@151490906728431616>");
				message.guild.channels.find("name", "advice-and-help").send(EmbedHelp);
				
				message.delete(3000).catch (console.error);
				break;
			}
			
			else {
				const EmbedHelp = new RichEmbed()
				.setColor(0xffffff)
				.setTitle(message.member.user.tag)
				.setDescription(msgHelp)
				
				message.guild.channels.find("name", "advice-and-help").send(EmbedHelp);
				message.delete(3000).catch (console.error);
				break;
			}
		
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
		
	}
		
})

bot.login(process.env.discord_token);

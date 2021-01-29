const { Client, RichEmbed, MessageEmbedField } = require('discord.js');
const memberCount = require ('./member-count');
const bot = new Client();

const token = require('dotenv').config();
const PREFIX = ':';
const talkedRecently = new Set();


bot.on('ready', () => {
	console.log('This bot is online.');

	//call functions
	memberCount(bot);
})



bot.on('message', message => {

	let andy = bot.emojis.find(emoji => emoji.name === "andy");
	let args = message.content.substring(PREFIX.length).split(" ");
	let args2 = message.content;
	let result = Math.round(5 / (Math.random() * 5 + 1));
	// console.log(args);

	switch (args[0]) {
		

		case 'help': 
			message.author.send(">>> ``` Bootleg Nitro By Lukepwn. Writing any of these commands with the prefix ':', will also work. \n\
 Available Commands: ``` \n\
			`!help` - List Commands \n\
			`!gome` - Go You! ; `!bandy` - It's Andy.. \n\
			`!ohyeah` - Gachibass ; `!empty` - :empty \n\
			`!mthhic` - :mthhic ; `!ooo` - :ooonoellebis \n\
			`!magik` - :magik ; `!77` - :77head \n\
			`!xing` || `!qui` - :xingqui \n\
			`!where` - :wheredidouremotesgo \n\
			`!aaa` - :aaa ; \n\ `!magique` - :magique \n\
			`!stonk` - :stonks ; `!magikm` - :magikman.gif \n\
			`!woke` - :woke.gif ; `!pickle` - pickle.gif \n\n\
			`!domain` - Depict your artifact RNG \n\
			`!clear` - (Mods) Clear Message \n\
			``` If you got a spare Nitro Boost, consider Boosting PWN Server! Thank You! ``` \
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
			const kirby = bot.emojis.find(emoji => emoji.name === "kirbylmao");
			const god = bot.emojis.find(emoji => emoji.name === "BecomeGod");

			// timeout every 6hrs
			var timeout = setTimeout(() => {}, 21600000);

			function getTimeLeft(timeout) {
				var minutes = Math.ceil((timeout._idleTimeout - timeout._idleStart)/(1000*60));
				return minutes;
			}

			if (talkedRecently.has(message.author.id)) {
				message.channel.send("Try again in: " + getTimeLeft(timeout) + " minutes " + message.author);
			} 
			else {

				switch (result) {
					case 1:
						message.channel.sendMessage(message.author + " LMAOOO just use your resin someplace else " 
						+ "https://tenor.com/view/piclel-dancing-happy-gif-14688401" );
						break;

					case 2:
						message.channel.sendMessage(message.author + ", enjoy your noob rolls " + `${blonk}`);
						break;

					case 3:
						message.channel.sendMessage(message.author + ", come back when you're a little... mmmm..... richer! "+ `${kirby}`);
						break;

					case 4:
						message.channel.sendMessage(message.author + ", wtf... run domain now for andy artifacts  " + `${andy}`);
						break;

					case 5:
						message.channel.sendMessage(message.author + ", GO RUN DOMAIN NOW FOR YOUR GOD ROLL " + `${god}` + `${god}` + `${god}`);
						break;
				}

				talkedRecently.add(message.author.id);
				setTimeout(() => {
					// Removes the user from the set after 12hrs
					talkedRecently.delete(message.author.id);
				}, 43200000);
				
			}
			break;

		case 'ohyeah':
			const bass = bot.emojis.find(emoji => emoji.name === "gachiBASS");
			message.channel.sendMessage(`${bass}` + `${bass}` + `${bass}` + `${bass}` + `${bass}`);
			message.delete(3000).catch (console.error);
			break;
		
		case 'maint': 
			if(!message.member.roles.find(r => r.name === "Mods")) return
			message.channel.sendMessage("Pwnchan under maintenance...");
			message.delete(100).catch (console.error);
			break;

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

			else if(message.content.toLowerCase().includes (':xing'))
				message.channel.send({files: ['emotes/xingqui.png']});

			else if(message.content.toLowerCase().includes (':qui'))
				message.channel.send({files: ['emotes/xingqui.png']});

			else if(message.content.toLowerCase().includes (':ditto'))
				message.channel.send({files: ['emotes/dittopog.gif']});

			else if(message.content.toLowerCase().includes (':magikm'))
				message.channel.send({files: ['emotes/magikman.png']});

			else if(message.content.toLowerCase().includes (':where'))
				message.channel.send({files: ['emotes/where.png']});

			else if(message.content.toLowerCase().includes (':stonk'))
				message.channel.send({files: ['emotes/stonks.png']});

			else if(message.content.toLowerCase().includes (':aaa'))
				message.channel.send({files: ['emotes/aaa.png']});
				
			else if(message.content.toLowerCase().includes (':magiq'))
				message.channel.send({files: ['emotes/magique.png']});	

			else if(message.content.toLowerCase().includes (':amen'))
				message.channel.send({files: ['emotes/ameno.png']});				
		
	}
		
})

bot.login(process.env.discord_token);

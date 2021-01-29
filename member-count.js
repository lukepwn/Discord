module.exports = (bot) => {
    
    const channelId = "804557606688653342"
    const bannerDate = new Date("Feb 3, 2021 18:00:00").getTime();
    const presentDate = new Date().getTime();
    const calc = bannerDate - presentDate

    const days = Math.floor(calc / (1000 * 60 * 60 * 24));
    const hours = Math.floor((calc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((calc % (1000 * 60 * 60)) / (1000 * 60));

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`${"Xiao ETA: "+ days + "d " + hours + "h " + minutes + "m "}`)
        //console.log(channel);
        //channel.setName(`test1: ${Date.now()}`)
    }

    const guild = bot.guilds.cache.get("683432447039504393")
    updateMembers(guild);
}
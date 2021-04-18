const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "help",
  aliases: ["h"],
  description: ("help.description"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("help.embedTitle", { botname: message.client.user.username }))
      .setDescription(">help [command] ~ To show all commands
>join [joins the voice channel]
>invite [invite] ~ To add/invite the bot to your server
>dc Leave ~ Leave The Voice Channel!
>loop loop ~ Toggle music loop
>lyrics [lyrics] ~ Get lyrics for the currently playing song
>nowplaying  ~ To show the music which is currently playing in this server
>pause [pause] ~ To pause the current music in the server
>play <YouTube_URL> | <song_name> ~ To play songs :D
>playlist <YouTube Playlist URL | Playlist Name> ~ To play songs :D
>queue  ~ To show the server songs queue
>remove rm <number> ~ Remove song from the queue
>resume  ~ To resume the paused music
>search <song_name> ~ To search songs :D
>shuffle [shuffle] ~ Shuffle queue
>skip  ~ To skip the current music
>skipto skipto <number> ~ Skip to the selected queue number
>stop  ~ To stop the music and clearing the queue
>volume [volume] ~ To change the server song queue volume
>24/7 [stays 24/7  in voice channel] 
>feed [feedback for the cloudz]
")
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};

const { MessageEmbed } = require("discord.js")

module.exports = client => {

client.on("voiceStateUpdate", async(oldState, newState) => {
  if (newState && oldState) {
    const channel = client.channels.cache.get(process.env.log)

    if (oldState.channelID === null && newState.channelID != null) {
      const guild = newState.guild
      const user = await client.users.fetch(newState.id)
      const member = guild.members.cache.get(newState.id)
      
      const embed = new MessageEmbed()
      .setColor("GREEN")
      .setAuthor("接続を検知しました。", user.displayAvatarURL({dynamic:true}))
      .addFields(
        {
          name: "User",
          value: user.tag
        },
        {
          name: "Nickname",
          value: member.nickname || "未設定",
        },
        {
          name: "Server",
          value: guild.name,
          inline: true
        },
        {
          name: "Channel",
          value: newState.channel.name,
          inline: true
        }
      )
      .setTimestamp()

      channel.send(embed)
      }

    if (oldState.channelID != null && newState.channelID === null) {
      const guild = oldState.guild
      const user = await client.users.fetch(oldState.id)
      const member = guild.members.cache.get(oldState.id)

      const embed = new MessageEmbed()
      .setColor("RED")
      .setAuthor("切断を検知しました。", user.displayAvatarURL({dynamic:true}))
      .addFields(
        {
          name: "User",
          value: user.tag
        },
        {
          name: "Nickname",
          value: member.nickname || "未設定",
        },
        {
          name: "Server",
          value: guild.name,
          inline: true
        },
        {
          name: "Channel",
          value: oldState.channel.name,
          inline: true
        }
      )
      .setTimestamp()

      channel.send(embed)
    }
  }
})
  
}

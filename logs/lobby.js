const { MessageEmbed } = require("discord.js")

module.exports = client => {
  
client.on("guildMemberAdd", async(member) => {
  const channel = client.channels.cache.get(process.env.lobby)

  const embed = new MessageEmbed()
  .setColor("GREEN")
  .setAuthor(memebr.displayName, member.user.displayAvatarURL({dynamic:true}))
  .setDescription(`**${member.displayName}** has Joined\nID: ${member.id}\nUser createdAt: ${member.user.createdAt}`)
  .setTimestamp()

  channel.send(embed)
})

client.on("guildMemberRemove", async(member) => {
  const channel = client.channels.cache.get(process.env.lobby)

  const embed = new MessageEmbed()
  .setColor("RED")
  .setAuthor(member.displayName, member.user.displayAvatarURL({dynamic:true}))
  .setDescription(`**${member.displayName}** has Left\nID: ${member.id}`)

  channel.send(embed)
})
  
}

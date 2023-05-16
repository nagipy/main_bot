const { MessageEmbed } = require("discord.js")

module.exports = client => {

client.on("guildMemberUpdate", async (oldMember, newMember) => {

  const channel = client.channels.cache.get(process.env.user)

  if (oldMember.nickname !== newMember.nickname) {
    const embed = new MessageEmbed()
      .setColor("GOLD")
      .setAuthor("変更を検知しました。", oldMember.user.displayAvatarURL({ dynamic: true }))
      .addFields(
        {
          name: "User",
          value: oldMember.user.tag
        },
        {
          name: "old Nickname",
          value: oldMember.nickname || oldMember.user.username,
          inline: true
        },
        {
          name: "new Nickname",
          value: newMember.nickname || newMember.user.username,
          inline: true
        }
      )
      .setTimestamp()

    channel.send(embed)
  }
})

}

const Discord = require("discord.js")

const { Client, Intents } = require('discord.js');
const client = new Client({
  intents:
    [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const prefix = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
})


const { MessageSelectMenu, MessageActionRow, ButtonBuilder } = require('discord.js');

client.on('messageCreate', async message => {

  if (message.content === prefix + 'clan-info') {
    const row = new MessageActionRow()
      .addComponents(

        new MessageSelectMenu()
          .setCustomId('select')
          .setPlaceholder('Clans System Abadi ')
          .addOptions([
            {
              label: 'قوانين نظام الكلانات',
              emoji: '<:p_bookmark:1163790679869235200>',
              value: 'first_option',
            },
            {
              label: ' الشروط والعضويات',
              emoji: '<:p_card_add:1082243198606377001>',
              value: 'second_option',
            },
          ]),

      );

    await message.channel.send({ components: [row], embeds: [embed], });
  }
});
let embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setImage('https://cdn.discordapp.com/attachments/1162106711490973729/1163859385618006207/5e37902c0087cddb.png?ex=65411b84&is=652ea684&hm=81427913809f386407694ab80b6e7ad921177fc5bf216596806c2de6d603692c&')
  .setThumbnail('https://cdn.discordapp.com/attachments/1162106711490973729/1163859367708336158/IMG_4690.png?ex=65411b80&is=652ea680&hm=28f0ea1810379c99aa5efd4170a752cae539c20116ccfcac6637c5dbe760c364&')
  .setDescription(`اهلا بك في نظام الكلانات اختر من القائمة في الاسفل لمعرفة كيفية الشراء او طريقة الدفع والتفاعل بالكلان`)
  .setTitle('System Clans <:p_shield:1163902538605666314>')
  .setFooter({ text: 'System Clan', iconURL: 'https://cdn.discordapp.com/attachments/1162106711490973729/1163859367708336158/IMG_4690.png?ex=65411b80&is=652ea680&hm=28f0ea1810379c99aa5efd4170a752cae539c20116ccfcac6637c5dbe760c364&' });


client.on("interactionCreate", interaction => {
  if (!interaction.isSelectMenu()) return;
  if (interaction.values == "first_option") {
    interaction.reply({ embeds: [rules], ephemeral: true })
  }
  if (interaction.values == "second_option") {
    interaction.reply({ embed: [rules2],  ephemeral: true })
  }
}
);
let rules = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setImage('https://cdn.discordapp.com/attachments/1162106711490973729/1163859385618006207/5e37902c0087cddb.png?ex=65411b84&is=652ea684&hm=81427913809f386407694ab80b6e7ad921177fc5bf216596806c2de6d603692c&')
  .setThumbnail('https://cdn.discordapp.com/attachments/1162106711490973729/1163859367708336158/IMG_4690.png?ex=65411b80&is=652ea680&hm=28f0ea1810379c99aa5efd4170a752cae539c20116ccfcac6637c5dbe760c364&')
  .setDescription(`‎<:p_bookmark:1163790679869235200>
** <:p_users:1081112026375524402> قوانين الكلانات**
‎• لكل كلان له 3 تحذيرات تتاخذها كلها ينحذف كلانك
‎• المسؤول عن الكلام بالكامل الاونر ونائبه
‎• يمنع تسوي مشاكله بالشات
‎• يمنع السب على كلان ثاني الخ..
‎•الكلان تابع للسيرفر 
‎• ممنوع الغش استخدام برامج افك او حسابك الثاني بيتم خصم منكم نقاط
‎• الاونر ونائبه يتحملون مل الاضرار
‎• اذا عندك بس 2 يمكن فتح تقديم خاص بكلانكم هنا <1163796853406580776#>
‎• ماراح يصير تحدي بين كلانات الى بأمر من <@&1163864769594408983>

`)

let rules2 = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setImage('https://cdn.discordapp.com/attachments/1162106711490973729/1163859385618006207/5e37902c0087cddb.png?ex=65411b84&is=652ea684&hm=81427913809f386407694ab80b6e7ad921177fc5bf216596806c2de6d603692c&')
  .setThumbnail('https://cdn.discordapp.com/attachments/1162106711490973729/1163859367708336158/IMG_4690.png?ex=65411b80&is=652ea680&hm=28f0ea1810379c99aa5efd4170a752cae539c20116ccfcac6637c5dbe760c364&')
  .setDescription(`<:p_bookmark:1163790679869235200j
  ** شروط فتح كلان **
ان لايقل الاعضاء عن
<:p_users:1081112026375524402>2
شراء احدى العضويات التاليه 
__العضويات__
العضوية الفضيه 
150k / month اشتراك شهري
المميزات :  
روم كتابي + صوتي للتلفيل فيه
رتبه لجميع اعضاء كلانكم
ميزة الحرب بين كلان ثاني
على رتبه
العضويه الذهبيه
المميزات : 
250k / month اشتراك شهري
جميع المميزات السابقه +
زياده حد القبول الى 6 في روم <#1163796853406580776>
زياده الرومات الصوتيه الى 2 بأسم كلانكم
العضويه برايم 
400k / month اشتراك شهري
المميزات:
جميع المميزات السابقه +
زياده حد القبول الى 12
زياده الرومات الصوتيه الى 4 تضهر للناس
زياده روم كتابي الى الحد الي `)

client.login(process.env.token)

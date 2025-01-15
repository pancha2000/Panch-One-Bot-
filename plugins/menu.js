const {readEnv} =require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "bot commands menu.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `👋💙*Hello ${pushname}*
> *DOWNLOAD COMMANDS*↕

${menu.download}

> *MAIN COMMANDS🌟*

${menu.main}

> *GROUP COMMANDS🗃️*

${menu.group}

> *OWNER COMMANDS🛜* 

${menu.owner}

> *CONVERT COMMANDS♻️*

${menu.convert}

> *SEARCH COMMANDS🌐*

${menu.search}

POWER BY Pancha 💚
`
await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/0aa53d084024368c3bf14.jpg"},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

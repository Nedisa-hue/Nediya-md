const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!Owner) return 
const {exec} = require("child_process")
reply("LODEING 🪢...")
reply("restarting📶©️...")
reply("*❖╭─────────────···▸*",
"> *TIME🏷* : 10 hours, 53 minutes, 21 seconds",
"> *RAM USE🧬🪢* : 103.21MB / 63276MB🚀",
"> NAME BOT©️: *🤴Nediya MD *",
"> *OWNER*🤴: *wa.me/94758784885*",
"> *CREATOR👨🏻‍🔧* : *🏷 MD ( Nediya wedasinga )*",
"> *VERSIONS🛡* :1.200.0v")",
reply("Nediya_md restarting Don 🗃🛡...") 
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})

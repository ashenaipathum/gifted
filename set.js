// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.caption = "*©𝟐𝟎𝟐𝟒 𝗦.𝗚.𝗣 𝗧𝗘𝗔𝗠*"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://api.giftedtech.my.id/api"; // DO NOT Change this...
global.session = "https://pair1.giftedtech.my.id"; // DO NOT Change this....
global.footer = "*➔𝗣𝗢𝗪𝗘𝗥𝗗 𝗕𝗬 𝗠𝗘𝗠𝗘 𝗣𝗔𝗥𝗔𝗗𝗜𝗦𝗘 𝗚𝗔𝗡𝗚🔥*"; // Input Yours custom...(Maintain font for Flow)
global.myName = process.env.API_KEY;
global.myDb = "https://giftedmd.giftedtech.my.id"; // DO NOT Change this...
global.ytdl = "https://ytdl.gifted.my.id";
global.pluginsdb = "https://cmds.giftedtech.my.id"; // DO NOT Change this...

 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Gifted~zjQzXAxa#KvHlh74slzzvjEkuiDCoGqd0K4ckhwKIIw6A69Ot28g", // Add sess Id here especially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJI: process.env.AUTO_LIKE_EMOJI || "🖤", //Input Yours custom...
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by 𝗦.𝗣.𝗚 𝗧𝗘𝗔𝗠 BOT🔥!", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "+94717943030", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝗦.𝗚.𝗣 𝗧𝗘𝗔𝗠💭", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝗦.𝗚.𝗣.𝗧𝗘𝗔𝗠🖤", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "𝗦.𝗚.𝗣 𝗧𝗘𝗔𝗠🔥", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
API_KEY: process.env.API_KEY || "gifted-md", // Replace with your unlimited api key
// ANTIDELETE: process.env.ANTIDELETE || "false", // Still under development
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false", // Value can be true/false
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 වද දෙන්නෙපා බං වැඩක ඉන්නෙ තේරුම් ගනින්. 📵 No Calls Allowed Dude!_*",
AUTO_REACT: process.env.AUTO_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://files.giftedtech.my.id/file/gifted-md.jpg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴅ ʙʏ ꜱ.ɢ.ᴘ ᴛᴇᴄɴɪᴄʟᴇ ᴛᴇᴀᴍ🔥",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "ᴛʀᴜᴇ",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...

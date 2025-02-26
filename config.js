const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
WG: process.env.ALIVE_IMG, || "https://files.catbox.moe/d4i0ld.jpg",
SG: process.env.ALIVE_MSG || "HELLOW I'AM NEDIYA MD BOT (HITHATA BEATS YT OWNER"
};

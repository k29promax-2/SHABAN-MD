const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0lLWGtmT01xTGE2alY3VzRnQnR4ZUVlY1ZtRmxzQnRqTXdGb0pkSnpWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHRwT2tkNThzeVpXcUdJUlEyTWhLWUtyZ2hSRnV6UFhOV1pKSzhCdUFDVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0T2s4YWNBY1FTKzI2NGw3anl0QzBrZCtFSFpRYnVGZndKQmxpQ1lWOUZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3WmJUajNpa0ZtVDZuV0V0MHVvTDV4OTV5WklPVzlDd2NSdEtuSCtXclhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNLZm1VVzk1RFJJenZ6a012TUZ2TTdPVFFvREIyNkRKVjBiV0psU0kzMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkswUVNJa0ZBWkFnSkhmTjF5UlVGd2NhbnNkOU81NHl3amRnYUx1WGRBQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0NmWnhTOXhYd2dFak1mU1FnczZwcGsvSHJkbDVhOENqSUVQcXlhMU9sYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK25NbjgxQlNwTEZncU9KTXgyWCtSM21GMnBoWGNoV3gyeFNIYlorcFJ3ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPYzZmeGVXMXFyNFNlMWxHNFVlRUhyTEllaDZ3ME9uSE5yQmp3NmJwVERackgwOEZkcW5VeFJUYmV1WjNCbDU2NStvUlVGdnN2K1ljUWcrZ0QzOUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJrMmZTZEhobjcxVXJURk4wTFZ0eHRoUmViRThwTHhLT2hxYVZmQ3lieCtFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc4NzM4Mjg1MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTJCM0FDNUJGN0E0OEMxMDQ3QjRCOUE5QTA1RjFBQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxMjUxNDc2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJEVjhZWFpONSIsIm1lIjp7ImlkIjoiMjYzNzg3MzgyODUyOjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImsyOXByb21heCIsImxpZCI6IjIxNzcxNzkzMjE5NjQ5OjIzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTStSNllnQ0VJMmg2c2NHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZDNKbUxjNW9nbTlYaWwwVzVGSk1idGFJL0dxRlV5b25LQ1YzTENycWFpYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN0Z2eE10QTJHcnVLQnBQZ2h1S2p3cWMyOTJwQ2RucCtZeG1ZK0cvNzVOTS9ra09ZQjZZQmV4aW45YW8rQWllQjVFaDBRaWNCcC9TeUIzNklPcFE5QkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImRXZzEwWjdWRitLRjBNb0duaEV5RHBIamVJb1RzMTFlV1FKb3JsT1hiQUh0SUF4eFE2SkxoWUpDK0dvcmRISGQ1Y3BxcG5uSkxkK2hYOVNEd3FBdUJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg3MzgyODUyOjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhkeVppM09hSUp2VjRwZEZ1UlNURzdXaVB4cWhWTXFKeWdsZHl3cTZtb24ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTI1MTQ3MywibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUc2byJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "true", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mʀ-Sʜᴀʙᴀɴ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923059395959",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

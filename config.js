const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email =""
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Id6UAR2wHzTGnX66qBaVBw";
global.website=process.env.GURL || "https://chat.whatsapp.com/Id6UAR2wHzTGnX66qBaVBw" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2ce9b5ad2d97fb6e76b38.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝗩 𝗜 𝗞 𝗥 𝗔 𝗡 𝗧 彡" 


global.devs = "923171677614" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923335354162";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/2ce9b5ad2d97fb6e76b38.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "true";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_49_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDc2LFxuICAgICAgICAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkxLFxuICAgICAgICA0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NixcbiAgICAgICAgMjQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMixcbiAgICAgICAgMjI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhWGduMGQveHVub3RUMnd4UUZaREY5L1l6ekpvcmloSnU5MTd1RE42ZDVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMzNTM1NDE2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDcxM0IxQTUzMTFFQjAyNUNCNTExMUUxNDY0NTUwRjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjc0OTYwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzM1MzU0MTYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNUEzNzI4RUU3MkIwNzA0QTY1QkVEN0NEODg3Q0Y2Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2NzQ5NjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMzUzNTQxNjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYzODZFQkY4QjVCMjVERDI3ODI4MEMzOUM2Q0IxMUNEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjY3NDk2MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMzNTM1NDE2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTc4RkY0ODZBRDY5MjFGNkQyMDQ5QTMyNjdBNkJFRjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjc0OTYzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFIaTVwYTUwU0VleGoxMkVGdWZsM2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTZmMWMwYzgtNmU3NS00ODhiLWJiZjMtN2I3NWVhOGQ4YmFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgNjAsXG4gICAgICA0NSxcbiAgICAgIDI0MCxcbiAgICAgIDk5LFxuICAgICAgMTY5LFxuICAgICAgMjQsXG4gICAgICAxNzQsXG4gICAgICAyMjIsXG4gICAgICAxMjUsXG4gICAgICAyMzgsXG4gICAgICAyMjEsXG4gICAgICAxMDQsXG4gICAgICAxOSxcbiAgICAgIDI5LFxuICAgICAgNDcsXG4gICAgICA4MyxcbiAgICAgIDE1OCxcbiAgICAgIDEwNixcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICAxNzEsXG4gICAgICAxNixcbiAgICAgIDE1NixcbiAgICAgIDEyNCxcbiAgICAgIDE0MSxcbiAgICAgIDQ2LFxuICAgICAgMTk3LFxuICAgICAgMTExLFxuICAgICAgNzksXG4gICAgICAyNTQsXG4gICAgICAxNDcsXG4gICAgICAxODUsXG4gICAgICAzMCxcbiAgICAgIDEwNixcbiAgICAgIDE5NixcbiAgICAgIDU2LFxuICAgICAgMTc2LFxuICAgICAgMTk4LFxuICAgICAgMjMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRZNVhIS1JMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMzUzNTQxNjI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdl6kg8J2XnCDwnZeeIPCdl6Ug8J2XlCDwnZehIPCdl6cg5b2hXCIsXG4gICAgXCJsaWRcIjogXCIzMzIzMDY2NTMyNjYyOToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xqKzhMZ0hFSXZldDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibFdIT05EdHp5dE9RNTMzaEN1ei9kcVJMTnp5MFJadHAya1FmVEZIODBqcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2R3JUYjArcU5XZnNpSlBNWG5KVGlMT3hFV2tVU2U2NnNXVFdpVlFhTS82R3JZM1pSRXgybUJNZGZxM0JmVlJTbkxYcWQ2dDRWYWpSK3lHNFIvOUtBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6OXl1TkVEb01jS24zT3BnNnFRUTB0d0M2a1hRZ1hzdkhsUGJKcmdhd3NrT1NESkZhaGx0SzZpdVRsdzVza0pQMHVOV0NXT2RMN0VlVnpPNElTcnRpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMzUzNTQxNjI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjc0OTU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2lBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDaUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0OEVJQ0RkeW9rcUNZKzFrL3dsRmh4VGZkbXlXMHBrMkVuUXZwMWtFbXNnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5OTgzMzk4OTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjY3NDk1ODY3N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝗩 𝗜 𝗞 𝗥 𝗔 𝗡 𝗧 彡",
  packname: process.env.PACK_NAME || "💐",
  botname : process.env.BOT_NAME  || "𝗩 𝗜 𝗞 𝗥 𝗔 𝗡 𝗧 彡",
  ownername:process.env.OWNER_NAME|| "𝗩 𝗜 𝗞 𝗥 𝗔 𝗡 𝗧 彡",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

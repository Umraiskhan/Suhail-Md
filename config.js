const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Id6UAR2wHzTGnX66qBaVBw";
global.website=process.env.GURL || "https://chat.whatsapp.com/Id6UAR2wHzTGnX66qBaVBw" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/cdc51e54b7bc693b79e65.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923171677614" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923171677614";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/cdc51e54b7bc693b79e65.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_10_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg5LFxuICAgICAgICA4LFxuICAgICAgICA2NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwLFxuICAgICAgICA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNixcbiAgICAgICAgODAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyLFxuICAgICAgICA0NixcbiAgICAgICAgMTU1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzLFxuICAgICAgICA1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDkwLFxuICAgICAgICA3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDU3LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgwLFxuICAgICAgICA3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1ZlB5cEJNZitUVy90SHhBbGxsS1kzcTdkSFFvV3RIYXJ5L2creExENXljPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ4NDU5NDM1MTAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QkJDQzE2N0M5NDg5QUM1M0I5MDM1OUNBRjg5NzcyQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1MDM0NDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0ODQ1OTQzNTEwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkY4OTdEQzExOTVGQjdERDFDMEYzNkU4QTVEMDk5OUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTAzNDQ0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDg0NTk0MzUxMDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgzOTgzNEFFNjUzNjBFMDMyQTc3RkY0ODgzNzQ3QjgyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjUwMzQ0OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDeHc1OTdhOFNwS2JkYkJEMXduaWlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE3ZTEwZDcyLWYyNDEtNDkxZC1hY2MxLWZkNmRmYTAzNmI3NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjUsXG4gICAgICA3NSxcbiAgICAgIDg1LFxuICAgICAgMTk1LFxuICAgICAgMTkwLFxuICAgICAgMjA2LFxuICAgICAgMTgyLFxuICAgICAgMjQ0LFxuICAgICAgMjQxLFxuICAgICAgMjM1LFxuICAgICAgOTQsXG4gICAgICAyMSxcbiAgICAgIDQsXG4gICAgICAxNzcsXG4gICAgICAyMSxcbiAgICAgIDM4LFxuICAgICAgMTE5LFxuICAgICAgNDIsXG4gICAgICAxMDEsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICAwLFxuICAgICAgNDUsXG4gICAgICA3NyxcbiAgICAgIDMyLFxuICAgICAgMTc2LFxuICAgICAgMTE4LFxuICAgICAgMjQzLFxuICAgICAgMTE2LFxuICAgICAgMTQ2LFxuICAgICAgMTkzLFxuICAgICAgNTIsXG4gICAgICAxNTAsXG4gICAgICAxODMsXG4gICAgICAzMSxcbiAgICAgIDc5LFxuICAgICAgMjE2LFxuICAgICAgMTcsXG4gICAgICAxOTUsXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA3Uk40TUJQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0ODQ1OTQzNTEwMToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQyBSIEUgRSBQIFlcIixcbiAgICBcImxpZFwiOiBcIjQ3ODY3OTMwNjM2NTE3OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjN4K01JSEVJNmlyYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlTGloZzlESDFNajNhTG9uV2sxQjkzcVd5OTlsS1JxK0hUcUt4WElBZFc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdIZndscVd3Ly84OGlPWkJMK1JybVRGcTFWcHJZL1ZKM0NOUXQ2UERWQmt3U3IxWnBqQ0JDR1FldXdNRk5FdlJiVjhPd3BmNGNnRVdHUm1pdWJPM0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdmYnRtdHdaZjZXZFNmSVgveFNWWW1PVDBjWlhZZUhncGVKNUprUVhrMGQ5WkZ6ZkhTU0lhdTNXbVJzU3RqS0JEQ1hITnVBMmZiRnpiQU9WVjExMGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ4NDU5NDM1MTAxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUwMzQ0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUE2SlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTZKLmpzb24iOiAie1wia2V5RGF0YVwiOlwieURXYWhPRmhST1BOS0xxc1Z5bTdKWnRWYzBSREJXeHk4cStiY3BIeEZHVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDE5NDQwNzk3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI1MDM0NDM4OTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝗢𝗠𝗔𝗥 ᙭ 𝗔𝗭𝗥𝗢𝗦",
  packname: process.env.PACK_NAME || "𝗢𝗠𝗔𝗥 ᙭ 𝗔𝗭𝗥𝗢𝗦",
  botname : process.env.BOT_NAME  || "𝗢𝗠𝗔𝗥 ᙭ 𝗔𝗭𝗥𝗢𝗦",
  ownername:process.env.OWNER_NAME|| "𝗢𝗠𝗔𝗥 ᙭ 𝗔𝗭𝗥𝗢𝗦",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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

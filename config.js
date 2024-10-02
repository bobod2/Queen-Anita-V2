//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "233558111386";
global.owner = process.env.OWNER_NUMBER || "233558111386";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0xuTXU5c3JCN00yTGpER1VqL3BKUytrWFVyajRDQnl1dnN3a1VrL21rST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMERRZEdVb2JQV2pEK05VUW5YZVhOOHNnVGJkZUlFbE5JOFd2WmpwbXNqST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TTZtdDNxaFhRaEtEUFJoTTRKZlJ3QzBHTEZsZWJ2d2NoQ21EZXUzSUZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDZG5WdWpLQUZMZllzaFZlcmNkSVdMZmswd01sK2t5VzZwN1FRVkdMcmlvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGNWRzQ0hqblNabWR0MkhhencrQ29xYWY0VXJmWWV1R2UzNmYrS0FMbHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJvazVkZG5ZY0VnbEpLNDZBcDI2Mm9rbG8xbDFwRHhMZk1sSmNSZGduVnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0gzWTlFUy95SFZJaFBSSGlOZzByS05ucjZhWjhFbzBSVFY4RWw4eUFsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGFzc054ak5Vd1pyaFRTM2JGT29uamx0Y0VUdjBsTUI4VkJtQXdMVmswbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9FRmJRaHpCbzE4dmppZkUvVlJvdlQvb05Ja2hRMFd2RlFGb1d1eWNVR3RWeWFnSCs2WStMU2pKblVvbVBhbmZvU0ZzNFlOdDFXWVVXY2IvNzY5TWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJZNExBZTV2UDViaHNybTFpNkZjSFlyZ0pxbzZzTFFWdnRLSFZkK2liOStBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6WXg1OU9jUVN1MjQ5V1pJZlNndGFRIiwicGhvbmVJZCI6IjFmOTAzZWNjLTM2MjMtNGU4Ni1hMTQ5LWUxYTk0ZTZiZjAxZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2cVFSVUVaaDJJb0RicTFuTi9XZklSMXFFSW89In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRNdUF6ZFNMZ3JvczJBTVJKKzhNMDIvQVZtcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BLVHZPWURFTXZ1N2JjR0dCY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkVqdkFXdGZ6OGJQWVBIRXJHd0ZNVVJJc1JRb1JuOEtSK0h3b05hSG1GeEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVHdDdrbXRpc2ZGb2xaTjZOYThES0czNkFsdHlTdmRTcFRNQ0xCcTgxRWUvaGo0RWxTU1VJZURHMEE5aFlTUy95MmQyR1dhUTZKREpJTXI5d1N3NEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDaVBZYXBDZ2tjVkkvNGpMcENFVWY4K3c4aTJtQUM0Q3lVSllydzVLMlpMbEYvTlJMTzJiMG9aNVRvWUQ2V0o4WWsvSVJ3c2RVUFh6MVRkcHZVWWpnZz09In0sIm1lIjp7ImlkIjoiMjMzNTU4MTExMzg2Ojg2QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU1ODExMTM4Njo4NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSSTd3RnJYOC9HejJEeHhLeHNCVEZFU0xFVUtFWi9Da2ZoOEtEV2g1aGNTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3NzU2MTIwfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "LAW",
  packname: process.env.PACK_NAME || "JUNION",
  botname: process.env.BOT_NAME || "LAWSHAMBLES MD",
  ownername: process.env.OWNER_NAME || "KELVIN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

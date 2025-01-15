const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XBpCmJID#pBdSw81h1PmnKcihGrZo7O2zuhxtd1noCHw9FZq9u5Q",
MONGODB: process.env.MONGODB || "mongodb+srv://panchareal486:2006.Shehan@cluster0w.orvet.mongodb.net/",
};

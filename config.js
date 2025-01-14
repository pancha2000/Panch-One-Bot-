const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3zAiXbDR#ZGqyfjNslSy6D1OATudvnDsgi5CMVHMO3KieA8NNSKk",
MONGODB: process.env.MONGODB || "mongodb+srv://panchareal486:2006.Shehan@cluster0w.orvet.mongodb.net/",
};

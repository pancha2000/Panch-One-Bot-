const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3zAiXbDR#ZGqyfjNslSy6D1OATudvnDsgi5CMVHMO3KieA8NNSKk",
ALIVE_IMG: process.env.ALIVE_IMG || "ALIVE_IMG URL",
ALIVE_MSG: process.env.ALIVE_MSG || "ALIVE_MSG",
};

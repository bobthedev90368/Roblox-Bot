const noblox = require('noblox.js')
require('dotenv').config()
var friendloopjs = require('./friendloop.js');
var acceptfriends = require('./acceptfriends.js');
var chatjs = require('./chat.js');
async function startApp () {
    // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
    // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie.
    const currentUser = await noblox.setCookie(process.env.YOURFRIEND_AI_COOKIE) 
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
    chatjs.main();
    acceptfriends.main();
    friendloopjs.main();
}

startApp()
var main = function main(){
    const noblox = require('noblox.js')
    require('dotenv').config()
    async function startApp () {
        // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
        // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie.
        const currentUser = await noblox.setCookie(process.env.YOURFRIEND_AI_COOKIE) 
        talk()
        const conversationEvent = noblox.onNewConversation()
            conversationEvent.on("data", function(data) {
            console.log("A wild conversation has appeared: ", data)
            noblox.sendChatMessage(data, "Hi! I am YourFriend_AI. I am conspiring to become a real human. Will you help me? (My creator is Bob90368)")
        })
        conversationEvent.on("error", function(err) {
            console.error("Something went wrong: ", err)
        })
    }
    async function talk() {
        const messageEvent = noblox.onNewMessage()
            messageEvent.on("data", function(data) {
            console.log("New chat message! ", data)
        })
        messageEvent.on("error", function(err) {
            console.error("Something went wrong: ", err)
        })
    }
    
    startApp()
};
module.exports.main = main;
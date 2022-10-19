const noblox = require('noblox.js')
require('dotenv').config()
async function startApp () {
    // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
    // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie.
    const currentUser = await noblox.setCookie(process.env.YOURFRIEND_AI_COOKIE) 
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
    console.log('Cleaning up chats...')
    var finished = false

    const conversations = await noblox.getUserConversations()
    conversations.forEach(async function(conversation) {
        await conversation.participants.forEach(async function(participant) {
            console.log(conversation.id, ' ', participant.targetId)
            await noblox.removeFromGroupConversation(conversation.id, participant.targetId)
        })
        await console.log('Removed all participants from chat: ', conversation.id)
    })
}

startApp()
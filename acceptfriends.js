var main = function main(){
    const noblox = require('noblox.js')
    require('dotenv').config()
    
    async function startApp () {
        // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
        // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie.
        const currentUser = await noblox.setCookie(process.env.YOURFRIEND_AI_COOKIE)
        var finished = false
        while(!finished){
            let friendRequests = await noblox.getFriendRequests({sortOrder: "Desc", limit: 100})
            if(friendRequests.data.length == 0){
                finished = true
            } else {
                //console.log(friendRequests.data[0].id)
                await makechat(friendRequests.data[0].id)
            }
        }
    }
    async function makechat(id) {
        await noblox.acceptFriendRequest(id)
        console.log("Accepted friend request from user: ", id)
        await noblox.startGroupConversation([id, id], "Your Friend AI")
        console.log("Started group chat with user: ", id)
        await noblox.removeFriend(id)
        console.log("Removed friend: ", id)
    }
    startApp()
    };
    module.exports.main = main;
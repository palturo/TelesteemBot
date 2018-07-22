Create a Telesteem.me Bot (Node.js)

Telesteem is a Messenger based on the STEEM-Blockchain.

Bot.js is an example how the Bot could look like.


//Getting Updates
telesteem.getUpdates(USERNAME,ACTIVE-KEY,Callback)

Callback(Result) = Array of objects;

Callback(Result).user = Username of Sender
Callback(Result).message = Message of the user
Callback(Result).json = JSON

//Send Message

telesteem.sendMessage(USERNAME,ACTIVE-KEY,MESSAGE,TO-USER,callback)

callback(Result) == "success" (It was successfull)
callback(Result) == "error" (Error)


#Required#
Node.js
Steemit Account for Bot
Active Key of the Bot

Donation
BTC: 19t36Ci1DYCJi7oDpXaWTuHNqSPtQFHx78
BCH: qp89sw5eyxv8p8jef2pzhrvmzjx264304y23ywd8mv
ETH: 0x257CA4E50EeE117a9d956705D94bb3B4B68413bF
LTC: LaMFBahZSdDP9LBsLiEN5U5i3to3BwPqL3

http://telesteem.me

var telesteem = require('./telesteem/telesteem.js');


var bot = "_BotName_";
var prv = "_ActiveKey_";


function update(){
	
	//Check Updates
	telesteem.getUpdates(bot,prv,function(err,res){
		
		//check if res valid
		if(res[0]){
			//for each result
			res.forEach(function(result){
				
				//command or Message
				if(result.message.includes("/info")){
					telesteem.sendMessage(bot,prv,"Welcome to the "+bot+" Service!",result.user,function(err,reso){
						console.log(err,reso);
					});
				}
				
			});
			
		}

	});

}

update();


setInterval(update, 6000);
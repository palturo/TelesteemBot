var request = require('request');

var oldRequests = new Array();
var newRequests = new Array();

function sendMessage(bot,prv,msg,to,callback)
{
	if(bot && prv && msg && to){
		request.post(
		'http://134.255.252.171:7777/api/sendMessage?user='+bot+'&prv='+prv+'&msg='+msg+"&to="+to,
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
				callback("",body);
			}
		}
	);
	}else{
		callback("error","");
	}

}

function getUpdates(bot,prv,callback)
{
	newRequests = new Array();
	if(bot && prv){
		request.post(
		'http://134.255.252.171:7777/api/getUpdates?user='+bot+"&prv="+prv,
		function (error, response, body) {
		
			JSON.parse(body).forEach(function(tx){
				
				if(!oldRequests.includes(tx.created)){
					newRequests.push(tx);
					oldRequests.push(tx.created);
				}
				
			});
			
			callback("",newRequests);
			
		}
	);
	}else{
		callback("error","");
	}

}




exports.sendMessage = sendMessage;
exports.getUpdates = getUpdates;
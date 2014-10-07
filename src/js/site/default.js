$( function() {
	
	//on share
	$('#shareBtn').click(function(){
		$('.share-error').slideUp();
		var ops = $('input[type="checkbox"]:checked');
		var opval = [];
		if (ops.length) {
			$.each(ops, function(i,v){
				opval.push ( $(v).val() );
			})
			postToFeed(opval);
		} else {
			$('.share-error').slideDown();
		}
		return false;
	})
	
	
})  

var appId = '430705603634401';


function postToFeed(data) {
 var obj = {
   method: 'feed',
   name: 'Plan B',
   picture: 'http://whatsyourplanb.net.au/images/share.jpg',
   caption: 'RBT means you need a Plan B',
   link: 'http://whatsyourplanb.net.au/',
   description: 'My Plan B - \n'+ data.join(' ')
 };

 function callback(response) {
   log(response != null);
 }

 FB.ui(obj, callback);
}


function log(message){
   if (window.console) {
     console.log(message);
   }
}
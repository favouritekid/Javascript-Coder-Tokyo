var i = 0;
var interval = setInterval(function () {
	i++;
	console.log(i);
	if(i===5){
		clearInterval(interval);
	}
},1000);

//viết một chương trình đếm từ 1 đến 10 
function countFrom(a,b){
	var promise= new Promise(function(resolve,reject){
		var interval = setInterval(function(){
			console.log(a)
			a++;
			
			if(a===b){
				clearInterval(interval);
				resolve();
			}
		},1000);
	});
	return promise;
}

countFrom(1,10).then(function(){
	console.log('DONE');
})
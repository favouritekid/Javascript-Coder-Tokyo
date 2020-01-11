		/*var i = 0;
		var interval = setInterval(function () {
			i++;
			console.log(i);
			if(i===5){
				clearInterval(interval);
			}
		},1000);
*/
//viết một chương trình đếm từ 1 đến 10 
		/*function countFrom(a,b){
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
		})*/


/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
/*		function countDown(x) {
			var interval = setInterval(()=>{
				console.log(x);
				x--;
				if(x===-1){
					clearInterval(interval);
				}
			},1000);
		}

		countDown(5);*/


/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
		function countDown(x) {
			return new Promise(function(resolve,reject){
				var interval = setInterval(()=>{
					console.log(x);
					x--;
					if(x===-1){
						clearInterval(interval);
						resolve();
					}
				},1000);
			});
		}

		function sayHappyNewYear() {
		  console.log('Happy new year');
		}

		countDown(5).then(sayHappyNewYear);
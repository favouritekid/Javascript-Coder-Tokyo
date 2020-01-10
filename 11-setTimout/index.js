/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms
 */
		/* function doAfter (func,time){
		 	setTimeout(func,time);
		 }
		 function printEventNumber(){
		 	for(let i =0;i<10;i++){
		 		if(i%2 ===0){
		 			console.log(i);
		 		}
		 	}
		 }
		 doAfter(printEventNumber,1000);*/

 /**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms VÀ trả về 1 promise để có thể gọi như sau
 */
function doAfter(func,time) {
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			resolve(func());
		},time);
	});
}

function sayHello() {
  	console.log('Hello');
}

function sayGoodbye() {
  console.log('Goodbye');
}

doAfter(sayHello, 5000).then(sayGoodbye);
// Expect: 
// Đợi 1s
// Hello
// Goodbye


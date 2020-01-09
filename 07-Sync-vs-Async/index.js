/**
 * Sử dụng module `request` (https://www.npmjs.com/package/request) để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
 * https://randomuser.me/api/
 * 
 * Sử dụng console.time và console.timeEnd để hiển thị ra thời gian tải link. Tìm hiểu về 2 hàm này tại: https://alligator.io/js/console-time-timeend/
 * hoặc google 'console.time'
 */
/*var request = require('request');
var url = 'https://randomuser.me/api/';
console.time("Time this");
function getData() { 
	return request(url, function(err, response, body) { console.log(response.body); 
})}
getData();
console.timeEnd("Time this");*/



/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */

/*{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}*/
var axios = require('axios');
var arr = ['https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/2'];
for(let i of arr){
	axios.get(i)
	.then(response => {
	console.log(response.data);
	})
	.catch(error => {
	console.log(error);
	});
}

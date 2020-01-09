/**
*Đọc file tuần tự với promise 
*/
/*var fs = require('fs');

function readFilePromise(path){
	return new Promise(function (resolve, reject) {
		fs.readFile(path,'utf8',function(err,data){
			if(err){
				reject(err);
			}else {
				resolve(data);
			}
		});
	});
}
readFilePromise('song.json')
	.then(function (object) {
		console.log(object);
		console.log("Done:");
		return readFilePromise('sport.json');
	})
	.then(function (object) {
		console.log(object);
		console.log("Done:");
	})
	.catch(function(err){
		console.log(err);
	});*/

/**
 * Viết function `load` nhận vào 1 tham số là 1 đường link dạng string, trả về 1 promise sao cho khi gọi:
 * load('some url').then(function(body) {
 *   console.log('Done', body);
 * });
 * thì sẽ hiển thị ra màn hình 'Done' kèm theo nội dung đường link đã truyền vào.
 * Sau 30' không làm được thì có thể lên Slack hỏi
 */
/* var request = require('request');
 function loadUrl (url) {
 	return new Promise(function(resolve,reject){
 		request(url,function(err,response, body){
 			if(err){
 				reject(err);
 			} else {
 				resolve(response);
 			}
 		})
 	});
 }
 var url1='https://jsonplaceholder.typicode.com/todos/1';
 var url2='https://jsonplaceholder.typicode.com/todos/2'
 loadUrl(url1)
	.then(function (object) {
		console.log(object.body);
		console.log("Done:");
		return loadUrl(url2);
	})
	.then(function (object) {
		console.log(object.body);
		console.log("Done:");
	})
	.catch(function(err){
		console.log(err);
	});*/

/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */
 var axios = require('axios');
 function displayUrl (url) {
 	return new Promise(function(resolve,reject){
 		axios.get(url)
 		.then(function(response){
		console.log(response.data);
		console.log('Done')
		})
		.catch(function (error) {
			console.log(error);
		});
 	});
 }

 Promise.all([
 	displayUrl('https://jsonplaceholder.typicode.com/todos/1'),
	displayUrl('https://jsonplaceholder.typicode.com/todos/2'),
	displayUrl('https://jsonplaceholder.typicode.com/todos/3')
	]);


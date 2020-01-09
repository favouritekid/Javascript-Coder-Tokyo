/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
 var co = require('co');
 var axios = require('axios');
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];
//Function read url
function readUrl(url){
	return new Promise(function(reject,resolve){
		axios.get(url)
			.then(function(response){
				console.log(response.data);
			})
			.catch(function(err){
				console.log(err);
			})
	});
}
//Promise-all
//Promise.all(urls.map((i)=> readUrl(i)));

// Using Co
// Cách 1: Sử dụng vòng lặp for
/*co(function *(){
	var arr=[];
	for(let url of urls){
		arr.push(readUrl(url));
	}
	return arr;
}).then(function(result){
	console.log(result);
}).catch(function(err){
	console.log(err);
});*/
// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise
/*co(function *(){
	var result = yield urls.map((url)=>{
		return readUrl(url);
	});
}).then(function(result){
	console.log(result);
}).catch(function(err){
	console.log(err);
});*/

var read = co.wrap(function*(urls){
	return yield urls.map((url)=>{
		return readUrl(url);
	});
});
read(urls)
	.then(function(result){
		console.log(result);
	}).catch(function(err){
		console.log(err);
	});
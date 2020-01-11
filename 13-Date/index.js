var axios = require('axios');
var co = require('co');
var moment = require('moment');
//giá trị thời gian được tính kể từ ngày 1/1/1970 lúc 0 giờ 0 phút theo timezone +0
/*var now = new Date();
console.log(now.getTime());
var myBirthday = new Date(1988,3,10);
console.log(myBirthday.getTime());
var dateChoose = new Date(121545484845);
console.log(dateChoose);*/


/*var end, start;

start = new Date();
for (var i = 0; i < 5000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');*/


// Đếm thời gian chương trình chạy hết bao nhiêu milisecond 
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];
//Cách 1 sử dụng promise bình thường, đọc tuần tự
/*		var start = new Date();*/

function readUrl(url){
	return new Promise(function(resolve,reject){
		axios.get(url)
				.then(function(response){
					resolve(response.data);
				}).catch(function(err){
					console.log(err);
				});
	});
}

/*		readUrl('https://jsonplaceholder.typicode.com/todos/1')
			.then(readUrl('https://jsonplaceholder.typicode.com/todos/2'))
				.then(readUrl('https://jsonplaceholder.typicode.com/todos/3'))
					.then(readUrl('https://jsonplaceholder.typicode.com/todos/4'))
						.then(readUrl('https://jsonplaceholder.typicode.com/todos/5'))

		var end = new Date();
		console.log('Chương trình chạy tốn:'+(end.getTime()-start.getTime())+' mili giây');*/

//Cách 2: sử dụng promise all
/*		Promise.all([
			readUrl('https://jsonplaceholder.typicode.com/todos/1'),
			readUrl('https://jsonplaceholder.typicode.com/todos/2'),
			readUrl('https://jsonplaceholder.typicode.com/todos/3'),
			readUrl('https://jsonplaceholder.typicode.com/todos/4'),
			readUrl('https://jsonplaceholder.typicode.com/todos/5')
			]).then(function(values){
				console.log(values);
			});*/

//hoặc map promise
/*		Promise.all(urls.map((url)=>readUrl(url)))
			.then((values)=>{
				console.log(values);
			});*/

//Cách 3: sử dụng module co

/*		co(function* () {
			var result1 = yield readUrl('https://jsonplaceholder.typicode.com/todos/1');
			var result2 = yield	readUrl('https://jsonplaceholder.typicode.com/todos/2');
			var result3 = yield readUrl('https://jsonplaceholder.typicode.com/todos/3');
			var result4 = yield	readUrl('https://jsonplaceholder.typicode.com/todos/4');
			var result5 = yield	readUrl('https://jsonplaceholder.typicode.com/todos/5');
			return [result1,result2,result3,result4,result5];
			}).then(function(values){
				console.log(values);
		});*/
//hoặc sử dụng co map 1 array yields
		/*co(function* (){
			return yield urls.map((url)=>{return readUrl(url)});
		}).then((values)=>{
			console.log(values);
		}); */



/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(dateString) {
  var date = new Date(dateString);
  if(date.getDay()===0 || date.getDay()===6){
  	return true;
  }
  return false;
}
/*var now = new Date();
console.log(now.getMonth());
console.log(isWeekend(now));*/


/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
 
var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');
function diff(fromDate, toDate) {
  return (toDate.getTime()- fromDate.getTime())/(1*24*60*60*1000);
}

/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

var date = new Date("06/10/2019")

function subtractDays(date, n) {
  var result =  date.getTime() - n*24*60*60*1000;
  console.log(result);
}
subtractDays(date,10);

//chuyen tu milisecond sang dd/mm/yy
var date = new Date(1304921325178.3193); // Date 2011-05-09T06:08:45.178Z
var year = date.getFullYear();

var month = ("0" + (date.getMonth() + 1));
console.log(month);
var day = ("0" + date.getDate());
    
console.log(`${year}-${month}-${day}`); // 2011-05-09

/**
 * Tính số ms chênh lệch giữa date b và date a
 */

function diffMs(a, b) {
//string to date
var dateA = new Date(a);
var dateB = new Date(b);
return dateA - dateB;
}
diffMs("02/10/2019", "10/10/2019");
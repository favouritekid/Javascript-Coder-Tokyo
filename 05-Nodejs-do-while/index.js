/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
  var total = 0;
  var i = 0;
  while(i<x)
  {
  	if(i%2!=0){total+=i;}
  	i++;
  }
  return total;
}
//console.log(sum(10));


/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */

/* ước của 3 là 1 3
 ước ccủa 5 là 1 5 
 ước số chung của 3 và 5 là 1 và la ước số chung lớn nhất 

 bội số của 3 trong khoảng từ 0 đến 1000 là 0 3 6 9 12 15 ... 999 
 bội số của 5 trong khoảng từ 0 đến 1000 là 0 5 10 15 20 25 ... 1000
 bội số chung lớn nhất của 3 và 5 l*/
/*var max = 0;
for(var i = 1; i<=1000; i ++){
	if(i%3 ===0 && i%5===0 && max < i){
		max = i;
	}
}*/
//console.log(max);
function bscln(){
	var max = 0;
	var i =1;
	while(i<=1000){
		if(i%3===0 && i%5===0 && max < i){
			max = i;
		}
		i++;
	}
	return max;
}
console.log(bscln());

/**
 * Thử chạy code sau
 */
var secretPassword = 'coders.tokyo';
var readline = require('readline-sync');

var result = readline.question('Nhập vào mật khẩu');

/**
 * Viết đoạn chương trình yêu cầu người dùng nhập vào mật khẩu (để login vô máy tính chẳng hạn), nếu người dùng nhập sai, hiển thị ra "Wrong password", nhập đúng thì hiển thị ra "Welcome!"
 */
switch(result){
  case 'coders.tokyo':
    console.log('Welcome');
    break;
  default:
    console.log('Wrong password');
    break;
}
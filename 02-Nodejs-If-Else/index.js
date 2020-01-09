
//Bài toán đếm tiền theo điều kiện nhất
//CÁCH 1:
/*function countCoin (coins){
	var total = 0;
	for(var i; i<coins.length;i++){
		total +=coins[i].value;
	}
	return total;
}*/

//CÁCH 2:
/*function countCoin(coins){
	var total = 0;
	for (coin of coins) {
		if (!coin.fake) {
			total +=coin.value;
		} else {console.log('Phat hien tien gia: ' + coin.value)};		
	}
	return total;
}*/

//CÁCH 3:
/*function countCoin(coins){
	return coins.reduce((total,coin)=>{
		return (coin.fake !== true) ? total+coin.value : total;
	},0);
}*/

//CÁCH 4:
function countCoin(coins){
	return coins.filter((coin)=>coin.fake !== true)
				.reduce((prev,curr)=>{return prev + curr.value},0);
}
var coins = [
	{value:10000},
	{value:10000},
	{value:500000},
	{value:50000,fake:true},
	{value:100000},
	{value:200000}
];
//console.log(countCoin(coins));

/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
  var max = arr[0];
  for (var i = 1; i<arr.length; i++){  	
  	if(max < arr[i]){
  		max = arr[i];
  	}
  }
  return max;
}
var arr = [1,2,35,2,4,41,6,11,0,20,40,60];
//console.log(max(arr));

/**
 * Viết hàm isTruthy nhận vào 1 giá trị x, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */

function isTruthy(x) {
  // your code here!
  if(x===false) return false;
	  if(typeof x === 'number' && (x===0 || x===NaN)) return false;
		  if(typeof x === 'string' && x==='') return false;
			  if(typeof x === 'object' && x.length===0) return false;
				  if(x===undefined) return false;
				  		return true;
	}

/**
 * Viết hàm xếp hạng theo điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
  if(0 <= score&& score <5) console.log('C');
  	else if(5 <= score&& score <7) console.log('B');
  		else if(7 <= score&& score <=10) console.log('A');
  			else console.log('Vui long nhap trong khoang tu 0 den 10');
}
grade(0);
grade(1);
grade(2);
grade(3);
grade(4);
grade(5);
grade(6);
grade(7);
grade(8);
grade(9);
grade(10);
grade(100);



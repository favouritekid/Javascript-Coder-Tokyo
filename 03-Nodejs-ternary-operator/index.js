
// Chuyển đổi đoạn code dưới đây dùng ternary operator mà không làm thay đổi logic
/**
 * if (age > 16) {
 *  canDrive = true;
 * } else {
 *  canDrive = false;
 * }
 * 
 * @param {number} age;
 * @return {boolean} canDrive;
 */

function checkCanDrive(age) { 
  return (age > 16) ? true : false;
}
console.log(checkCanDrive(16));
console.log(checkCanDrive(10));
console.log(checkCanDrive(19));

// Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
function doSomething(a) {
  var b;
  if (a > 0) {
    b = 1;
  } else if (a < 0) {
    b = 2;
  } else {
    b = 3;
  }
  return b;
}

function doSomethingTernary(a) {
	var b;
	return (a>0)? b=1:((a<0)?b=2:b=3);
}
console.log(doSomethingTernary(-123));
console.log(doSomethingTernary(123));
console.log(doSomethingTernary(0));

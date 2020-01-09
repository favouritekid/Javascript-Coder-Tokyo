/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
  return arr.map((i)=>{
  	switch (i) {
  		case 'A':
  		case 'a':
  			return 1;
  			break;
  		case 'B':
  		case 'b':
  			return 2;
  			break;
  		default:
  			return 0;
  			break;
  	}
  });
}
var a = transform(['A', 'b', 'a', 'B', 'd']);
//console.log(a);


/*
Tạo menu người dùng,cho phep ngươi dùng nhập vao:
1. Xem danh sách sinh viên
2. Nhập sinh viên
3. Lưu và thoát
*/
var readlineSync = require('readline-sync');
var fs = require('fs');
function Students (name,age){
	this.name = name;
	this.age = age;
}
var stringListStudents = fs.readFileSync('./listStudents.json','utf8');
var objectListStudents = JSON.parse(stringListStudents);

console.log('Vui lòng chọn 1 trong các menu dưới đây:');
console.log('1. Xem danh sách sinh viên\n2. Nhập sinh viên\n3. Lưu và thoát');

var choose = parseInt(readlineSync.question('Vui long chọn:'));

switch (choose) {
	case 1:
		console.log('Danh sách sinh viên:');
		console.log(stringListStudents);
		break;
	case 2:
		var name = readlineSync.question('Nhập họ tên sinh viên:');
		var age = parseInt(readlineSync.question('Nhập tuổi sinh viên:'));
		var student = new Students(name,age);
		objectListStudents.push(student);
		console.log(objectListStudents);
		stringListStudents = JSON.stringify(objectListStudents);
		fs.writeFileSync('./listStudents.json',stringListStudents);
		break;

	case 3:
		stringListStudents = JSON.stringify(objectListStudents);
		fs.writeFileSync('./listStudents.json',stringListStudents);
		break;
	default:
		console.log('Vui lòng chọn theo menu');
		break;
}

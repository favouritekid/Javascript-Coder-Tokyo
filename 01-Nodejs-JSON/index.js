/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */
 //require fs built-in nodejs
var fs = require('fs');
//read file data.json
var string = fs.readFileSync('./data.json','utf8');
//convert to object
var object = JSON.parse(string);
console.log(object.name);
//add property members to object
object.members = ['Pham Thai Ha','student',19];
console.log(object);
//convert to string
var string2 = JSON.stringify(object);
//write file fs.writeFileSync(file, data[, options])
fs.writeFileSync('./data.json',string2);
/**
  JSON được viết tắt của JavaScript Object Notation. JSON là một cú pháp để lưu trữ và trao đổi dữ liệu. JSON là văn bản, được viết bằng ký hiệu đối tượng JavaScript.
Trao đổi dữ liệu

Khi trao đổi dữ liệu giữa trình duyệt và máy chủ, dữ liệu chỉ có thể là văn bản. JSON là văn bản và bạn có thể chuyển đổi bất kỳ đối tượng JavaScript nào thành JSON và gửi JSON đến máy chủ. Ngược lại, bạn cũng có thể chuyển đổi bất kỳ JSON nào nhận được từ máy chủ sang các đối tượng JavaScript.

Bằng cách này, chúng ta có thể làm việc với các dữ liệu như các đối tượng JavaScript, mà không cần phân tích cú pháp và dịch.
Dữ liệu đang được gửi

Nếu bạn có dữ liệu được lưu trữ trong một đối tượng JavaScript, bạn có thể chuyển đổi đối tượng thành JSON và gửi nó đến máy chủ:

    var myObj = { "name":"John", "age":31, "city":"New York" };
    var myJSON = JSON.stringify(myObj);
    window.location = "demo_json.php?x=" + myJSON;

Nhận dữ liệu

Nếu bạn nhận dữ liệu ở định dạng JSON, bạn có thể chuyển đổi nó thành một đối tượng JavaScript:

    var myJSON = '{ "name":"John", "age":31, "city":"New York" }';
    var myObj = JSON.parse(myJSON);
    document.getElementById("demo").innerHTML = myObj.name;
  `
 */
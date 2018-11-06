var str  = "Hello PHP06";
var str2 = 'Hello 18PHP06';
var a = 5;
console.log(str);
console.log(str2);
console.log(a);
console.log(typeof str);
console.log(typeof str2);
console.log(typeof a);
var str3 = '';
str3 = str + str2;
console.log(str3);
console.log(typeof str3);

console.log(str.length);

document.getElementById('demo1').innerHTML = str;

var classDemo = document.getElementsByClassName('demo1');
classDemo[1].innerHTML = str3;


console.log(classDemo[0]);
// Kiem tra chu 'o' co trong string 1 (str) khong?
// Neu co thi tra ve vi tri cua ky tu
// Neu khong tra ve -1
var o_Position = str.indexOf('o');
console.log(o_Position);

var b_Position = str.indexOf('b');
console.log(b_Position);
// Cat 1 chuoi tu vi tri bat dau va vi tri ket thuc
console.log(str.slice(2, 5));
// Cat 1 chuoi tu vi tri bat dau va vi tri ket thuc
console.log(str.substring(2, 5));

// Cat 1 chuoi tu vi tri bat dau va voi chieu dai
console.log(str.substr(2, 5));
// Thay theo mot ky tu hoac 1 chuoi ky tu trong chuoi
console.log(str.replace('PHP06', 'SDC'));
//Chuyen mot chuoi thanh viet HOA
console.log(str.toUpperCase());
//Chuyen mot chuoi thanh viet thuong
console.log(str.toLowerCase());
var _Position = str.indexOf(' ');
console.log(_Position);

var myName = 'Luong Hoai Canh';
var space1 = myName.indexOf(' ');
var myFirstName = myName.slice(0, space1);
console.log(myFirstName);

var numberNinMyName = 0;
while(myName.indexOf('n') != -1){
	var tmpName = myName;
	numberNinMyName++;
	myName = tmpName.slice(tmpName.indexOf('n') + 1, tmpName.length);
}
console.log(numberNinMyName);
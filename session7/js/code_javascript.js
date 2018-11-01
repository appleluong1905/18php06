// Vong lap trong javascript
// for, while, do while

for (var i = 0; i < 10; i++) {
	document.write(i);
	document.write('<br>');
}

// ++
// --
document.write('<br>');
var a = 5;
var b;
b = 5 + ++a;
document.write(b);
document.write('<br>');
document.write(a);

var x = 7;
var y;
y = 6 + ++x + 8 + x-- + x++ + 7 - ++x;
	//6 +   8 + 8 + 7   + 9   + 7 - 10;

document.write(y);
document.write('<br>');
document.write(x);
document.write('<br>');

var n = 3
while (n < 5) {
	document.write(n);
	document.write('<br>');
	n++;
}

var m = 6
do {
	document.write(m);
	document.write('<br>');
	m++;
} while (m < 5);


// 1
var condition1 = false;
var condition2 = true;
if (condition1) {
	// code
}

// 2
if (condition1) {
	// code
} else {
	// code
}
// 3
if (condition1) {
	// code
} else if (condition2) {
	// code
} else {
	// code
}

// switch case
var thang = 2;
var nam = 2001;
switch (thang) {
	case 1: 
		document.write('Thang 1 co 31 ngay');
		break;
	case 2: 
		//document.write('Thang 2 co 28 hoac 29 ngay');
		// kiem tra nam nhuan hay k?
		if ('nam nhuan') {
			document.write('Thang 2 co 29 ngay');
		} else {
			document.write('Thang 2 co 28 ngay');
		}
		break;
	case 3: 
		document.write('Thang 3 co 31 ngay');
		break;
	default:
		document.write('Khong phai so 1, 2, 3');
		break;
}


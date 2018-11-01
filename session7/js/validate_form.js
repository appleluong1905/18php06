function validateForm() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if (username == '') {
		alert('Please input username!');
	}
	if (password == '') {
		alert('Please input password!');
	}
	if (username != '' && password != '') {
		document.getElementById('success').innerHTML = 'Register done!';
	}
	console.log(username);
	console.log(password);
}
var a = '5';
console.log(typeof a);
a = parseInt(a);
console.log(typeof a);

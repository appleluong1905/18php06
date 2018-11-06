var result = '';
function addChar(char){
	result = result + char;
	document.getElementById('input_field').innerHTML = result;
}
function resetCal(){
	document.getElementById('input_field').innerHTML = 0;
}
function calculatorX(){
	document.getElementById('input_field').innerHTML = eval(result);
}
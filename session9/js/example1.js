function searchText() {
	var myName = document.getElementById('name').value;
	var charReplace = document.getElementById('keyword').value;
	var myNameNew = '';
	var myNameLast = myName;
	while(myName.indexOf(charReplace) != -1){
		myNameNew = myNameNew + myName.slice(0, myName.indexOf(charReplace)) + '<span>' + charReplace + '</span>';
		myName = myName.slice(myName.indexOf(charReplace) + charReplace.length, myName.length);
	}
	if((myNameLast.lastIndexOf(charReplace) != -1) && (myNameLast.lastIndexOf(charReplace) != myNameLast.length-1)){
		myNameNew = myNameNew + myNameLast.slice(myNameLast.lastIndexOf(charReplace) + charReplace.length, myNameLast.length);

	}
	document.getElementById('demo').innerHTML = (myNameNew != '')?myNameNew:myName;
}
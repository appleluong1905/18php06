function searchText() {
	// Lay thong tin tu input
	var myName = document.getElementById('name').value;
	var charReplace = document.getElementById('keyword').value;
	// Luu thong tin ten moi
	var myNameNew = '';
	// giu thong tin ten cu
	var myNameLast = myName;
	// Trong khi co it nhat mot keyword nam trong ten
	while(myName.indexOf(charReplace) != -1){
		// Cat ten cu tu dau den vi tri keyword trong ten cu (ket hop xu ly keyword) 
		// va noi vao ten moi
		myNameNew = myNameNew + myName.slice(0, myName.indexOf(charReplace)) 
		+ '<span>' + charReplace + '</span>';
		// Ten cu se bang: Cat tu vi tri keyword trong ten cu den het chieu dai ten cu
		myName = myName.slice(myName.indexOf(charReplace) 
			+ charReplace.length, myName.length);
	}
	// Kiem tra xem keyword co trong ten khong?
	// Neu co thi kiem tra xem keword co nam cuoi cung cua ten khong?
	if((myNameLast.lastIndexOf(charReplace) != -1) 
		&& (myNameLast.lastIndexOf(charReplace) != myNameLast.length-1)){
		myNameNew = myNameNew + myNameLast.slice(myNameLast.lastIndexOf(charReplace) 
			+ charReplace.length, myNameLast.length);

	}
	//In ten moi ra
	document.getElementById('demo').innerHTML = (myNameNew != '')?myNameNew:myName;
}
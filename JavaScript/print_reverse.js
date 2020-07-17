function printReverse(lista){
	lista.reverse();
	lista.forEach(function(elem){
		console.log(elem);
	});
}

printReverse([1,2,3,4,5,6,7,8,9,10]);
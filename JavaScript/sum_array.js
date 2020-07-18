function sumArray(arr){
	sum = 0;
	arr.forEach(function(num){
		sum += num;
	});
	return sum;
}


console.log(sumArray([1,2,3]))
console.log(sumArray([10,3,10,4]))
console.log(sumArray([-5,100]))
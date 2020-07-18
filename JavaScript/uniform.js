function isUniform(arr){
	prev = arr[0];
	for (i=1; i < arr.length; i++){
		if (prev !== arr[i]) {
			return false;
		}
		prev = arr[i];
	}
	return true;
}

console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(isUniform(['a','b','p']));
console.log(isUniform(['b','b','b']));
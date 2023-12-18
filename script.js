function stringChop(str, size) {
  // your code here
	if(!str) return [];

	let ans = [] , i = 0;
	while(i < str.length){
		ans.push(str.slice(i,i+size));
		 i += size;
	}
	return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

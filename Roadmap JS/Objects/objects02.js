let obj = {
    name: "petrol"
};

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

console.log(isEmpty(obj));

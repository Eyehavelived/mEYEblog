var switch_button = document.getElementById("peace")
var switch_count = 0
var is_flip = false
var is_hidden = false

switch_button.onclick =function() {
	// switch_count += 1
	// console.log(switch_count)
	fib = fibonnaci(switch_count)
	console.log(fib)
}

if (switch_count%7=0 && is_flip===false) {
	flip();
}
if (switch_count%8=0 && is_flip===true) {
	revert();
}

function fibonnaci(n) {
	console.log("doing")
	if (n===0) {
		return 0
	}
	if (n===1) {
		return 1
	}
	return fibonnaci(n-1) + fibonnaci(n-2)
}


function flip() {}
function revert() {}
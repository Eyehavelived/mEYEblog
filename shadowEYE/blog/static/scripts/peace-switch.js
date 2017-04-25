var switch_button = document.getElementById("peace")
var switch_count = 0
var is_flip = false
var is_hidden = false
var fib_count = 12

switch_button.onclick =function() {
	switch_count += 1
	// console.log(switch_count)
	fib = fibonnaci(switch_count)
	console.log(fib)

	if (switch_count%7===0 && is_flip===false) {
	    flip();
    }
    if (switch_count%8===0 && is_flip===true) {
	    revert();
    }
    if (switch_count===fibonnaci(fib_count)) {
        hidden();
    }

}


function fibonnaci(n) {
	if (n===0) {
		return 0
	}
	if (n===1) {
		return 1
	}
	return fibonnaci(n-1) + fibonnaci(n-2)
}


function flip() {
    is_flip = true
    is_hidden = false
}
function revert() {
    is_flip = false
    is_hidden = false
}
function hidden() {
    is_hidden = true
    is_flip = false
    fib_count += 1

// replace everything with stone designs
}
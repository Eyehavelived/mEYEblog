var switch_button = document.getElementById("peace")
var switch_count = 0
var is_flip = false

switch_button.onclick =function() {
	switch_count += 1
	console.log(switch_count)
}

if (switch_count=7 && is_flip===false) {
	switch_count=0
	flip();
}
if (switch_count=1 && is_flip===true) {
	switch_count=0
	revert();
}

function flip()
console.log("I'm ready!");
let counter = 0;
const val = document.getElementById("counter_value");
const btns = document.querySelectorAll(".sq-btn");

btns.forEach(function(btn) {
	btn.addEventListener("click", function(e) {
		console.log("e.currentTarget", e.currentTarget.classList);
		const styles = e.currentTarget.classList;
	
		if (styles.contains("decrease")) {
			counter--;
		} else if (styles.contains("increase")) {
			counter++;
		} else {
			counter = 0;
		}
	
	
		val.textContent = counter
	
		if (counter === 0) {
			val.style.color = "black";
		}
	
		if (counter > 0) {
			val.style.color = "green";
		}
	
		if (counter < 0) {
			val.style.color = "red";
		}
	})
})
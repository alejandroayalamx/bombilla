document.querySelector("#check").addEventListener("click",function(){
	let bulb = document.querySelector("#light");
	if(this.checked)
		bulb.classList.add("on");
	else
		bulb.classList.remove("on");
});
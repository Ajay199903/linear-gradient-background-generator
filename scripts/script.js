var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var slider = document.querySelector(".direction");

function changeGradient() 
{
	body.style.background = "linear-gradient(" + slider.value + "deg, " + color1.value + "," + color2.value + ")";
	h3.textContent = body.style.background + ";";
}

changeGradient();
slider.addEventListener("input",changeGradient);
color1.addEventListener("input",changeGradient);
color2.addEventListener("input",changeGradient);

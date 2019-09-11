var bouton = document.getElementById('bouton');
bouton.addEventListener('click', ()=>conversionTemperature());

function conversionTemperature(){
	switch(parseInt(prompt("0. Fin du programme\n1. De Celsius vers Fahrenheit\n2. De Celsius vers Kelvin\n3. De Fahrenheit vers Celsius\n4. De Fahrenheit vers Kelvin\n5. De Kelvin vers Celsius\n6. De Kelvin vers Fahrenheit"))){
		case 0:
		break;
		case null:
		break;
		case 1:
		var a = parseInt(prompt("Quelle est la température à convertir?"), 10);
		alert("Cela fait " + eval(a * 9/5 + 32) + " degrés Fahrenheit");
		break;
		case 2:
		var a = parseInt(prompt("Quelle est la température à convertir?"), 10);
		alert("Cela fait " + eval(a + 273.15) + " degrés Kelvin");
		break;
		case 3:
		var a = parseInt(prompt("Quelle est la température à convertir?"), 10);
		alert("Cela fait " + eval((a - 32) / (9/5)) + " degrés Celsius");
		break;
		case 4:
		var a = parseInt(prompt("Quelle est la température à convertir?"), 10);
		alert("Cela fait " + eval((a - 32) * (5/9) + 273.15) + " degrés Kelvin");
		break;
		case 5:
		var a = parseInt(prompt("Quelle est la température à convertir?"), 10);
		alert("Cela fait " + eval(a - 273.15) + " degrés Celsius");
		break;
		case 6:
		var a = parseInt(prompt("Quelle est la température à convertir?"), 10);
		alert("Cela fait " + eval((a * 9/5) - 459.67) + " degrés Fahrenheit");
		break;
		default:
		alert("Ce que vous avez entré ne correspond pas.");
	}
}
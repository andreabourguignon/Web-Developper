document.getElementById('bouton').addEventListener('click', ()=>calculIMC());

function calculIMC(){
	var poid = parseFloat(prompt("Veuillez saisir votre poid en kilogrammes"));
	var taille = parseFloat(prompt("Veuillez saisir votre taille en mètres"));
	var imc = eval(poid / Math.pow(taille, 2));
	alert(imc.toFixed(2));
	if(imc < 16.5)
		alert("Vous êtes en dénutrition ou famine");
	else if(imc >= 16.5 && imc < 18.5)
		alert("Vous êtes en maigreur");
	else if(imc >= 18.5 && imc < 25)
		alert("Vous avez une corpulence normale");
	else if(imc >= 25 && imc < 30)
		alert("Vous êtes en surpoid");
	else if(imc >= 30 && imc < 35)
		alert("Vous êtes en obésité modérée");
	else if(imc >= 35 && imc < 40)
		alert("Vous êtes en obésité sévère");
	else if(imc >= 40)
		alert("Vous êtes en obésité morbide");
}

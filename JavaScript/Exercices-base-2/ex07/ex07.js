function faireChoix(){
	var a = prompt("Choisissez 1, 2 ou 3");
	if(a == 1)
		alert("1. Merci");
	else if(a == 2)
		alert("2. Bonjour");
	else if(a == 3)
		alert("3. Au revoir");
	else
		alert("Pardon, que voulez-vous?");
}
var bouton = document.getElementById('bouton');
bouton.addEventListener('click', ()=>faireChoix());
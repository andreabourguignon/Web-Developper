function somme(){
	var i;
	var result = 0;
	for(i = 0; i < 3; i++){
		result += parseInt(prompt("Saisissez un nombre svp"));
	}
	alert(result);
}
var bouton = document.getElementById('bouton');
bouton.addEventListener('click', ()=>somme());
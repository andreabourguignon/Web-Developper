var bouton = document.getElementById('surface');
bouton.addEventListener('click', function(){
	var rayon = document.getElementById('rayon').value;
	var resultat = (parseInt(rayon, 10) * parseInt(rayon, 10)) * Math.PI;
	document.getElementById('div').textContent = "La surface du cercle vaut " + resultat + " cm2.";
});
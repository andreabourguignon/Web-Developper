var bouton = document.getElementById('valider');

function mafonction(pointure, annee){
	var resultat = pointure * 2;
	resultat += 5;
	resultat *= 50;
	resultat -= annee;
	resultat += 1766;
	return resultat;
}

bouton.addEventListener('click', function(){
	var annee = document.getElementById('annee').value;
	var pointure = document.getElementById('pointure').value;
	alert(mafonction(pointure, annee));
});
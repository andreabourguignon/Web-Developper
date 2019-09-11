var aire = document.getElementById('aire');
aire.addEventListener('click', function(){
	var longueur = document.getElementById('longueur').value;
	var largeur = document.getElementById('largeur').value;
	surfaceRectangle(parseInt(longueur, 10), parseInt(largeur, 10));
});

function surfaceRectangle(longueur, largeur){
	var resultat = longueur * largeur;
	document.getElementById('div').textContent = "L'aire du rectangle vaut " + resultat + " cm2.";
}

var peri = document.getElementById('perimetre');
peri.addEventListener('click', function(){
	var longueur = document.getElementById('longueur').value;
	var largeur = document.getElementById('largeur').value;
	periRectangle(parseInt(longueur, 10), parseInt(largeur, 10));
});

function periRectangle(longueur, largeur){
	var resultat = (longueur + largeur) * 2;
	document.getElementById('div').textContent = "Le périmètre du rectangle vaut " + resultat + " cm.";
}
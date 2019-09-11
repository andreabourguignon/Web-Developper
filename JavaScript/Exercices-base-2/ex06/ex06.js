var tab = [-2, 1, 4];
function soustrait (x){
	if(x >= 0){
		return x - 2;
	}
	else{
		return "Nombre négatif";
	}
}
function affiche(tab){
	alert(soustrait(tab[0]));
	alert(soustrait(tab[tab.length - 1]));
}
var bouton = document.getElementById('bouton');
bouton.addEventListener('click', ()=>affiche(tab));
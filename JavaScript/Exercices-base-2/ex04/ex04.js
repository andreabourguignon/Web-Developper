var tab = [-2, 1, 4];

function additionne(x){
	return x + 2;
}

function affiche(tab){
	alert(additionne(tab[0]));
	alert(additionne(tab[tab.length - 1]));
}

var bouton = document.getElementById('bouton');
bouton.addEventListener('click', ()=>affiche(tab));
function testWhile(){
	var a = prompt("Veuillez entrer une chaîne de char contenant un 'p'");
	while(a.indexOf("p") == -1)
		a = prompt("Cette chaine ne contient pas de 'p', veuillez recommencer");
	alert(a);
}
var bouton = document.getElementById('bouton');
bouton.addEventListener('click', ()=>testWhile());
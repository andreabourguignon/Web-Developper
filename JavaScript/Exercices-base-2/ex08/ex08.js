function jourDeLaSemaine(){
	var date = new Date();
	switch(date.getDay()){
		case 1:
		alert("Lundi");
		break;
		case 2:
		alert("Mardi");
		break
		case 3:
		alert("Mercredi");
		break
		case 4:
		alert("Jeudi");
		break
		case 5:
		alert("Vendredi");
		break;
		case 6:
		alert("Samedi");
		break;
		case 7:
		alert("Dimanche");
		break
		default:
		alert("Il semble y avoir un problème");
	}
}
var bouton = document.getElementById('bouton');
bouton.addEventListener('click', ()=>jourDeLaSemaine());
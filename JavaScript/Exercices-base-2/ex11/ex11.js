var bouton = document.getElementById('bouton');
bouton.addEventListener('click', ()=>calculMoyenne());

function calculMoyenne(){
	var a;
	var result = 0;
	var i = 0;
	while(a = prompt("Entrez un nombre entier")){
		if(!Number.isInteger(parseInt(a, 10))){
			alert("Ce que vous avez entré n'est pas un nombre entier");
		}
		if(Number.isInteger(parseInt(a, 10)) && a >= 0){
			result += parseInt(a, 10);
			i++;
		}
		if(Number.isInteger(parseInt(a, 10)) && a < 0){
			result /= i;
			alert("Vous avez entré " + i + " valeurs.\nLa moyenne de ces valeurs est : " + result);
			break;
		}
	}
}
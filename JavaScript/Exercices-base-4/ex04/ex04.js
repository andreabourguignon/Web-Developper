var verif = document.getElementById('verif');

verif.addEventListener('click', function(){
	var mdp1 = document.getElementById('motdepasse');
	var mdp2 = document.getElementById('confirmation');
	if(mdp1.value == mdp2.value){
		mdp1.style.border = "1px solid green";
		mdp2.style.border = "1px solid green";
	}
	else{
		mdp1.style.border = "1px solid red";
		mdp2.style.border = "1px solid red";
	}
});


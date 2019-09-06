var bouton = document.getElementById('valider');
bouton.addEventListener('click', function(){
	var nom = document.getElementById('nom').value;
	var prenom = document.getElementById('prenom').value;
	var ville = document.getElementById('ville').value;
	alert("Nom : " + nom + "\nPrénom : " + prenom + "\nVille : " + ville);
})
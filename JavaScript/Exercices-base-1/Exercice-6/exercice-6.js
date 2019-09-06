var bouton = document.getElementById('valider');
bouton.addEventListener('click', function(){
	var nombre1 = document.getElementById('premier_nombre').value;
	var nombre2 = document.getElementById('deuxieme_nombre').value;
	alert('Le reste de la division du premier nombre par le deuxième est: ' + nombre1 % nombre2);
});
var vert = document.getElementsByClassName('color green');
var rouge = document.getElementsByClassName('color red');
var bleu = document.getElementsByClassName('color blue');
var texte = document.getElementById('texte');

vert[0].addEventListener('click', function(){
	texte.style.color = "green";
});

rouge[0].addEventListener('click', function(){
	texte.style.color = "red";
});

bleu[0].addEventListener('click', function(){
	texte.style.color = "blue";
});
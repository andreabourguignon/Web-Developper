var afficher = document.getElementById('afficher');
var masquer = document.getElementById('masquer');
var para = document.getElementById('para');

masquer.addEventListener('click', function(){
	para.style.display = "none";
});
afficher.addEventListener('click', function(){
	para.style.display = "block";
});
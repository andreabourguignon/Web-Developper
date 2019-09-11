var image = document.getElementById('image1');
image.addEventListener('mouseover', function(){
	image.style.border = "3px solid red";
});
image.addEventListener('mouseout', function(){
	image.style.border = "";
});
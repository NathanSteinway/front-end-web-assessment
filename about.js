const catPic = document.getElementById('catPic')
console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Thank you for contacting us!');
}

function handleCat(evt) {
	alert('This is a maine coon. Pretty, right?')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
catPic.addEventListener('mouseover', handleCat)
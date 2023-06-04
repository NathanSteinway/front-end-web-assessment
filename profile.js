const color = document.getElementById('color') 
const place = document.getElementById('place') 
const ritual = document.getElementById('ritual')

function handleColor(evt) {
    alert('My favorite color is mint green!')
}

function handlePlace(evt) {
    alert('My favorite place is home.')
}

function handleRitual(evt) {
    alert('My favorite ritual is Misogi.')
}


color.addEventListener('click', handleColor)
place.addEventListener('click', handlePlace)
ritual.addEventListener('click', handleRitual)
 
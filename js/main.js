


document.getElementById('loadButton').addEventListener('click', clickButton)

function clickButton(){

	const inputLogo = document.getElementById('inputLogo');
	console.log(inputLogo.value)

  document.getElementById('preloader').style.display = "block"
  document.getElementById('loadButton').style.display = "none"

  // call to backend api

  setTimeout(callbackApi, 2000)
}

function callbackApi(){
  document.getElementById('preloader').style.display = "none"
  document.getElementById('loadButton').style.display = "block"
  document.getElementById('result').innerHTML = 'Éxito'
}


// Based on: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
function generateImagePreview(container, file) {
	const output = document.getElementById(container);
	output.src = URL.createObjectURL(file);
	output.onload = function() { URL.revokeObjectURL(output.src) }
	output.style.display = 'block'
}


function loadImage(container, event) {
	generateImagePreview(container, event.target.files[0]);
}
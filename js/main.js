


document.getElementById('loadButton').addEventListener('click', clickButton)

function clickButton(){
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

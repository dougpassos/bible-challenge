//import './style.css'

const numCaps = 28;

function CreateCaps(numcaps) {
  let element = '';
  for (let index = 1; index <= numcaps; index++) {
    element = element + `<div><p>${index}</div>`    
  }
  return element;  
}

document.querySelector('#app').innerHTML = `
<h1>Desafio Leitura Biblica 2023</h1>
<p>${numCaps} dias - Mateus (06/03 - 02/04/2023)</p>
<div id='caps'>  
   ${CreateCaps(numCaps)}      
</div>`


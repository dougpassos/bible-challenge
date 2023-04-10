//import './style.css'

const numCaps = 28;

function Header() {
  return `
  <header>
    <h1>Desafio Leitura Biblica 2023</h1>
    <p>${numCaps} dias - Mateus (06/03 - 02/04/2023)</p>
  </header>
  `
}

function Footer() {
  return `
    <footer>
    <p>Footer</p>
    </footer>
  `
}

function CreateCaps(numcaps) {
  let element = '';
  for (let index = 1; index <= numcaps; index++) {
    element = element + `<div><p>${index}</div>`    
  }
  return element;  
}

document.querySelector('#app').innerHTML = `
  ${Header()}
  <div id='caps'>  
    ${CreateCaps(numCaps)}      
  </div>
  ${Footer()}
  `
  
const numCaps = 10;
const startDate = "06 março";
const finalDate = "02 abril";
const currentYear = "2023";

function Header() {
  return `
  <header>
    <h1>Leitura Biblica ${currentYear}</h1>
    <p>Livro: Mateus   
  </header>
  `
}

function Footer() {
  return `
    <footer>
    <p> <p>${numCaps} dias - de ${startDate} até ${finalDate}</p></p>
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
  
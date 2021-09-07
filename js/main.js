// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

let bombsNum = 16;
let cellsNum = 100;

var bombsList = [];

while (bombsList.length < bombsNum) {
    let genNum = randomMines(cellsNum);
    if (bombsList.includes(genNum) == false) {
        bombsList.push(genNum);
    }
}

console.log(bombsList);

let userNumbers = [];

let chances = cellsNum - bombsNum;

let continueGame = true;


// FUNCTIONS //

function randomMines(max) {
    return Math.floor(Math.random() * max) + 1;
}


function createField(cells) {

    for (let i = 1; i <= cells; i++) {
        let cell = `
            <div data-cell="${i}" class="cell"></div>
        `;
        
        let cellTemplate = document.createElement("div");
        cellTemplate.classList.add("square");
        cellTemplate.innerHTML = cell;
        document.getElementById("field").appendChild(cellTemplate);
    }

}

document.getElementById("field").addEventListener("click",

    function(e) {

        if (continueGame == true) {
            let element = document.querySelectorAll("[data-cell='" + e.target.dataset.cell + "']");
            element[0].classList.add("red");
            
    
            let userChoice = parseInt(e.target.dataset.cell);
        
            if (userNumbers.includes(userChoice) == false && userChoice > 0 && userChoice < 101) {
                userNumbers.push(userChoice);
            }

        
            if (bombsList.includes(userChoice)) {
                alert("hai perso");
                continueGame = false;
                userNumbers.pop();
            }
            else if (userNumbers.length >= chances){
                alert("hai vinto");
                continueGame = false;
            }
            
            if (continueGame == false) {
                
                alert("il tuo punteggio è " + userNumbers.length);
            }
            
        }
       
        
    }

)

createField(cellsNum);
String.prototype.replaceAt=function(index, character) 
{ return this.substr(0, index) + character + this.substr(index+character.length); }

const words=["murcielago", "casa","perro", "gato", "telefono", "felicitas", "Benjamin", "francisco", "pimpinela", "vehiculo", "silencio", "puerta", "ascensor" ];
const secretWord= words[Math.floor(Math.random()*words.length)];
let hyphenatedWord =secretWord.replace(/./g, "- ");
let faultsCounter = 0;

document.querySelector("#output").innerHTML = hyphenatedWord;
document.querySelector("#amountOfLetters").innerHTML = "La Palabra tiene " + secretWord.length + " letras";
let faults = [];

function letsPlay(){
    window.location.href="game.html";
}
function index() {
    window.location.href="index.html";
}
function credits() {
    window.location.href="credits.html";
}


document.querySelector("#letsPlay").addEventListener("click",()=> {
    
    const letter = document.querySelector("#letter").value;
    
    let failed =true;
    for(const i in secretWord) //recorre el string como si fuera un array?
    {
        if(letter == secretWord[i])
        {
            hyphenatedWord = hyphenatedWord.replaceAt(i*2, letter);
            failed= false;
        }
        
    }
    
    if(failed)
    {
        faultsCounter++;
    
        let letterMay = letter.toUpperCase();
                faults.push(" " + letterMay);
       
        document.querySelector("#fault").innerHTML = "Fallaste " + faultsCounter + " letras " + faults;


        document.querySelector("#hangMan").style.backgroundPosition = -(150*faultsCounter) + 'px 0';
        if(faultsCounter==6)
        {
          
            var result = window.confirm('Perdiste!!!! Queres jugar de nuevo?');
            if (result === true) {
              setTimeout(reset, 1000);
                function reset(){document.location.reload();}
            } 
            else{

                window.alert("Será entonces hasta la próxima!!");
            }
        }
    }else{

        if(hyphenatedWord.indexOf("-")<0)
        {
            var result = window.confirm('Ganaste !!!! Queres jugar de nuevo?');
                if (result === true) {
                    setTimeout(reset, 1000);
                    function reset(){document.location.reload();}
                }   else{

                    window.alert("Será entonces hasta la próxima!!");
                } 

               
            
        }

    }
 
    document.querySelector("#amountOfLetters").innerHTML = "La palabra tiene " + secretWord.length + " letras";
    document.querySelector("#output").innerHTML = hyphenatedWord;
    document.querySelector("#letter").value="";
    document.querySelector("#letter").focus();

});

/* function setGameOver() {
   
    resetButton = document.createElement('button');
    resetButton.textContent = 'Iniciar nuevo juego';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    document.location.reload();
 
  } */


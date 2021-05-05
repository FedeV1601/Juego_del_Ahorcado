String.prototype.replaceAt=function(index, character) 
{ return this.substr(0, index) + character + this.substr(index+character.length); } //Debo declarar esta funcion para que funcione el llamado al metodo replaceAt() tal como la necesitamos

const words=["murcielago", "casa","perro", "gato", "telefono", "felicitas", "Benjamin", "francisco", "pimpinela", "vehiculo", "silencio", "puerta", "ascensor" ];
const secretWord= words[Math.floor(Math.random()*words.length)];//Elijo de manera aleatoria del array "words" una de las palabras que será la palabra secreta 
let hyphenatedWord =secretWord.replace(/./g, "- "); // para poder mostrar la palabra con guiones utilizo el metodo replace() que reemplazará cada una de las letras de la palabra secreta por un guion y un espacio
let faultsCounter = 0; // contador de palabras erradas

document.querySelector("#output").innerHTML = hyphenatedWord; // En el elemento con id "output" se mostrará la palabra con guiones
document.querySelector("#amountOfLetters").innerHTML = "La Palabra tiene " + secretWord.length + " letras"; // En el elemento con id "amountOfLetters" se mostrará la cantidad de letras de la palabra secreta
let faults = []; // declaro un array en el que luego guardaré las letras seleccionadas por el usuario que no eran parte de la palabra secreta

// FUNCIONES DE LA BARRA DE NAVEGACION

function letsPlay(){
    window.location.href="game.html"; 
}
function index() {
    window.location.href="index.html";
}
function credits() {
    window.location.href="credits.html";
}

// FUNCION PRINCIPAL DEL JUEGO
document.querySelector("#letsPlay").addEventListener("click",()=> {
    
    const letter = document.querySelector("#letter").value;
    
    let failed =true;
    if(letter == "" || isNaN(letter) == false){
        window.alert("Tenes que ingresar una letra");
        document.querySelector("#letter").value="";
        letter = document.querySelector("#letter").value;
    } else{ 
        for(const i in secretWord)
        {
            if(letter == secretWord[i])
            {
                hyphenatedWord = hyphenatedWord.replaceAt(i*2, letter); // reemplazo las letras adivinadas por el usuario en la palabra secreta. El i*2 es porquie hay un espacio entre letra y letra
                failed= false;
            }
        }
    }
    
    
    if(failed)
    {
        faultsCounter++;
    
        let capsLetter = letter.toUpperCase();
                faults.push(" " + capsLetter); // Guardo en el arary las letras erradas en letra mayúscula
       
        document.querySelector("#fault").innerHTML = "Fallaste " + faultsCounter + " letras: " + faults;


        document.querySelector("#hangMan").style.backgroundPosition = -(150*faultsCounter) + 'px 0'; // Con esta sentencia voy moviendo el backgroun para mmostrar la imagen de acuerdo a la cantidad de errores del jugador
        if(faultsCounter==6)
        {
          
            var result = window.confirm('Perdiste!!!! Queres jugar de nuevo?');
            if (result === true) {
              setTimeout(reset, 1000);
                function reset(){document.location.reload();} //Si el jugador quiere jugar de nuevo, recargo la página
            } 
            else{

                window.alert("Será entonces hasta la próxima!!"); // Si no quiere jugar de nuevo, cargo el index.html
                index();
                
            }
        }
    }else{

        if(hyphenatedWord.indexOf("-")<0) // Si en la palabra secreta no hay mas guiones quiere decir que el jugador adivinó la palabra. El metodo indexOf devuelve -1 si no se encuentra lo que se busca, ene ste caso el "-"
        {
            var result = window.confirm('Ganaste !!!! Queres jugar de nuevo?');//window confirm devuelve tru si el usuario elige "Aceptar"  o false si elige "Cancelar"
                if (result === true) {
                    setTimeout(reset, 1000);
                    function reset(){document.location.reload();}
                }else{

                    window.alert("Será entonces hasta la próxima!!");
                } 
        }

    }
 
    document.querySelector("#amountOfLetters").innerHTML = "La palabra tiene " + secretWord.length + " letras";
    document.querySelector("#output").innerHTML = hyphenatedWord;
    document.querySelector("#letter").value="";
    document.querySelector("#letter").focus();

});


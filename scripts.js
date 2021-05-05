String.prototype.replaceAt=function(index, character) 
{ return this.substr(0, index) + character + this.substr(index+character.length); }

const palabras=["murcielago", "casa","perro", "gato", "telefono", "felicitas", "Benjamin", "francisco", "pimpinela", "vehiculo", "silencio", "puerta", "ascensor" ];
const palabraSecreta= palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones =palabraSecreta.replace(/./g, "- ");
let contadorFallos = 0;

document.querySelector("#output").innerHTML = palabraConGuiones;
document.querySelector("#cantLetras").innerHTML = "La Palabra tiene " + palabraSecreta.length + " letras";
let erradas = [];

function aJugar() {
    window.location.href="juego.html";
}

document.querySelector("#jugar").addEventListener("click",()=> {
    
    const letra = document.querySelector("#letra").value;
    
    let haFallado =true;
    for(const i in palabraSecreta) //recorre el string como si fuera un array?
    {
        if(letra == palabraSecreta[i])
        {
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            haFallado= false;
        }
        
    }
    
    if(haFallado)
    {
        contadorFallos++;
    
        let letraMay = letra.toUpperCase();
                erradas.push(" " + letraMay);
       
        document.querySelector("#errada").innerHTML = "Fallaste " + contadorFallos + " letras " + erradas;


        document.querySelector("#ahorcado").style.backgroundPosition = -(150*contadorFallos) + 'px 0';
        if(contadorFallos==6)
        {
            var resultado = window.confirm('Perdiste!!!! Queres jugar de nuevo?');
            if (resultado === true) {
                setTimeout(reset, 1000);
                function reset(){document.location.reload();}
            } 
            else{

                window.alert("Será entonces hasta la próxima!!");
            }
        }
    }else{

        if(palabraConGuiones.indexOf("-")<0)
        {
            var resultado = window.confirm('Ganaste !!!! Queres jugar de nuevo?');
                if (resultado === true) {
                    setTimeout(reset, 1000);
                    function reset(){document.location.reload();}
                }   else{

                    window.alert("Será entonces hasta la próxima!!");
                } 

               
            
        }

    }
 
    document.querySelector("#cantLetras").innerHTML = "La palabra tiene " + palabraSecreta.length + " letras";
    document.querySelector("#output").innerHTML = palabraConGuiones;
    document.querySelector("#letra").value="";
    document.querySelector("#letra").focus();

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


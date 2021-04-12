String.prototype.replaceAt=function(index, character) 
{ return this.substr(0, index) + character + this.substr(index+character.length); }


const palabras=["murcielago", "casa","perro", "gato", "correspondencia", "otorrinolaringologo", "vehiculo", "silencio", "puerta", "ascensor" ];
const palabraSecreta= palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones =palabraSecreta.replace(/./g, "- ");
let contadorFallos = 0;

document.querySelector("#output").innerHTML = palabraConGuiones;
document.querySelector("#cantLetras").innerHTML = "La Palabra tiene " + palabraSecreta.length + " letras";
//document.querySelector("#errada").innerHTML = erradas.value;
document.querySelector("#enviar").addEventListener("click",()=> {
    
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
    /*     let erradas =[letra];
        document.querySelector("#errada").innerHTML = erradas.value; */
        document.querySelector("#ahorcado").style.backgroundPosition = -(150*contadorFallos) + 'px 0';
        if(contadorFallos>=6)
        {
            alert("Perdiste el Juego")
        }
    }else{

        if(palabraConGuiones.indexOf("-")<0)
        {
            alert("GANASTE!!")
        }

    }
  
    document.querySelector("#cantLetras").innerHTML = "La palabra tiene " + palabraSecreta.length + " letras";
    document.querySelector("#output").innerHTML = palabraConGuiones;
    document.querySelector("#letra").value="";
    document.querySelector("#letra").focus();

});


let numeroRamdon = Math.floor(Math.random() * 100) + 1;

let numeroUsuario = document.getElementById("numeroEntrada");
let mensajeMostrado = document.getElementById("mensaje");
let numeroDeIntento = document.getElementById("intentos");
let numeroDeIntentos = 0;

function verificarNumero() {
    let numeroParaAdivinar = parseInt(numeroUsuario.value)
    numeroDeIntentos++;
    numeroDeIntento.textContent = numeroDeIntentos
    if (isNaN(numeroParaAdivinar) || numeroParaAdivinar > 100 || numeroParaAdivinar < 0) {
        mensajeMostrado.textContent = "favor de escribir un numero entre 1 y 100";
        mensajeMostrado.style.color = "red";
        return; //este return es para que no se ejecuten los if/else/else if de abajo
    }

    if (numeroParaAdivinar == numeroRamdon) {
        mensajeMostrado.textContent = "Numero acertado Felicidades";
        mensajeMostrado.style.color = 'green';
        numeroUsuario.disable = true;
    } else if (numeroParaAdivinar > numeroRamdon) {
        mensajeMostrado.textContent = 'El numero es mas pequeño';
        mensajeMostrado.style.color = "orange";
    } else {
        mensajeMostrado.textContent = 'El numero es mas grande';
        mensajeMostrado.style.color = "orange";
    }
}

function mostrarNumero(){
    mensajeMostrado.textContent = numeroRamdon;
    mensajeMostrado.style.color = 'blue'
}




//document.getElementById('mensaje').innerHTML = mostrar
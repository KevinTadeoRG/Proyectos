// Funcion para que cada vez que oprimamos un botón se agrege el valor en el recuadro de la calculadora
function mostrarValor(valor){
    document.getElementById('pantalla').value += valor;
}

// Esta función borra todo lo que esta escrito en pantalla
function borrarValor(){
    document.getElementById('pantalla').value = ('');
}

//Esta funcion utiliza 'eval' para resolver de una manera rápida y sencilla 
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value ;
    const resultado = eval(valorPantalla);

    document.getElementById('pantalla').value = resultado;
}


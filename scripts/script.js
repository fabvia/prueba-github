var nombreVariable = 12;
var $variable;


nombreVariable = "Hola mundo";

var elemento = document.createElement('h2');
elemento.innerHTML = "Texto vinculado por codigo";

console.log(elemento);

var contenedor=document.getElementsByClassName('contenedor');
contenedor[0].appendChild(elemento);

console.log(contenedor);

for(var i = 0; i < 10; i++) {
    var elemento = document.createElement('h2');
    elemento.innerHTML = "Texto vinculado por codigo";
    contenedor[0].appendChild(elemento);  
}

var arregloText=["elem1","elem2","elem3","elem4","elem5","elem6"];

for(var i = 0; i < arregloText.length; i++) {
    var elemento = document.createElement('h2');
    elemento.innerHTML = arregloText[0];
    contenedor[0].appendChild(elemento);  
}

for(index in arregloText){
    var elemento = document.createElement('h2');
    elemento.innerHTML = arregloText[index];
    contenedor[0].appendChild(elemento);
}

// var estado = false;

// estado = (1 == 3);
// estado = ("1" = 1);
// estado = (false || true);
// estado = (true && true);


var miFuncion = function(arg1, arg2, arg3){
    var respuesta = 0;
    respuesta = arg1 + arg2 + arg3;
    return respuesta;
}

var resultado = miFuncion(1, 2 ,3);
console.log("El resultado es: " + resultado);


// arregloText.forEach(function(interno)
// {
//     console.log(interno);
// })
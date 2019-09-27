//Encontrar radio de circunferencia.

var r = prompt("Ingrese un radio");

var funcion = x => {
    var radio = 0;

    if(x <= 0)
     console.log("-1")
    else{
    radio = 3.14 * Math.pow(x,2);
    console.log(radio);
    }
}

funcion(r);
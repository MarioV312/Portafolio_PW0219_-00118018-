// Fibonacci: La serie Fibonacci es una serie matemática muy reconocida, la cual tiene como primeros 10 términos: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
// Realice una función en JavaScript que reciba un número n como argumento y muestre la serie hasta el enésimo término

var n = prompt("Ingrese un numero");

var funcion = x => {
    var a = 0;
    var b = 1;
    var aux = 0;
    var sum = 0;

    console.log(a);
    console.log(b);

    for(i = 0; i = n; i++){
        sum = a + b;
        console.log(sum);
        b = a;
        aux = sum;
    }
}

funcion(n);
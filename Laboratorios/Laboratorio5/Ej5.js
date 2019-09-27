// Palíndromo: Se dice que una palabra es palíndroma cuando se puede leer de la misma manera tanto de derecha a izquierda y viceversa.
// Crear una función en JavaScript que reciba como parámetro una palabra. La función debe retornar si la palabra es palíndroma o no

var p = prompt("Ingrese una palabra");

var funcion = x => {
var re = /[W_]/g;
   let temp = p.replace(re, '');
   let split = temp.split('');
   let r = split.reverse().join();
   if(temp == r)
    console.log("Es palindrome");
   else        
    console.log("No es palindrome");
}

funcion(p);
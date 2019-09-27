var n = 2;

var a = [2, 3, 2, 5, 2, 6];

var funcion = (z ,x) => {
    var o = 0;

    x.forEach(element => {
       if(element == 2)
        o = o+1;
    });

    console.log(o);
}
 
funcion(n , a);
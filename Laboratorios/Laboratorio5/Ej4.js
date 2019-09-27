var n = [Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100)
,Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100)];

var u = prompt("Ingrese un numero");

var funcion = (a , z) => {
    var g = 0;

    z.forEach(element => {
        if (element == a)
        g = g + 1  ;
    });

    if(g >= 1)
        console.log("Usted a ganado!")
    else    
        console.log("Usted a perdido!")
};

funcion(u, n);

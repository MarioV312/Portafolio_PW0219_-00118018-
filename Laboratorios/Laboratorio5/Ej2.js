var a = [1, 3, 4, 2, 5 ,2, 6];

var funcion = x =>{
    let sum = 0;
    let prom = 0;

    x.forEach(element => {
      sum += element;  
    });

    x.forEach(element => {
        prom = sum / a.length;
    });

    console.log(sum);

    console.log(prom);
}

funcion(a);


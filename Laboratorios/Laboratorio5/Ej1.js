var a = [2, false, 'pollo', 3, 2, true, 'carro'];

var funcion = x =>{
    let type = [];
    let count ={};

    x.forEach(element => {
        type.push(typeof element)
    });

    type.forEach(element=>{
        count[element] = (count[element] || 0) + 1;
    });

    console.log(type);
    console.log(count);
}

funcion(a);


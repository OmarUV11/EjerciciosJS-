function convertirNumeros(numero){
    let total = []
    let resultado;
    for(let i=0; i<=6; i++){
        total[i] = parseInt(numero);
        resultado = numero / 2;
        numero = numero - resultado;
    }

    for(let x=0;x<=6;x++){
        total[x] = total[x] % 2;
        if( total[x] == "NaN"){
            total[x] = 0; 
        }
    }

    return total;

    
    
    
}

let numero = prompt();
let resultado = convertirNumeros(numero);
alert(resultado)



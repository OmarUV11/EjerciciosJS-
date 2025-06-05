/*Promesa con tiempo de espera: Diseña una función que acepte un número de milisegundos y devuelva una promesa que resuelva después de ese tiempo.  */

let milisegundos = parseInt(prompt("Cantidad de milisegundos:"));
typeof(milisegundos);

function prmosesaSegundos(milisegundos){
    const resultado = new Promise(()=>{
            setTimeout(() =>{
                console.log(`Se resolvio la promesa en ${milisegundos} milisegundos`);
            },milisegundos)
    });

    resultado.then(resultado =>{
            console.log(resultado);
    })
}

prmosesaSegundos(milisegundos);
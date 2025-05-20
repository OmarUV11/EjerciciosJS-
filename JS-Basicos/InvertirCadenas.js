/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

let frase = prompt("Introdusca su frase a invertir:");
invertirTexto(frase)




function invertirTexto(frase){
    let arregloprueba = [];
    for(let i=0; i<=frase.length; i++){
        arregloprueba[i] = frase[i];
    }

    for(let x=frase.length-1; x>=0; x--){
        console.log(arregloprueba[x]);
    }
    
   
}

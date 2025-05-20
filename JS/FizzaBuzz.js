/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */


const numeros = [];
function generarNumeros(numeros){
        for(let i=0; i<=100; i++){
            numeros.push(i);
        }
        return numeros;
}
const numerosGenerados = generarNumeros(numeros);
 
//Conversion a fizz, buzz y fizzbuz 
function cambioPalbra(numerosGenerados){
        for(let i = 0 ; i<=100 ; i++){
                if(numerosGenerados[i] % 3 == 0 && numerosGenerados [i] % 5 == 0){
                        numerosGenerados[i] = "fizzBuzz";
                }else if(numerosGenerados[i] % 3 ==0){
                        numerosGenerados[i] = "Fizz";
                }
                else if(numerosGenerados[i] % 5 == 0){
                        numerosGenerados[i] = "Buzz"; 
                }
            console.table(numerosGenerados[i]);
        }
        
}

cambioPalbra(numerosGenerados);




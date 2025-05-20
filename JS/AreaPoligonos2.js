/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function calCularArea(valor1, valor2){
   let resultadoCuadrato =  calAreaCuadreato(valor1);
   let resultadoTriangulo =  calAreaTriangulo(valor1,valor2);
   let resultadoRectangulo = calAreaRectangulo(valor1,valor2);
   console.log(`Area del cuadrado: ${resultadoCuadrato}, Area del triangulo ${resultadoTriangulo} , Area del Rectangulo ${resultadoRectangulo}`)
}

function calAreaCuadreato(valor1){
    return valor1 * 4;
}

function calAreaRectangulo(valor1,valor2){
    return valor1 * valor2;
}

function calAreaTriangulo(valor1,valor2){
    return valor1 * valor2 / 2; 
}

let valor1,valor2;
valor1 = prompt("Dame el primer valor del poligono");
valor2 = prompt("Dame el segundo valor del poligono");

calCularArea(valor1,valor2);



/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */


function calAreaPoligono(base,altura){
    if (base > 0 && altura == 0){
          let resultado = areaCuadrado(base);
          console.log("Entro a la funcion para el cuadrado");
          return resultado;
    }
    if (base > 0 && altura > 0){
        let resultado = areTriangulo(base, altura);
        console.log("Entro a la funcion del triangulo");
        return resultado;
    }
 
    if(base > 0 && altura > 0){
        console.log("Entro a la funcion para el rectangulo");
        let resultado = areaRectangulo(base, altura);
        return resultado;
    }
    return alert ("No introdujo valores validos")
}

//Funciones por poligono
function areaCuadrado(base){
        return base * 4;
}

function areTriangulo(base,altura){
        return (base * altura) / 2;
}

function areaRectangulo(base,altura){
        return base * altura;

}

let base = prompt("Valor:");
let altura =  prompt("valor:");
const resultado = calAreaPoligono(base, altura);
console.table(resultado);

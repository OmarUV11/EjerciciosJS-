/*
Crear una promesa simple: Crea una promesa que resuelva después de un cierto tiempo con un mensaje específico. 
 */

const miPrimerPromise = new Promise(() =>{ 
        setTimeout( () =>{
            resolve("Buenos dias");
        },10000);
        
});

miPrimerPromise.then( resultado => console.log(resultado))
    .catch(error => console.log(error));


//*Para crear un prommise 
//1-.Debemos de crear un varible que no cambie const 
//2-.Seguido de la defindicion de promise mediante new 
//3-.Una vez que se define el promise tenemos dos opciones la creacion de un function o arrow function 
//4-.Cabe recalcar que dentro de al promise existen dos parametros "resolve" y "reject" estos pueden ser colocados o no es opcional 
//5-.Dentro de promise es tonde colocaremos todo lo que se hara teniendo en cuenta que se tenga una respuesta valida:
//Peding : Sinedo peding es el estado por defecto 
//FullFiled : Ya se cumplio la promesa 
//Reject : No se cumplio la promes

//Utilizar promise 
//Para utilizar promise debemos de utilizar la variable seguido del then para acceder a los valores del promise 
//Dentro del then debemos de especificar un resultado que son las respuestas que da el promise la ejecucion de estos 
//se hara dentro de una funcion o arrow function 

//En caso de que el promise no se cumpla debemos de especificar un .catch seguido del error y lo que se ejecutara dentro del arrow function 
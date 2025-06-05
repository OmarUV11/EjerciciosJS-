/* Filtrar publicaciones por usuario
URL: https://jsonplaceholder.typicode.com/posts?userId=3

Objetivo: Mostrar solo las publicaciones del usuario con ID 3.

 */


async function mostrarUsuario() {
   

    //Mostrar al usuario con el id tres
    const publicaciones = await fetch('https://jsonplaceholder.typicode.com/posts?userId=3')
    const resultadoPublicaciones = await publicaciones.json();
   
    
    resultadoPublicaciones.forEach( resultado => {
        console.log(`Las publicaciones del del usuario 3 tiene la id ${resultado.id} y son las siguientes ${resultado.title}`);
    }) 

    
}

mostrarUsuario();
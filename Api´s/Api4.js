/*3. Mostrar comentarios de un post
URL: https://jsonplaceholder.typicode.com/posts/1/comments

Objetivo: Listar los correos de los usuarios que comentaron.

 */

async function mostrarCorreos() {
    const correos = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const resultadoCorreos = await correos.json();


    for(let i=0; i<resultadoCorreos.length; i++){
        
        console.log(`Usuario con el correo: ${resultadoCorreos[i].email} comento`);
    }
   
}
mostrarCorreos();
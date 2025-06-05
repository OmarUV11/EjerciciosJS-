/*Obtener lista de usuarios
URL: https://jsonplaceholder.typicode.com/users

Objetivo: Mostrar los nombres de los usuarios. */


async function obtenerNombresUsuarios() {
    
    const usuarios = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usuarios.json();

    users.forEach( resultado => {
        console.log(resultado.name);
    });

}
obtenerNombresUsuarios();

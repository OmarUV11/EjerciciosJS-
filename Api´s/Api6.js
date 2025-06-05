/*Ver detalles de un usuario

URL: https://jsonplaceholder.typicode.com/users/1

Objetivo: Mostrar nombre, correo y ciudad. */


async function mostrarInfo() {
    const informacion = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const resultadoInformacion = await informacion.json();
    
    

   console.log(`El nobre del usuario es: ${resultadoInformacion.name}, Su direccion es: ${resultadoInformacion.address} y vive en ${resultadoInformacion.address.city}`);

  
}

mostrarInfo();
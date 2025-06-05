/*URL: https://jsonplaceholder.typicode.com/posts

Objetivo: Mostrar los primeros 5 títulos. */


async function mostrarListros() {
    const libros = await fetch('https://jsonplaceholder.typicode.com/posts');
    const resultadoLibros = await libros.json();
    
    console.log("Estos son los 5 primeros libros:")
    for(let i=0; i<5 ; i++){
        console.log(resultadoLibros[i].title);
    }
    
}

mostrarListros();
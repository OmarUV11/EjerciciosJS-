//Simular un historial de pedidos de un usuario 


function cargarHistorialDeCompras(){
    return new Promise((resolve,reject ) => {
        console.log("Descargando productos de su historial espere....")
        const respuesta = true ;
        setTimeout(() =>{
                if(respuesta){
                        resolve('Se descargaron sus productos');
                }else{
                        reject('No se descargaron los productos');
                }
        },1000); //Todo este bloque de codigo es el codigo principal 
    })
}

function cargarLosUltimosCincoProductoConDescuento(){
    return new Promise((resolve,reject) => {
        console.log("Descargando los ultimos 5 productos...");
        const respuesta = true;
        setTimeout(() =>{
            if(respuesta){
                  resolve("Se descargaron los 5 productos")
            }else{
                 reject("No tuviste productos ultimamente");
            }
        },15000);
                  
    })
}


async function app() {
    const resultado = await Promise.all([cargarHistorialDeCompras(), cargarLosUltimosCincoProductoConDescuento()]); //El resultado que se muestra en el resolve es el await que se va a mostrar 
    console.log(resultado[0]);
    console.log(resultado[1]);//Con async tambien estamos ejecutando este codigo por detras 
}

app();
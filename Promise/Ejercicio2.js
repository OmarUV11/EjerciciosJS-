/*
Manejo de errores en promesas: Implementa una función que lance un error después de un tiempo determinado y maneja ese error utilizando .catch(). 

*/

const SegundoPromise = new Promise((resolve,reject)=>{
    let auto = false;
            if(auto){
                        setInterval(() =>{
                            resolve("Autenticacion Existosa");
                        }, 1000);
            }else{
                         setInterval(() =>{
                            reject("No se pudo autenticar");
                        }, 1000);
            }
           
});

SegundoPromise.then(respuesta => {console.log(respuesta)})
    .catch(error => console.log(error));
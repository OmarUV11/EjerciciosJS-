/**
 Promesa con operación asíncrona: Simula una operación asíncrona que resuelve o rechaza basándose en ciertas condiciones. 
 */

 function darUnaRespuesta(){
    return new Promise( (resolve,reject)=>{
            const respuesta = false ;
            setTimeout(() => { 
            if (respuesta){
                    resolve("Se accepto tu solicitud");
            }else{
                    reject("Se rechazo tu solicitud");
            }
            }, 10000)
           
    })
 }
 

async function app() {
        const respuesta = await darUnaRespuesta()
        console(`Respuesta ${respuesta}`)
}

app();
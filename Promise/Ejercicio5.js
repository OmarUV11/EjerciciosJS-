/*
Uso de then y catch: Utiliza then para manejar el éxito de una promesa y 
catch para manejar cualquier error que pueda surgir. 
*/



const sugerencia = new Promise((resolve,reject) =>{
    let respuesta = false;
        if(respuesta){
            resolve('Se resolvio la promesa');
        }else{
            reject('"no se resolvio la promesa"');
        }


});

sugerencia.then(resultado => { console.log(resultado)



}).catch(resultado =>{console.log(`Le sugiero arrelgar este error ${resultado}`)})
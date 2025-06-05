/*Encadenamiento de promesas: Crea una serie de promesas que se encadenen unas a otras, 
donde cada promesa depende del resultado de la anterior. 
*/


const cumplida = new Promise(() => { //Primer promise
            new Promise(() =>{
                setTimeout(() =>{
                    console.log(`Se cumplio la segunda promesa`)
                },10000);
                new Promise(() =>{
                     setTimeout(() =>{
                        console.log(`Se cumplio la tercera promesa`)
                      },13000);
                });
                  new Promise(()=>{
                    setTimeout(() =>{
                        console.log(`Se cumplio la cuarta promesa`)
                      },15000);
                  });
            });

            console.log(`Se cumplio la promesa principal `);
});


cumplida.then(resultado => {console.log(resultado);})
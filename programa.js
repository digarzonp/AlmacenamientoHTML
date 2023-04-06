 
let botonAlmacenar=document.getElementById("btnAlmacenar");
botonAlmacenar.addEventListener('click',()=>{

//almacenar un dato en ssesionstorage
//guarso un item en el sessionstorage cuya llave es nombre y valor paulo
    sessionStorage.setItem('nombre','paulo');
    sessionStorage.setItem('apellido','coronado');
    localStorage.setItem('nombre','paulo');
    localStorage.setItem('apellido','coronado')

});


let botonBorrar=document.getElementById("btnBorrar");

botonBorrar.addEventListener('click',function(){

    sessionStorage.clear();
    localStorage.clear();
})
 



function construirFilas(){

    //crear un arreglo con las fuentes de datos, para repetirlo dos veces

    let fuentes=[localStorage, sessionStorage];

    for(let k=0; k<fuentes.length;k++){

        let = miFuente= fuentes[k];
    
        for(let i=0; i<window.miFuente.length; i++){
            let cuerpoTabla=document.getElementById("cuerpoTabla");
            let fila=document.createElement("tr");
        
            //primera celda

            let celda=document.createElement("td");
            let texto=document.createTextNode(miFuente.key(i))
            celda.appendChild(texto)
            fila.appendChild(celda);

            //seggunda celda 
        
            celda = document.createElement("td");
            let valor=miFuente.getItem(miFuente.key(i));
            texto= document.createTextNode(valor)
            celda.appendChild(texto);
            fila.appendChild(celda);

        
            cuerpoTabla.appendChild(fila);

        }
    }
}
construirFilas()


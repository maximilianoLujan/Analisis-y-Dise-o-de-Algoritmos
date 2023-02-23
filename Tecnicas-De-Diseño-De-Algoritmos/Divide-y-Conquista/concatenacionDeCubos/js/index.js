
function concatenacionCubos(numero){
    const miObjeto = numero.toString().split("").reverse();    // Transforma el numero dado a string, lo divide y lo da vuelta con el metodo reverse
    const miArreglo = Object.values(miObjeto); // Como lo anterior nos devuelve un object, copiamos sus valores en un arreglo
    concatenacionCubosR(miArreglo,0,miArreglo.length - 1);
    return(miArreglo.join().replaceAll(",",""))
}
function concatenacionCubosR(arr,inic,fin){  
    if (inic == fin){
        const numero = parseInt(arr[inic]),
            cuboNumero = Math.pow(numero,3);
        arr[inic] = cuboNumero;
    } else{
        const mitad = Math.floor(inic + (fin - inic)/2);
        concatenacionCubosR(arr,inic,mitad);
        concatenacionCubosR(arr,mitad + 1 ,fin);
    }
}



let primerEjemplo = 5321


const respuesta = concatenacionCubos(primerEjemplo);


console.log(`La respuesta para el numero ${primerEjemplo} es ${respuesta}`);
function combina(sL,sR){
    if (sL != -1){
        return sL
    }
    if (sR != -1){
        return sR
    }
    return -1;
}

function encontrarIndice(arr,inic,fin){
    if (inic == fin){
        if (arr[inic] == inic){
            return arr[inic];
        } else {
            return -1;
        }
    }  else {
        const mitad = Math.floor(inic + (fin - inic)/2);
        let solucionL = encontrarIndice(arr,inic,mitad);
        let solucionR = encontrarIndice(arr,mitad + 1,fin);
        return combina(solucionL,solucionR) 
    }
}

const primerEjemplo = [-12 , 12 , 1 , 16];
const segundoEjemplo = [0 , 100 , 1 , 16];
const tercerEjemplo = [-12 , 1 , 2 , 16];
const cuartoEjemplo = [-12 , 120 , 3 , 3];


let solucionPrimerEjemplo = encontrarIndice(primerEjemplo,0,primerEjemplo.length - 1);
let solucionSegundoEjemplo = encontrarIndice(segundoEjemplo,0,segundoEjemplo.length - 1);
let solucionTercerEjemplo = encontrarIndice(tercerEjemplo,0,tercerEjemplo.length - 1);
let solucionCuartoEjemplo = encontrarIndice(cuartoEjemplo,0,cuartoEjemplo.length - 1);


console.log("Si se imprime un -1 no existe ningun elemento que coincide con su indice en el arreglo")
console.log(`En el arreglo [${primerEjemplo}] el elemento ${solucionPrimerEjemplo} coincide con su indice en el mismo ${solucionPrimerEjemplo}`);
console.log(`En el arreglo [${segundoEjemplo}] el elemento ${solucionSegundoEjemplo} coincide con su indice en el mismo ${solucionSegundoEjemplo}`);
console.log(`En el arreglo [${tercerEjemplo}] el elemento ${solucionTercerEjemplo} coincide con su indice en el mismo ${solucionTercerEjemplo}`);
console.log(`En el arreglo [${cuartoEjemplo}] el elemento ${solucionCuartoEjemplo} coincide con su indice en el mismo ${solucionCuartoEjemplo}`);
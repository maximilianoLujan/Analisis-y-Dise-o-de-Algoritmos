//Para este algoritmo necesitamos un combina ya que nuestra solucion
//se puede encontrar entre la parte izquierda y derecha del arreglo
function combina(arr,inic,mitad,fin){
        //sumaIzquierda y sumaDerecha son inicializados con valores muy chicos
        //Cualquier numero dentro del arreglo debe ser mayor a ese valor de 
        //inicializacion.
        let sumaIzquierda = -200;
        let suma = 0;
    
        for (let i = 0;i <= mitad;i++){
            suma = suma + arr[mitad - i];
            if (suma > sumaIzquierda){
                sumaIzquierda = suma;
            }
        }
    
        let sumaDerecha = -200;
        suma = 0;
        for (let j = mitad + 1; j <= fin;j++){
            suma = suma + arr[j];
            if(suma > sumaDerecha){
                sumaDerecha = suma;
            }
        }
    
        return sumaIzquierda + sumaDerecha
}


function subsecuenciaMaxima(arr,inic,fin){
    if (inic == fin){
        return arr[inic];
    }
    const mitad = Math.floor(inic + (fin - inic)/2);
    const left = subsecuenciaMaxima(arr,inic,mitad);
    const right = subsecuenciaMaxima(arr,mitad + 1,fin);
    const solMedia = combina(arr,inic,mitad,fin);
    return Math.max(left,right,solMedia)
}







const miArreglo = [4,30,-80,50,43,-100,-3]
const solucion = subsecuenciaMaxima(miArreglo,0,miArreglo.length - 1);
console.log('La secuencia maxima del arreglo ',miArreglo,'es: ',solucion)

const miArregloDos = [13,-3,-25,-20,-3,-10,-23,18,20,-7,12,-15,-22,15,-4,7]
const solucionDos = subsecuenciaMaxima(miArregloDos,0,miArregloDos.length - 1)
console.log('La secuencia maxima del arreglo ',miArregloDos,'es: ',solucionDos)
























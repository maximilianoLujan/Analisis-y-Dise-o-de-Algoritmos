function encontrarPrimerCero(arr , inic , fin){
    if (inic == fin){
        if (arr[inic] == 0){
            return inic
        } else {
            return -1
        }
    } else {
        const mitad = Math.floor(inic + ((fin - inic) / 2));
        if (arr[mitad] == 0){
            return encontrarPrimerCero(arr,inic,mitad)
        } else {
            return encontrarPrimerCero(arr,mitad + 1,fin)
        }
    }
}


//Declaro e inicializo los arreglos de ejemplo
const primerEjemplo = [ 1 , 1 , 0 , 0 , 0] //Deberia dar 2 ya que en el indice 2 se encuentra el primer 0
const segundoEjemplo = [0 , 0 , 0 , 0 , 0] //Deberia dar 0 ya que en el indice 0 hay un 0
const tercerEjemplo = [ 1 , 1 , 1 , 1 , 1] //Deberia dar -1 ya que no hay ningun 0 en el arreglo
const ejemploAdicional = [ 1 , 1 , 1 , 1 , 1 , 1 , 0 ] //Deberia dar 6 ya que en el indice 6 se encuentra el primer 0


//Guardo las respuestas en una constante
const indicePrimerEjemplo = encontrarPrimerCero(primerEjemplo, 0 , primerEjemplo.length - 1)
const indiceSegundoEjemplo = encontrarPrimerCero(segundoEjemplo, 0 , segundoEjemplo.length - 1)
const indiceTercerEjemplo = encontrarPrimerCero(tercerEjemplo, 0 , tercerEjemplo.length - 1)
const indiceEjemploAdicional = encontrarPrimerCero(ejemploAdicional, 0 , ejemploAdicional.length - 1)



//Imprimo las respuestas
console.log(`El indice del primer 0 del arreglo [${primerEjemplo}] es ${indicePrimerEjemplo}`)
console.log(`El indice del primer 0 del arreglo [${segundoEjemplo}] es ${indiceSegundoEjemplo}`)
console.log(`El indice del primer 0 del arreglo [${tercerEjemplo}] es ${indiceTercerEjemplo}`)
console.log(`El indice del primer 0 del arreglo [${ejemploAdicional}] es ${indiceEjemploAdicional}`)

//encontrarPrimerCero(tercerEjemplo, 0 , tercerEjemplo.length - 1)
function actividadesCompatibles(actividades){
    //Ordenamos la entrada de forma creciente respecto al tiempo de finalizacion
    actividades.sort((task,taskDos) => {
        if (task.fin > taskDos.fin){
            return 1
        } else {
            return -1
        }
    })
    let solucion = [];
    actividades.forEach(task => {
        //Si la solucion no tiene ningun elemento, agregamos el primero a la misma
        //Si no esta vacio, nos fijamos que la nueva tarea no comience antes de que la anterior finalice.
        if (solucion.length == 0){
            solucion.push(task);
        } else {
            if (task.comienzo >= solucion[solucion.length - 1].fin){
                solucion.push(task)
            }
        }
    })
    console.log(solucion)
}




//Creando el ejemplo para testear nuestra funcion
const taskUno = {
    name: 'B',
    comienzo: 1,
    fin:4
}
const taskDos = {
    name: 'C',
    comienzo: 3,
    fin:5
}
const taskTres = {
    name: 'A',
    comienzo: 0,
    fin:6
}
const taskCuatro = {
    name: 'E',
    comienzo: 4,
    fin:7
}
const taskCinco = {
    name: 'D',
    comienzo: 3,
    fin:8
}
const taskSeis = {
    name: 'F',
    comienzo: 5,
    fin:9
}
const taskSiete = {
    name: 'G',
    comienzo: 6,
    fin:10
}
const taskOcho = {
    name: 'H',
    comienzo: 8,
    fin:11
}


let actividades = [taskCinco,taskCuatro,taskOcho,taskUno,taskTres,taskDos,taskSeis,taskSiete]
actividadesCompatibles(actividades)
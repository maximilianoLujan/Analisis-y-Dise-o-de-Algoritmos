//Nuestra funcion mochilaGreedy recibe una lista de elementos con sus respectivos pesos y beneficion y
//un entero que hace referencia al peso de la mochila
function mochilaGreedy(pesoMochila,elementos){
    //Primero ordenamos los elementos segun el criterio de bi/pi en orden descendiente
    elementos.sort((el1,el2) => {
        pesoben1 = el1.beneficio/el1.peso;
        pesoben2 = el2.beneficio/el2.peso;
        if (!(pesoben1 < pesoben2)){
            return -1
        } else return 1
    })


    //En nuestra solucion vamos a almacenar los elementos y el beneficio de esa solucion
    let solucion = {
        elementos: [],
        ben:0,
        peso:0,
        particion:false
    }



    //Recorremos los elementos
    //Si la suma del peso del elemento mas el peso de nuestra solucion no supera el peso disponible de la mochila,
    //entonces agregamos el elemento a la solucion.
    //En caso contrario particionamos el elemento para que pueda ser agregado a nuestra solucion
    elementos.forEach((el) => {
        if (solucion.peso == pesoMochila){
            return
        } else {
            if ((el.peso + solucion.peso) <= pesoMochila){
                solucion.elementos.push(el);
                solucion.ben += el.beneficio;
                solucion.peso += el.peso;
            } else {
                solucion.particion = true;
                const espacioDisponible = (pesoMochila - solucion.peso);
                console.log('Tenemos solo ', espacioDisponible, ' de espacio disponible.');
                el.beneficio = espacioDisponible / el.peso * el.beneficio;
                el.peso = espacioDisponible;
                solucion.elementos.push(el);
                solucion.ben += espacioDisponible / el.peso * el.beneficio;
                solucion.peso += espacioDisponible;
            }
        }
    })
    console.log('Los elementos que podemos agregar son: ',solucion.elementos)
    console.log('Tenemos un beneficio de: ',solucion.ben);
    solucion.particion?console.log('El ultimo elemento fue particionado'):console.log('El ultimo elemento no fue particionado')
}

//Creamos ejemplos para poder testear nuestra funcion
const obj1 = {
    peso: 10,
    beneficio:15
}
const obj2 = {
    peso: 15,
    beneficio:24
}
const obj3 = {
    peso: 18,
    beneficio:25
}

let elementos = [obj1,obj2,obj3]
//Mochila con capacidad 20
mochilaGreedy(20,elementos)


const obj4 = {
    peso: 1,
    beneficio:5
}
const obj5 = {
    peso: 2,
    beneficio:2
}
const obj6 = {
    peso: 2,
    beneficio:2
}
const obj7 = {
    peso: 2,
    beneficio:20
}
let elementosSegundoEjemplo = [obj4,obj5,obj6,obj7];
//Mochila con capacidad 5
mochilaGreedy(5,elementosSegundoEjemplo)
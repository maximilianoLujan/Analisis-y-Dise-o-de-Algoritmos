#include <iostream>
#include <vector>
using namespace std;


int encontrarPrimerCero(const vector<int> arr,int inic,int fin);


int main()
{
    //Declaro e inicializo los vectores
    vector<int> primerEjemplo = { 1 , 1 , 0 , 0 , 0}; //Deberia dar 2
    vector<int> segundoEjemplo = { 0 , 0 , 0 , 0 , 0}; //Deberia dar 0
    vector<int> tercerEjemplo = { 1 , 1 , 1 , 1 , 1}; //Deberia dar -1
    vector<int> ejemploAdicional = { 1 , 1 , 1 , 1 , 1 , 0};//Deberia dar 5

    //Llamo a la funcion para obtener el indice
    int indicePrimerEjemplo = encontrarPrimerCero(primerEjemplo,0 , primerEjemplo.size() - 1);
    int indiceSegundoEjemplo = encontrarPrimerCero(segundoEjemplo,0 , segundoEjemplo.size() - 1);
    int indiceTercerEjemplo = encontrarPrimerCero(tercerEjemplo,0 , tercerEjemplo.size() - 1);
    int indiceEjemploAdicional = encontrarPrimerCero(ejemploAdicional,0 , ejemploAdicional.size() - 1);

    //Imprimo los valores obtenidos
    cout<< "El primer 0 del arreglo numero uno esta en la posicion " <<indicePrimerEjemplo <<endl;
    cout<< "El primer 0 del arreglo numero dos esta en la posicion " <<indiceSegundoEjemplo <<endl;
    cout<< "El primer 0 del arreglo numero tres esta en la posicion " <<indiceTercerEjemplo <<endl;
    cout<< "El primer 0 del arreglo del ejemplo adicional esta en la posicion " <<indiceEjemploAdicional <<endl;


    return 0;
}


int encontrarPrimerCero(const vector<int> arr,int inic,int fin){
    if (inic == fin){
        if (arr[inic] == 0){
            return inic;
        } else {
            return -1;
        }
    } else {
        int mitad = inic + (fin - inic)/2;
        if (arr[mitad] == 0){
            return encontrarPrimerCero(arr,inic,mitad);
        } else {
            return encontrarPrimerCero(arr,mitad + 1, fin);
        }
    }
}

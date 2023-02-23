#include <iostream>
#include <vector>

using namespace std;
void solucionMedia(vector<int> arr,unsigned int inic,unsigned int medio,unsigned int fin,unsigned int & inicioMedia,unsigned int & finMedia,int & cantMedia);
void mayorSubArreglo(vector<int> arr,unsigned int inic,unsigned int fin,unsigned int & inicioMax,unsigned int & finMax,int & cant);





int main(){
    vector<int> miArreglo = {4 , 30 , -80 , 50 , 43 , -100 , 10 , -3  };
    vector<int> miArregloDos = {13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7};



    //Probando el primer ejemplo
    unsigned int i,f;
    int c;
    mayorSubArreglo(miArreglo,0,miArreglo.size() - 1,i,f,c);

    cout<<"La suma maxima da "<<c<<" y se encuentra entre los indices "<<i<<" y "<<f <<" del arreglo"<<endl;

    //Probando el segundo ejemplo
    unsigned int in,fi;
    int ca;
    mayorSubArreglo(miArregloDos,0,miArregloDos.size() - 1,in,fi,ca);

    cout<<"La suma maxima da "<<ca<<" y se encuentra entre los indices "<<in<<" y "<<fi <<" del arreglo"<<endl;

    return 0;



}


void solucionMedia(vector<int> arr,unsigned int inic,unsigned int medio,unsigned int fin,unsigned int & inicioMedia,unsigned int & finMedia,int & cantMedia){
    int sumaIzquierda = -200;
    int suma = 0;

    for (int i = 0;i <= medio;i++){
        suma = suma + arr[medio - i];
        if (suma > sumaIzquierda){
            sumaIzquierda = suma;
            inicioMedia = medio - i;
        }
    }

    int sumaDerecha = -200;
    suma = 0;
    for (int j = medio + 1; j <= fin;j++){
        suma = suma + arr[j];
        if(suma > sumaDerecha){
            sumaDerecha = suma;
            finMedia = j;
        }
    }
    cantMedia = sumaIzquierda + sumaDerecha;
}


void mayorSubArreglo(vector<int> arr,unsigned int inic,unsigned int fin,unsigned int & inicioMax,unsigned int & finMax,int & cant){
    unsigned int inicioIzq,finIzq,inicioDer,finDer,inicioMedia,finMedia;
    int cantMedia,cantDer,cantIzq;
    if (inic == fin){
        inicioMax = inic;
        finMax = fin;
        cant = arr[inic];
    } else {
        unsigned int mitad = inic + (fin - inic)/2;
        mayorSubArreglo(arr,inic,mitad,inicioIzq,finIzq,cantIzq);
        mayorSubArreglo(arr,mitad + 1,fin,inicioDer,finDer,cantDer);
        solucionMedia(arr, inic,mitad,fin,inicioMedia,finMedia,cantMedia);


        if ((cantIzq >= cantDer) && (cantIzq >= cantMedia)){
            inicioMax = inicioIzq;
            finMax = finIzq;
            cant = cantIzq;
        } else {
            if ((cantDer >=cantIzq && cantDer >= cantMedia)){
                inicioMax = inicioDer;
                finMax = finDer;
                cant = cantDer;
            } else {
                inicioMax = inicioMedia;
                finMax = finMedia;
                cant = cantMedia;
            }
        }
    }
    cout<<"Indice"<<inicioMax<<"--"<<finMax<<"-------->"<<cant<<endl;
}

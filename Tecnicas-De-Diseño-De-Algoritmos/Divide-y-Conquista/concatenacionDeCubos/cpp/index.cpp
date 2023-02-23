#include <iostream>
#include <vector>
#include <cmath>
#include <string>
using namespace std;

int calcularCuboInverso(int & numero);
vector<int> obtenerNumero(int & numero);
int cuboInversoDyC(vector<int> & arr,int inic,int fin);

int main(){
    int primerEjemplo = 5321;
    int segundoEjemplo = 7321;


    int respuestaPrimerEjemplo = calcularCuboInverso(primerEjemplo);
    int respuestaSegundoEjemplo = calcularCuboInverso(segundoEjemplo);



    cout<<"El resultado es: " << respuestaPrimerEjemplo << endl;
    cout<<"El resultado es: " << respuestaSegundoEjemplo << endl;
    return 0;
}




int calcularCuboInverso(int & numero){
    vector<int> miArreglo = obtenerNumero(numero);
    cuboInversoDyC(miArreglo,0,miArreglo.size() - 1);
    string respuesta = " ";
    for (int i = 0;i < miArreglo.size() ;i++){
        respuesta += std::to_string(miArreglo[i]);
    }
    return std::stoi(respuesta);
}
vector<int> obtenerNumero(int & numero){
    bool termine = false;
    vector<int> resultado;
    while(!termine){
        int resto = (numero % 10);
        numero = numero / 10;
        resultado.push_back(resto);
        if (numero == 0){
            termine = true;
        }
    }
    return resultado;
}
int cuboInversoDyC(vector<int> & arr,int inic,int fin){
    if (inic == fin){
        arr[inic] = pow(arr[inic],3);
    } else {
        int mitad = inic + (fin - inic)/2;
        cuboInversoDyC(arr,inic,mitad);
        cuboInversoDyC(arr,mitad + 1,fin);
    }
}

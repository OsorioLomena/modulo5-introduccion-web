// Fundamentos Básicos I (Los 13 Algoritmos básicos)
// Objetivos
// Entender lo básico de ciclos for, declaraciones if/else, y funciones. 
// Ser capaz de construir algoritmos básicos en preparación para el track de Java.


// 1.- Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function suma_1_255(){
    var arr = [];
    for (var i = 1; i <= 255; i++){
        arr.push(i);
    }
    return arr;
}




// 2.-
// Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números 
// pares del 1 al 1000 - 
// Puedes usar un operador de módulo para este ejercicio. 

function SumaPares(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++){
        if (i % 2 == 0){
            sum = sum + i;
        } 
    }
    return sum;
}




// 3 .-
// Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares 
// entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

function sumaImpares(){
    var sum = 0;
    for (var i = 1; i <= 5000; i+=2){
        if (i % 2 == 1){
            sum = sum + i;
            console.log(i);
        }
    }
    return sum;
}



// 4.-
// Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array
//  (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

function sumaArr(numArr){
    var sum = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    return sum;
}
var resultado = sumaArr(numArr);
console.log(resultado);



// 5.-
// Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función 
// que devuelva el número mayor
//  (ej: para [-3,3,5,7] el número mayor (max) es 7). 

function buscaMax(numArr){
    var max = numArr[0]; // sets the maximum to the first value in the array
    for (var i = 0; i < numArr.length; i++){ // for loop to examine each value in the array
        // see if the next value is bigger than the maximum
        if (numArr[i] > max){
            // if it is, make it the new max
            max = numArr[i];
        }
    }
    return max;
}

var resultado = buscaMax(numArr);
console.log(resultado);




// 6.-
// Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una 
// función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

function findAvg(numArr){
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    avg = sum / numArr.length;
    return avg;
}
console.log(findAvg([5,7,9]));



// 7.-
// Array de impares: Escribe una función que devuelva un array de todos los números 
// impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function impArr() {
    var arr = [];
    for (var i = 1; 1 <= 50; i++){
        if (i % 2 !== 0){
            arr.push(i);
        }
    }
    return arr;
}


// 8.-
// Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores 
// mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 
// (hay 2 números en el array mayores que 3, esto son 5 y 7). 

function arrmenor(arr, Y) {
    var count = 0;
    for (i = 0; i <= arr.length; i++){
        if (arr[i] > Y){
            count++
        }   
    }
    return count;
}



// 9.-
// Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor 
// por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function cuadArr(arr) {
    for(var i = 0; i <= arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
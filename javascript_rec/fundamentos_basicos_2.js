// Fundamentos Básicos II

// 1.-
// Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos 
// en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].


function camArr(arr) {
var numArr = [];
    for (var i = 0; i < numArr.length; i++){
     if(numArr[i] > 0){
         numArr[i] = "big";
    }
}
return numArr;
}

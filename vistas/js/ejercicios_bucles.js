// Estructura For
//Imprimir en consola los números desde el 0 hasta el número n 
//separados por -

let n = 10
let salida = ""
for (let index = 0; index <= n; index++) {
    
        if (index == n) {
            salida = salida + index
        }else{
            salida = salida + index + "-"
        }
    }
    
console.log(salida)


// Imprimir en consola los números desde el 0 hasta el -n separados por ;

for (let index = 0; index => -n; index--) {
    
        if (index == n) {
            salida += index  //salidas = salida + index + ";"
        } else{
            salida += index * + ";"
        }
    }
    
console.log(salida)

// Realizar la suma acumulativa de números desde el 0 hasta n y 
// mostrar en consola la suma total con el mensaje "suma total: suma_total"

let suma = 0

for (let index = 0; index < index <= n; index++) {
    suma += index
}
console.log( "La suma es: " + suma)
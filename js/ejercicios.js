// ejercicio 1
let n = 3
let m = 5
let r =  n + m
console.log(r)

//ejercicio 2
let a = 3
let b = 4
let c = 8
let d = 9
let e = 10
let z = a * b * c * d * e
console.log(z)

//ejercicio 3
let x = 8
let y = 9
let z1 = 5
let w = ((x + z1) * y * y)
console.log(w)

// ejercicio 4
let texto1 = "Luis  "
let texto2 = "Osorio"
console.log(texto1 + texto2)

// ejercicio 5
// Dado 3 variables a, b y c; imprimir en consola el resultado de la operación. 5 + 3 + 7 = 537
 

a = "5"// le da nuevo valor a... mas arriba se uso a pero reasigno el valor
b = "3"
c = "7"
d = a+b+c

console.log(a + " + " + b + " + " + c + " = " + d)


// ejercicio 6 
// Dado los siguientes objetos javascript (JSON)
// Imprimir un saludo para el usuario según un número n. Por ejemplo, si n = 3 
// debería imprimirse en consola "Hola, sebastián gonzales"
//1. Dado un número b realizar la siguiente operación
//1. Dado un número b realizar la siguiente operación



let usuario1 = { nombre: "juan", apellido: "perez" }
let usuario2 = { nombre: "sara", apellido: "aparicio" }
let usuario3 = { nombre: "sebastián", apellido: "gonzales" }
let usuario4 = { nombre: "catalina", apellido: "rodriguez" }
let usuario5 = { nombre: "laura", apellido: "quintanilla" }
let usuario6 = { nombre: "camila", apellido: "lopez" }
let usuario7 = { nombre: "carlos", apellido: "gutierrez" }
let usuario8 = { nombre: "sergio", apellido: "chacon" }

n = 1



if(n == 1) {
    console.log("Hola, " + usuario1.nombre + " " + usuario1.apellido)
}else if(n == 2) {
    console.log("Hola, " + usuario2.nombre + " " + usuario2.apellido)
}else if(n == 3) {
    console.log("Hola, " + usuario3.nombre + " " + usuario3.apellido)
}else if(n == 4) {
    console.log("Hola, " + usuario4.nombre + " " + usuario4.apellido)
}else if(n == 5) {
    console.log("Hola, " + usuario5.nombre + " " + usuario5.apellido)
}else if(n == 6) {
    console.log("Hola, " + usuario6.nombre + " " + usuario6.apellido)
}else if(n == 7) {
    console.log("Hola, " + usuario7.nombre + " " + usuario7.apellido)
}else if(n == 8) {
    console.log("Hola, " + usuario8.nombre + " " + usuario8.apellido)
}else{
    console.log("no hay datos")
}

// ejercicio 6 A con array .. ARREGLO

let usuarios = [usuario1,usuario2,usuario3,usuario4,usuario5,usuario6,usuario7,usuario8]
if (n <= usuarios.length){
console.log( usuarios[n-1].nombre)
 }else{
     console.log (" no hay datos")
 }

 // estructura IF

 // ii.- Dado dos variables numéricas a y b, deterinar cuál de los dos es mayor
 
 a = 5
 b = 5


if(a > b) {
    console.log("el numero mayor es: " + "a")
}else if(a < b) {
    console.log("el numero mayor es: " + "b")
}else console.log("a es igual a b ")


 // iii.- Dados dos variables numéricas a y b, determinar cuál es mayor, cuál es menor o si son iguales

a = 5
 b = 7


if(a > b) {
    console.log("el numero mayor es: " + "a")
}else if(a < b) {
    console.log("el numero mayor es: " + "b")
}else console.log("a es igual a b ")


// Dado un número n, determinar si es un número par


a = 8
b = 6


if ((a%2) ==  0) {
    console.log("el numero es par")
} else { 
    console.log("el numero es impar")
} 


// Dado un número n, determinar si es un número impar

a = 5
b = 6


if ((a%2) ==  0) {
    console.log("")
} else { 
    console.log("el numero es impar")
} 

// Realizar un software para el control del ingreso de pesonas al cine, donde las películas se dividen en las 
//siguientes categorías:

//let A // => Todo público
//let B // => Desde 9 años
//let C // => Desde 18 años
//let D // => Desde 25 años

// El usuario debe ingresar su edad y la categoría de la película que desea ver 
// y el software deberá imprimir en consola si puede no ver la película según la clasificación.


 //if(n < 18) {
 //    console.log(" Pelicula NO apata. No puedes verla")
 // } else {
 //    console.log("Si puedes ver la pelicula")
 //            }

 // prompt("Texto descriptivo","Texto por defecto");


// categoria = {"A", "B", "C", "D"}



let edad = prompt("Ingrese su edad")
let categoria = prompt("Ingrese Categoria A B C o D").toUpperCase()

if (edad >= 0 && categoria == "A"||categoria == "B"||categoria == "C"||categoria == "D") {

    if (categoria == "A"){
        alert("Si puede ver la pelicula cat A")
    } else if (categoria == "B" && edad >= 9){
        alert("Si puede ver la pelicula cat B")
    }else if (categoria == "C" && edad >= 18){
            alert("SI puedes ver la pelicula categoria C")
    }else if (categoria == "D" && edad >= 25){
            alert("SI puedes ver la pelicula categoria D")
    }else{ 
            alert("PARA LA CASA")
    }
    }else{
        alert("Edad o categoria invalida")
}
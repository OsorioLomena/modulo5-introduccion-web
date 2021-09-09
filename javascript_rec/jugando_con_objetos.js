// Jugando con Objetos
// Objetivos
// Practica iterar por medio de un array de objetos/diccionarios.
// Imagina que se te entrega un array de objetos. Por ejemplo,

// var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
// ¿Cómo harías print/log de la edad de John?
// ¿Cómo harías print/log del nombre del primer objeto?
// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
// ¿Cómo harías para imprimir el nombre de los mayores de edad?

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

// 1. edad de Johon
console.log(users[1].age);


// 2. nombre del primer objeto
console.log(users[0].name)

// 3.- nombre y la edad de cada usuario

for (var i = 0; i <= users.length; i++){
  console.log(user[i].name, "-", users[i].age);
} 


// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop?
for (i = 0; i <= users.length; i ++) {
  console.log(users[i].name, "-", users[i].age)
}


// ¿Cómo harías para imprimir el nombre de los mayores de edad?
for (i = 0; i <= users.length; i ++) {
  if (users[i].age >= 18){
     console.log(users[i].name, "-", users[i].age)
  }
}


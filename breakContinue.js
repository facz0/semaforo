// break y continue
const numeros = [1,2,3,4,5,6,7,8,9]

//para la iteración según la condición que tu le das
for(let i = 0; i < numeros.length; i++){
    if(i === 5){
        break
    }
    console.log(numeros[i])
}

//salta la posición que le sigue a la condición
for(let i = 0; i < numeros.length; i++){
    if(i === 5){
        continue
    }
    console.log(numeros[i])
}

// Destructuración de arreglos y objetos
// se trata de asignar el valor de los elementos a variables de manera independiente
const objeto ={
    nombre: "Fabrizio",
    apellido: "Cossío",
    edad: 23
}

let {nombre, apellido, edad} = objeto
console.log(`Nombre ${nombre}, Apellido ${apellido}`)
// ahora hay 3 variables: nombre, apellido, edad que tienen como valor asignado 
// Fabrizio, Cossío y 23.



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


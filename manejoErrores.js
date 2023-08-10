// errores

try{
    //código a evaluar
} catch(error){
    //Catch captura cualquier error surgido en el try
} finally{
    //el bloque finally se ejecutará siempre al fina de un lboque try-catch
}

try{
    let numero = "y";
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un número")
    }
    console.log(numero * numero)
} catch(error){
    console.log(`se pordujo el siguiente error: ${error}`)
}

const num_piezas = 10
const prob_error = 0.25

let correctas = 0
let defectuosas = 0

const comprobarSiEsDefectuosa = () => Math.random() < prob_error

for(let i = 0; i <= num_piezas; i++){
    const esDefectuosa = comprobarSiEsDefectuosa()

    try{
        if (esDefectuosa === true){
            throw `-> Pieza ${i} defectuosa`
        } correctas++
    }catch(err){
        defectuosas++
    }
}

console.log(`Fabricadas: ${num_piezas}`)
console.log(`-> Correctas: ${correctas}`)
console.log(`-> Defectuosas: ${defectuosas}`)


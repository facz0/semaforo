// parametros Rest y operador Spread
//Rest
function sumar(a, b,...c){
    let res = a +b;
    c.forEach(function(n){
        res += n
    })
    return res;
}
//rest añade tantos parámetros cunato queramos
console.log(sumar(2,4))
console.log(sumar(2,4,3))
console.log(sumar(2,4,3,5))
console.log(sumar(2,4,3,5,6))
console.log(sumar(2,4,3,5,6,9))
 
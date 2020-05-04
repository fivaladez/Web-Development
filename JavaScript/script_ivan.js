// Funciones
const calculadora = (operation, ...values) => {
    result = 0
    switch (operation) {
        case '+':
            for (value of values) {
                result += value
            }
            break
        case '-':
            result = values[0]
            for (value of values) {
                result -= value
            }
            break
        case '/':
            result = values[0] * values[0]
            for (value of values) {
                result /= value
            }
            break
        case '*':
            result = 1
            for (value of values) {
                result *= value
            }
            break
        default:
            break
    }
    return result
}
console.log(calculadora('+', 1, 2))
console.log(calculadora('-', 1, 2))
console.log(calculadora('/', 1, 2))
console.log(calculadora('*', 1, 2))

// Strings
mensaje = 'Hola prros, cómo están? Espero muy bien! :)'
for(letra of mensaje){
    console.log(letra.toUpperCase())
    //console.log(letra.toLowerCase())
}
console.log(mensaje.trim())
console.log(mensaje.substring(5, 8))// [start, End]
console.log(mensaje.substr(5, 4))// [start, Cuantos]

// Arrays
mensajes = ['hola', 'adios', 'Que onda', 5]
console.log(mensajes.length)
console.log(mensajes.sort())
console.log(mensajes.find(element => element === 'adios'))
for(msj of mensajes){
    console.log(msj)
}
mensajes.forEach((element, i) => {
    console.log(i + ' - ' + element)
});
console.log(mensajes.some(el => el === 5))
numeros = [1, 2, 3, 4, 5]
console.log(numeros.every(el => el < 6))
console.log(numeros.map(el => el * 2))
console.log(numeros.filter(el => el < 4))
console.log(numeros.reduce((a, b) => a + b))
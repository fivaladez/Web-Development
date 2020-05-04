/* 
Cohertion:
JS adivina el tipo de dato que se necesita para cada operación.
*/
console.log('Hola ' + 10)
console.log('2' * 10)
console.log('Adios' * 10) //NaN
console.log(false + 2)

/* 
Dinamico:
Las variables pueden cambiar de tipo durante ejecución 
*/
let myVar = 10
console.log(myVar)
myVar = 'Ivan'
console.log(myVar)
/*
Asignación por valor o referencia
    Referencia: pasar dirección
    Valor: Solo el contenido de una variable
*/
let x = [1, 2, 3]
let y = x
y[0] = '?' // Referencia
console.log(y[0])

console.log(5 == '5')// Evitar usar doble igualdad
console.log(5 === '5') // Compara valor y tipo de dato
console.log(5 !== '5')// Compara valor y tipo de dato

let number = 1
number++
number--
++number
--number

let edad = prompt('Edad?')
// Operador ternario
console.log(edad > 18 ? 'Adult' : 'Kid')
// Operador corto circuito
let a
let b = a || 'Juan'
console.log(b)
let e = null && a
console.log(e)

// Numeros
let n = 2.23443636
console.log(n.toFixed(2))
console.log(parseInt(n))
console.log(parseFloat(n))
console.log(Math.floor(n))
console.log(Math.ceil(n))
console.log(Math.random() * 10)

// Strings
let myString = '  Hola   mundo !'
console.log(myString.length)
console.log(myString.toUpperCase())
console.log(myString.toLowerCase())
console.log(myString.trim())
let answer = prompt('Capital de Jalisco').toLowerCase().trim()
console.log(answer === 'guadalajara' ? 'Correcto!' : 'Error!')
console.log(myString.indexOf('o'))
console.log(myString.lastIndexOf('o'))
console.log(myString.includes('o'))
console.log(myString.startsWith('o'))
console.log(myString.endsWith('o'))
console.log(myString.replace('o', 'x'))
console.log(myString.split('l'))
console.log(myString.substring(2, 5))// [start, End]
console.log(myString.substr(2, 5))// [start, Cuantos]
console.log(myString.slice(2, 5))
console.log(myString.substring(2, -1))// [start, Negativo] Extrae hacia Atras
console.log(myString.substr(-4))// [start, Negativo] Extrae desde el final




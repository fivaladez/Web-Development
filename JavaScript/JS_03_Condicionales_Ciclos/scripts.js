// Con una sola línea
if (5 > 2) console.log('Ejecutar en linea')

// Bloque
if (5 > 2 && 3 > 1) { // And
    console.log('Ejecutar bloque if')
} else if (5 < 10 || 2 > 5) { // Or
    console.log('Ejecutar bloque else if')
} else {
    console.log('Ejecutar bloque else')
}

// Scope
{
    let x = 1
    console.log(x)
}

let age = parseInt(prompt('Dime tu edad: '))
if (age) {
    if (age >= 18) {
        alert('Eres mayor de edad')
    } else {
        alert('Te faltan años')
    }
} else {
    age = parseInt(prompt('Tu edad debe ser un numero '))
}

// Falsy values
if (0) console.log('Falsy value')
if ('') console.log('Falsy value')
if (NaN) console.log('Falsy value')
if (null) console.log('Falsy value')
if (undefined) console.log('Falsy value')
// Truthy values
if (2) console.log('Truthy value')
if ('fg') console.log('Truthy value')
if ([]) console.log('Truthy value')
if ({}) console.log('Truthy value')

// Switch
let answer = prompt('Escoge una letra: a - b').toLowerCase().trim()
switch (answer) {
    case 'a':
        alert('Eres timido')
        break
    case 'b':
        alert('Eres extrovertido')
        break
    default:
        alert('Eres raro')
}

// Loops
for (let i = 0; i <= 100; i++) {
    if (i % 21 === 0) continue
    if (i % 77 === 0) break
    if (i % 7 === 0) console.log(i)
}

let i = 0
while (i < 10) {
    console.log(i)
    i++
}
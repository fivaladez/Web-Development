function saludar(persona, sexo = 'm') {
    let saludo = sexo === 'm' ? 'Bienvenido' : 'Bienvenida'
    return `${saludo} ${persona}`
}

console.log(saludar('Ivan'))
console.log(saludar('Susana', 'f'))

const saludarFlecha = (persona, sexo = 'm') => {
    let saludo = sexo === 'm' ? 'Bienvenido' : 'Bienvenida'
    return `${saludo} ${persona}`
}

console.log(saludarFlecha('Ivan'))
console.log(saludarFlecha('Susana', 'f'))

const sumar = (a, b) => a + b
console.log(sumar(1, 2))

/*
Cuando no hay argumentos suficientes para los parametros,
y estos parametros no tienen un valor por defecto, se convierten en undefined
*/

// Parametro rest - spread operator
// Parametro variables agrupados en un objeto array
const sumarTodos = (...numeros) => {
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i]
    }
    return resultado
}
console.log(sumarTodos(1, 2, 3, 4))

// Asignar una funcion a una variable
const c = console.log
const multiplicar = (a, b) => a * b
c(multiplicar(7, 2))

let edad = multiplicar(5, 4)
let edad2 = multiplicar(edad, 4)
let edad3 = multiplicar(multiplicar(5, 4), 4)

// Regresar una funcion
function sumaReturn(x) {
    return function (y) {
        return x + y
    }
}
// Mandar ejecutar la funcion de retorno ()() - Clousures
c(sumaReturn(5)(2))
// Regresar una funcion - Con flecha
const sumaReturn2 = x => y => x + y
c(sumaReturn2(5)(2))

// Ejercicio
const doSomething = x => y => x * y
const a = doSomething(2)(2) // 4
const b = doSomething(3) // funcion y, pero ya con 'x' valiendo 3
c(doSomething(a)(b(3))) // (4)(y(3) === 9) === 4*9 = 36


/*
Tipos de funciones:
    - Puras: No modifica valores externos de la funcion
*/
let d = 'Hola'
const saludos = (saludo, persona) => `${saludo} ${persona}`
c(saludos(d, 'Luis'))

// Pasar una funcion abonima como parametro
setTimeout(() => {
    alert('Hola EDteam')
}, 3000)

// Scope
{
    let profesor = 'Alexys'
    {
        c(profesor)
    }
}

function aumentar() {
    let numero = 0
    return function () {
        numero++
        c(numero)
    }
}
const incrementar = aumentar()
incrementar()
incrementar()
incrementar()
incrementar()
incrementar()

// This
let user = {
    nombre: 'Ivan',
    edad: 24,
    getEdad() {
        c(this.edad)
    }
}
user.getEdad()
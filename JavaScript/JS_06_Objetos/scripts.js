perro = {
    // variable: value, 
    nombre: 'Bobby',
    color: 'cafe',
    sexo: 'macho',
    vacunas: true,
    edad: 6,
    correr() {
        console.log(`${this.nombre} corre`)
    },
    'ape-llido': 'Valadez'
}

console.log(perro.nombre)
console.log(perro.edad)
console.log(perro.vacunas)
console.log(perro.correr())
console.log(perro['ape-llido'])


let a = 2
let b = 3
let myObject = {
    a: a,
    b: b
}
// Eliminar propiedades
console.log(delete perro.color)

// Añadir propiedades
perro.edad2 = 5
console.log(perro.edad)

const c = console.log
// Prototipos
c(Object.getPrototypeOf(perro))
c(Object.getPrototypeOf('Hola mundo'))

// .prototype - añade propiedades a un objeto base
String.prototype.length2 = 10
c("Hola".length2)

// in
/* Tambien muestra las propiedades heredadas del objeto */
c('sexo' in perro)
for (let property in perro) {
    if (perro.hasOwnProperty(property)) { // Evita que imprima propiedades heredadas
        c(property)
    }

}

// Asignación por valor
b = 'Beto'
i = b
i = 'Ivan'
c(b)

// Asignación por referencia
let obj = {
    p: 'Hello',
    o: 'World'
}
let q = obj
obj.s = 'Adios'
c(q)

/*
Recorrer un objeto
    for in - Devuelve propiedades heredadas
    for of - Solo para objetos iterables (indices) - Onjetos no
    Object.entries() - Devuelve propiedad y valor de elementos
    Object.keys() - Devuelve propiedades
    Object.values() - Devuelve valores
*/
c(Object.entries(perro))
c(Object.keys(perro))
c(Object.values(perro))
let array = ['hola', 2, true, undefined, Array(4), {}]
console.log(array)

array[1] = 3
console.log(array)

// Desestructuracion
let [s1, s2, s3, s4, s5] = array
console.log(s3)

let arr = [1, 2, 3, 4]
arr.push(5) // Agrega al final
console.log(arr)

arr.pop() //    uita el último
console.log(arr)

arr.unshift('Nuevo')// Inserta al inicio
console.log(arr)

arr.shift()// Elimina el primero
console.log(arr)

array = ['Mexico', 'Peru', 'Colombia', 'Mexico', 'Bolivia']
console.log(array)

array.splice(2, 0, 'Chile', 'Ecuador')// (posicion, cantidad elementos a eliminar, valores)
console.log(array)

// Devuelve elementos que elimina
array.splice(4, 2, 'Costa Rica')// (posicion, cantidad elementos a eliminar, valores)
console.log(array)

// (start_index, end_index) - Regresa nuevo array sin modificar el original
console.log(array.slice(2, 4))

// Separa el string en un array, lo voltea y luego lo vuelve a juntar a string
const reverseText = string => string.split('').reverse().join('')
console.log(reverseText('Ivan Valadez'))

// Orena strings en el array
let arr2 = ['a', 'f', 'z', 'b']
console.log(arr2.sort())

// Ordenar numeros de menos a mayor
arr3 = [2, 6, 1, 0, 200, 35, 42, 3]
console.log(arr3.sort((a, b) => a - b))

// Concatenar arrays
console.log(arr3.concat(1, 2, 3))

// Regresa el index de coincidencia
console.log(arr3.indexOf(42))
// Regresa -1 si no encuentra coincidencia
console.log(arr3.indexOf(2000))

// Recibe una callback (funcion) y regresa la primera coincidncia con true
console.log(arr3.find(number => number > 100))

// Recibe una callback (funcion) y regresa el index de la primera coincidncia con true
console.log(arr3.findIndex(number => number > 100))

// Con el objeto Set, eliminas elementos duplicados.
// Con el spread operator (...) se separan por elementos
console.log([...new Set(arr3)])


console.log(Math.min(...arr3))
console.log(Math.max(...arr3))

// For of
teachers = ['Susana', 'Beto', 'Daniel', 'Ivan', 'Walter']
for (teacher of teachers) {
    console.log(teacher)
}

// For each
teachers.forEach((el, i, array) => {
    console.log(el + ' ' + i)
})

// some(callback) y every(callback)
// Busca por algun elemente que coincida y regresa true
console.log(teachers.some(el => el === 'Susana'))
// Busca que todos coincidan y regresa true
console.log(teachers.every(el => el.length >= 3))

// map(callback)
newArr = arr3.map(el => el * el)
console.log(newArr)
// filter(callback)
newArr = arr3.filter(el => el > 5)
console.log(newArr)
// reduce(callback) compara de 2 en dos
newArr = arr3.reduce((a, b) => a + b)
console.log(newArr)
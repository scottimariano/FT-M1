'use strict'

const ConsoleLogger = require("@11ty/eleventy/src/Util/ConsoleLogger")

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
    if (array.length <= 1){
    return array
  }
  
  let indicePivote = Math.floor(Math.random() * array.length)
  let pivote = array[indicePivote]
  let array1 = []
  let array2 = []
  let arrayEquals = []
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivote) array1.push(array[i])
    if (array[i] === pivote) arrayEquals.push(array[i])
    if (array[i] > pivote) array2.push(array[i])  
  }

  return quickSort(array1).concat(arrayEquals.concat(quickSort(array2)))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  function merge(left, right) {
    let result = [];
    while(left.length && right.length){  // comprueba si alguno de los dos arrays esta vacio
      if(left[0] < right[0]){
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
      
    }
    return [...result, ...left, ...right] // desempacar lo que resta del arreglo
  }


  const half = array.length / 2;
 
  if(array.length < 2) return array // caso base para romper la recursividad

  const left = array.splice(0, half) // crea la primera mitad del array y la asigna a left. El resto del array solo queda con la segudna mitad al realizarle el splice.


  return merge(mergeSort(left),mergeSort(array))

}

//console.log(mergeSort([5,3,6,22,43,3]))


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:  
  let array = []

  return array

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swapping = true;
  const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
  };

  while (swapping) {
    swapping = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapping = true;
      }
    }
  }

  return array;
};
  
//console.log(bubbleSort([9, 8, 7, 12, 10, 4, 3, 2, 1]))

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++){
    let temp = array[i];

    for(let j = i; array[j] < array[j-1]; j--){
      array[j] = array[j-1];
      array[j-1] = temp
      temp = array[j-1]
    }
  }
  return array
}

//console.log(insertionSort([9, 8, 7, 12, 10, 4, 3, 2, 1]))

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0; i < array.length - 1; i++){
    let item = array[i]
    let indice = i
    let menor = array[i]
    for(let j = i + 1;j<array.length;j++){
      if (array[j]< menor){
        menor = array[j]
        indice = j
      }
    }
    array[i] = menor
    array[indice] = item
  }
  return array
}

console.log(selectionSort([9, 1,7, 12, 4, 10]))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

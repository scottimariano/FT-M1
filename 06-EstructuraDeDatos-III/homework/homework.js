"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

//function BinarySearchTree() {}

class BinarySearchTree{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }

  size() {
    let count = 1;
    if (this.left) {
      count ++
      this.left.size()
    }

    if (this.right){
      count ++
      this.right.size()
    }
    return count
  }

  insert(value){
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value)
        return
      }
      this.left.insert(value)
    } else {
      if (!this.right) {
        this.right = new BinarySearchTree(value)
        return
      }
      this.right.insert(value)
    }
  }

  contains(value){
    if(value === this.value){
      return true
    } else {
      if (value < this.value) {
        if (!this.left) return false
        else return this.left.contains(value)
      };
      if (value > this.value) {
        if (!this.right) return false
        else return this.right.contains(value)
      }
    }
  }

  depthFirstForEach(cb,order = 'in-order'){
    if (order === 'in-order'){
      if (this.left) this.left.depthFirstForEach(cb,order)
      cb(this.value)
      if (this.right) this.right.depthFirstForEach(cb,order) 
    };
    if (order === 'pre-order'){
      cb(this.value)
      if (this.left) this.left.depthFirstForEach(cb,order)
      if (this.right) this.right.depthFirstForEach(cb,order) 
    };
    if (order === 'post-order'){
      if (this.left) this.left.depthFirstForEach(cb,order)
      if (this.right) this.right.depthFirstForEach(cb,order) 
      cb(this.value)
    };
  } 


  breadthFirstForEach(cb, array = []){
    //console.log(this)
    if(this.left) array.push(this.left)
    if(this.right) array.push(this.right)
    cb(this.value)
    if(array.length) array.shift().breadthFirstForEach(cb, array)
  }
}

// var tree,
//     testArr,
//     valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];

// tree = new BinarySearchTree(20);
//testArr = [];
// tree.insert(12);
// tree.insert(11);
// tree.insert(10);
// tree.insert(22);
// console.log(tree.contains(1))
// console.log(tree)
// valuesToInsert.forEach(function(value){
//    tree.insert(value);
// });
// console.log(tree.depthFirstForEach(function(val){ testArr.push(val); }));
//console.log(tree.breadthFirstForEach(function(val){console.log(val)}))


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

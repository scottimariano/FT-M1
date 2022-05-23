'use strict'

const ConsoleLogger = require("@11ty/eleventy/src/Util/ConsoleLogger")

function BinarioADecimal(num) {
  // tu codigo aca
  let str = num.toString()
  let resultado = 0
  for (let i = 0; i < str.length; i++) {
    resultado += (parseInt(str[i]) * Math.pow(2,(str.length -i - 1)))
  }
  return resultado
}

function DecimalABinario(num) {
  // tu codigo aca
let numero = num;
let newArray = [];
//let str = '';
while (numero / 2 > 0) {
  //let resto = numero % 2
  newArray.unshift(numero % 2)
  numero = Math.floor(numero / 2)
}

return newArray.join('')
}

console.log(DecimalABinario(21))

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
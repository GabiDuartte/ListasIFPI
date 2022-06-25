const input = require('prompt-sync')()

// Entrada
const numero = Number(input('Informe um numero de 3 digitos: '))

// Processamento
const centena = numero / 100
const resto = numero % 100
const dezena = resto / 10
const unidade = resto % 10

// Saída
console.log('A inversão dos algarismos e: ', unidade)
console.log(dezena)
console.log(centena)
const input = require('prompt-sync')()

// Entrada
const num1 = Number(input('Valor do primeiro numero: '))
num2 = Number(input('Valor do segundo numero: '))
num3 = Number(input('Valor do terceiro numero: '))

// Processamento
const media = (num1 + num2 + num3) / 3

// Saída
console.log('A media desses valores e: ', media)
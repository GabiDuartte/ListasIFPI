const input = require('prompt-sync')()

// Entrada
const massa_kg = Number(input('Valor da massa (kg): '))

// Processamento
const massa_g = massa_kg * 1000

// Saída
console.log('O valor da massa em gramas e: ', massa_g)
const input = require('prompt-sync')()

// Entrada
const raio = Number(input('Valor do raio da esfera: '))

// Processamento
const volume =( 4 * 3.14 * raio^3) / 3

// Saída
console.log('O valor do volume da esfera e: ', volume)
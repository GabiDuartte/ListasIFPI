const input = require('prompt-sync')()

// Entrada
const dias = Number(input('Valor da idade em dias: '))

// Processamento
const ano = dias / 365
const meses = dias / 12

// Saída
console.log('O valor da idade', dias, ' em dias para ano e mese e: ', ano, meses)
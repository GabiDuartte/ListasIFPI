const input = require('prompt-sync')()

// Entrada
const meses = Number(input('Informe o valor em meses: '))

// Processamento
const anos = meses / 12

// Saída
console.log('O valor de meses ', meses, ' em anos e: ', anos)
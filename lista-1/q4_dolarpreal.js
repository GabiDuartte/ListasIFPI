const input = require('prompt-sync')()

// Entrada
const valor_dolar = Number(input('Valor  em dolar ($): '))

// Processamento
const valor_real = valor_dolar * 5

// Saída
console.log('O valor ', valor_dolar, ' $')
console.log('e igual a ', valor_real, ' em real R$')
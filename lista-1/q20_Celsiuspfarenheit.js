const input = require('prompt-sync')()

// Entrada
const celsius = Number(input('Informe o valor temperatura em celsius: '))

// Processamento
const valor_farenheit =( 9 * celsius + 160) / 5

// Saída
console.log('O valor da temperatura em farenheit e: ', valor_farenheit)
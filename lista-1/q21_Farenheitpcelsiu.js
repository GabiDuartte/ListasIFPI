const input = require('prompt-sync')()

// Entrada
const farenheit = Number(input('Informe o valor da temperatura em farenheit: '))

// Processamento
const valor_celsius = (5 * farenheit - 160) /9

// Saída
console.log('O valor dessa temperatura em celsius e: ', valor_celsius)
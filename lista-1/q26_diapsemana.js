const input = require('prompt-sync')()

// Entrada
const dia = Number(input('Informe o numero de dias: '))

// Processamento
const semana = dia / 7

// Saída
console.log('O valor de dias ', dia, ' em semana e: ', semana)
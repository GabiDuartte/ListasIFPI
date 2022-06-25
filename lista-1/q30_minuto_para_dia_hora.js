const input = require('prompt-sync')()

// Entrada
const minutos = Number(input('Informe o valor em minutos: '))

// Processamento
const dias = minutos / 1440
const horas = minutos / 60

// Saída
console.log('O valor', minutos, 'em minutos para dias e horas equivalente e: ', dias, horas )
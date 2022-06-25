const input = require('prompt-sync')()

// Entrada
const tempo_minutos = Number(input('Tempo (minutos): '))

// Processamento
const tempo_horas = tempo_minutos / 60

// Saída
console.log('O tempo ', tempo_minutos, ' em minutos para horas ')
console.log('e igual a ', tempo_horas, ' horas')
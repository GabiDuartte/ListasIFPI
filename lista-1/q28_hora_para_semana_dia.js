const input = require('prompt-sync')()

// Entrada
const horas = Number(input('Informe o valor em horas: '))

// Processameto
const semana = horas / 168
const dia = horas/ 24

// Saída
console.log('A transformação do valor', horas, ' em horas para semana e dia equivalente e: ', semana, dia)
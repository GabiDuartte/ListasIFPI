const input = require('prompt-sync')()

// Entrada
const segundos = Number(input('Informe os segundos: '))

// Processamento
const horas = segundos / 3600
const minutos = segundos / 60

// Entrada
console.log('O valor do horario', segundos, '  em segundos para hora e minuto equivalente e: ',  horas, minutos)
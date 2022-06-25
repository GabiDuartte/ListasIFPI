const input = require('prompt-sync')()

// Entrada
const valor_km = Number(input('Valor da distancia (km): '))

// Processamento
const valor_m = valor_km * 1000

// Saída
console.log('O valor da distancia em metros e: ', valor_m)
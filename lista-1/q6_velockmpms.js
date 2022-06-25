const input = require('prompt-sync')()

// Entrada
const velocidade_km = Number(input('Velocidade (km/h): '))

// Processamento
const velocidade_ms = velocidade_km / 3.6

// Saída
console.log('A velocidade', velocidade_km, ' (km/h)')
console.log(' e igual a: ', velocidade_ms, ' em m/s')
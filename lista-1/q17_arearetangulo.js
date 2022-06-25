const input = require('prompt-sync')()

// Entrada
const base = Number(input('Valor da base do retangulo: '))
const altura = Number(input('Valor da altura do retangulo: '))

// Processamento
const valor_area = base * altura

// Saída
console.log('O valor da area do retangulo e: ', valor_area)
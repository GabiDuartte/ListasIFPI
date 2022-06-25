const input = require('prompt-sync')()

// Entrada
const base = Number(input('Informe o valor da base do triangulo: '))
const altura = Number(input('Informe o valor da altura do triangulo: '))

// Processamento
const valor_area =( base * altura )/2

// Saida
console.log('O valor da area do triangulo e: ', valor_area)
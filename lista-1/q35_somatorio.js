const prompt = require('prompt-sync')()

// Entrada
const numero = Number(prompt('Digite um numero: '))

// Processamento
const milhar = Number(input(numero / 1000))
const resto_1 = Number(input(numero % 1000))
const centena = Number(input(resto_1 / 100))
const resto_2 = Number(input(resto_1 % 100))
const dezena = Number(input(resto_2 / 10))
const unidade = Number(input(resto_2 % 10))
const soma = Number(input(milhar + centena + dezena + unidade))

// Saída
console.log('O somatorio dos 4 dígitos e: ', soma)
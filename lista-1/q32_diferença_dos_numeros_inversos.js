const input = require('prompt-sync')()

// Entrada
const numero_1 = Number(input('Valor do numero: '))

// Processamento
const unidade = Number(input(numero_1 / 100))
const resto_1 = Number(input(numero_1 % 100))
const dezena = Number(input(resto_1 / 10))
const centena = Number(input(resto_1 % 10))
const numero_2 = Number(input(centena * 100, dezena * 10, unidade *1))
const numero_total = Number(input(numero_1 - numero_2))

// Saída
console.log('A diferença dos numeros e seus inversos e: ', numero_total)
const input = require('prompt-sync')()

// Entrada
const nota_1 = Number(input('Valor da primerira nota: '))
const peso_1 = Number(input('Valor do peso da primeira nota: '))
const nota_2 = Number(input('Valor da segunda nota: '))
const peso_2 = Number(input('Valor do peso da segunda nota: '))
const nota_3 = Number(input('Valor da terceira nota: '))
const peso_3 = Number(input('Valor do peso da terceira nota: '))

// Processamento
const notas = (nota_1 * peso_1) + (nota_2 * peso_2) + (nota_3 * peso_3)
const pesos = peso_1 + peso_2 + peso_3
const media_ponderada = notas / pesos

// Saída
console.log('A media ponderada e: ', media_ponderada)
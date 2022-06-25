const input = require('prompt-sync')()

// Entrada
const numero_1 = Number(input('Valor do primeiro numero: '))
const numero_2 = Number(input('Valor do segundo numero: '))

// Processamento
const soma = numero_1 + numero_2
const diferenca = numero_1 - numero_2
const divisao = soma / diferenca

// Saída
console.log('A divisão da soma pela subtracao entre os números dados e: ', divisao)
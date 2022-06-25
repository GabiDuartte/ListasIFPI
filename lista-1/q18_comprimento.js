const input = require('prompt-sync')()

// Entrada
const raio = Number(input('Valor do raio da circuferencia: '))

// Processamento
const valor_comprimento = 2 * raio * 3.14

// Saída
console.log('O valor do comprimento da circuferencia e: ', valor_comprimento)
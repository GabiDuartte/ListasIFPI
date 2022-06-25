const input = require('prompt-sync')()

// Entrada
const lado = Number(input('Valor do lado do quadrado: '))

// Processamento
const valor_area = lado * lado

// Saída
console.log('O valor da area do quadrado e: ', valor_area)
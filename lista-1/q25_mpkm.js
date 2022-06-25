const input = require('prompt-sync')()

// Entrada
const metros = Number(input('Informe o valor em metros: '))

// Processamento
const km = metros / 1000


// Saída
console.log(' O valor ', metros, ' em metro para quilometros e: ', km)
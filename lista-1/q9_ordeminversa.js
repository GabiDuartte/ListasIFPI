const prompt = require('prompt-sync')()

// Entrada
a = Number(prompt('Valor do primeiro numero: '))
b = Number(prompt('Valor do segundo numero: '))

// Processamento
inverso = b + "" + a

// Saída
console.log('A ordem inversa dos algarismos digitados e: ', inverso)
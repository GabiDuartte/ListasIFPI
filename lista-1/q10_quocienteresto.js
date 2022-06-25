const input = require('prompt-sync')()

// Entrada
const numero_1 = Number(input('Valor do primeiro numero: '))
const numero_2 = Number(input('Valor do segundo numero: '))

// Processamento
const quociente = numero_1 / numero_2
const resto = numero_1 % numero_2

// Saída
console.log('O quociente entre os dois numeros e: ', quociente)
console.log('O resto da divisão entre os dois numeros e: ', resto)
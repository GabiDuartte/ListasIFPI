const input = require('prompt-sync')()

// Entrada
const numero_1 = Number(input('Valor do primeiro número: '))
const numero_2= Number(input('Valor do segundo número: '))
const numero_3 = Number(input('Valor do terceiro número: '))

// Processamento
const soma = numero_1 + numero_2
const diferenca = numero_2- numero_3

// Saída
console.log('A soma entre os dois primeiros numeros e: ', soma)
console.log('A diferença entre os dois ultimos numeros e: ', diferenca)
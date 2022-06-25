const input = require('prompt-sync')()

// Entrada
const numero = Number(input('Digite um numero: '))

// Processamento
unidade = Number(input(numero / 100))
resto_1 = Number(input(numero % 100))
dezena = Number(input(resto_1 / 10))
centena = Number(input(resto_1 % 10))
num_1 =  Number(input(centena * 100 + dezena * 10 + unidade * 1))
const soma = Number(input(num_1 + numero))

// Saída
console.log('A soma do numero com seu inverso e: ', soma)
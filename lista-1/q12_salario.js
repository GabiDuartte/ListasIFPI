const input = require('prompt-sync')()

// Entrada
const salário = Number(input('Salario atual em reais (R$): '))

// Processamento
const aumento = salário * (25/100)
const novo_salário = salário + aumento

// Saída
console.log('O seu novo salario e (R$): ', novo_salário)
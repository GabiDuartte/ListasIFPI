const input = require('prompt-sync')()

// Entrada
const numero_binario_nibble = Number(input('Informe o valor do numero binario nibble: '))

// Processamento
const milhar = Number(input(numero_binario_nibble / 1000))
const resto_1 = Number(input(numero_binario_nibble % 1000))
const centena = Number(input(resto_1 / 100))
const resto_2 = Number(input(resto_1 % 100))
const dezena = Number(input(resto_2 / 10))
const unidade = Number(input(resto_2 % 10))
const digito_1 = Number(input(2 ** 0) * unidade)
const digito_2 = Number(input(2 ** 1) * dezena)
const digito_3 = Number(input(2 ** 2) * centena)
const digito_4 = Number(input(2 ** 3) * milhar)
const numero_decimal = Number(input(digito_1 + digito_2 + digito_3 + digito_4))

// Saída
console.log('O valor do numero binario nibble em decimal e: ', numero_decimal)
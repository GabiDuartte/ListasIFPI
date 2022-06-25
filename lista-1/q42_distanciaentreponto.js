const prompt = require('prompt-sync')()

//Inicio
const x1 = Number(prompt('Informe o valor de x1 : '))
const x2 = Number(prompt('Informe o valor de x2: '))
const y1 = Number(prompt('Informe valor de y1: '))
const y2 = Number(prompt('Informe valor de y2: '))

//Processamento
const dist = ((x2 - x1)^2 + (y2 - y1)^2 )

//Saida
console.log('A distancia e: ', dist)
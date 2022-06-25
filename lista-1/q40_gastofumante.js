const prompt = require('prompt-sync')()

//Inicio
const anos = Number(prompt('Informe o numero de anos de fumo: '))
const cig = Number(prompt('Informe a quantidade de cigarros fumados por dia: '))
const cartela = Number(prompt('Informe o peco da cartela de cigarro: '))

//Processamento
const p = (cartela*20) *cig + anos

//Saida
console.log('O gasto e: ', p)
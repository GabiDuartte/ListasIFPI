const prompt = require('prompt-sync')()

//Inicio
const cf = Number(prompt('Informe o custo da fabrica: '))

//Processamento
const d = cf * (28/100)
const i = cf*(45/100)
const c = cf + d + i

//Saida
console.log('O valor do custo do consumidor e: ', c)
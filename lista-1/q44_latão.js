const prompt = require('prompt-sync')()

//Inicio
const m = Number(prompt('Informe a massa do latao em kg: '))

//Processamento
const c = m*(70/100)
const z = m*(30/100)

//Saida
console.log('E preciso de ', c, ' quantidade de cobre e ', z, ' quantidade de zinco para formar o latao')
const prompt = require('prompt-sync')()

//Inicio
const a = Number(prompt('A: '))
const b = Number(prompt('B: '))
const c = Number(prompt('C: '))
const d = Number(prompt('D: '))
const e = Number(prompt('E: '))
const f = Number(prompt('F: '))

//Processamento
const x = (c*e - b*f)/(a*e - b*d) 
const y = (a*f - c*d)/(a*e - b*d)

//Saida
console.log('O valor de x e: ', x)
console.log('O valor de y e: ', y)
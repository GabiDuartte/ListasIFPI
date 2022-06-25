const prompt = require('prompt-sync')()

//Inicio
const n1 = Number(prompt('Informe o primeiro valor: '))
const n2 = Number(prompt('Informe o segundo valor: '))
const n3 = Number(prompt('Informe o terceiro valor: '))

//Processamento
const r = ((n1 + n2)^2)
const s = (n2 + n3)
const d = (r + s)/2

//Saida
console.log('O resultado do calcula da expressao e: ', d)
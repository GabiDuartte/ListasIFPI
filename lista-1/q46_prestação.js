const prompt = require('prompt-sync')()

//Inicio
const n = Number(prompt('Informe um valor: '))

//Processamento
const e = n/3
const q = n%3
const pr = (n-e)/2

//Saida
console.log('A entrada e: ', e)
console.log(' Serao ', q, ' prestacoes de: ', pr)
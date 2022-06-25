const prompt = require('prompt-sync')()

function main(){
const data = Number(prompt('Dia: '))
const mes = Number(prompt('Mes: '))
const ano = Number(prompt('Ano: '))

Date.parse(data, mes, ano)
console.log('Mes: ', mes)
}
main()
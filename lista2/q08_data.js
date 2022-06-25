const prompt = require('prompt-sync')()

function main(){
     const datatual = Number(prompt('Data atual (dia) /(mes) /(ano): '))
     const nasc = Number(prompt('Data de nascimento (dia)/(mes)/(ano): '))
     const anoatual = Number(prompt('Ano atual: '))
     const anonasc = Number(prompt('Ano nascimento: '))

     const idade = anoatual - anonasc

     console.log('Idade: ', idade)
}
main()
const prompt = require('prompt-sync')()

function main(){

const num1 = Number(prompt('numero 1: '))
const num2 = Number(prompt('numero 2: '))

let maior, menor
if(num1 > num2){
    maior = num1
    menor = num2
} else{
    maior = num2
    menor = num1
}
  console.log('Maior: ', maior)
  console.log('Menor: ', menor)
}
main()
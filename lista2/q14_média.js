const prompt = require('prompt-sync')()


function main(){

const n1 = Number(prompt('Primeiro número: '))
const n2 = Number(prompt('Segundo número: '))
const n3 = Number(prompt('Terceiro número: '))
const n4 = Number(prompt('Quarto número: '))
const n5 = Number(prompt('Quinto número: '))

const media = (n1 + n2 + n3 + n4 + n5) / 5
console.log('A média aritmética dos números lidos é: ', media)

let maior

if (n1 > media){
    maior = n1
}else if(n2 > media){
    maior = n2
}if (n3 > media){
    maior = n3
}else if (n4 > media){
    maior = n4
}else if(n5 > media){
    maior = n5
}else{
    console.log('Não encontrou-se a média.')
}
console.log('Maiores que a media: ', maior)
}
main()
 
   
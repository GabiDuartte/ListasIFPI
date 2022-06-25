const prompt = require('prompt-sync')()


function main(){
    console.log('### NÚMEROS INTEIROS ###')

const numero_1= Number(prompt('Número 1: '))
const numero_2 = Number(prompt('Número 2: '))
const numero_3 = Number(prompt('Número 3: '))


if (numero_1 ** -1 && numero_1 >= 0.5){
    console.log('Arredonda-se o número para um inteiro.')
}else{
    console.log('Arredonda-se o número para a fração inferior.')
}
if(numero_2 ** -1 && numero_2 >= 0.5){
    console.log('O valor e arrendodado para um inteiro')
}else{
    console.log('O valor e arredondado para fraçao inferior')
}
if(numero_3**-1 && numero_3 >= 0.5){
    console.log('O valor e arrendodado para um inteiro')
}else{
    console.log('O valor e arredondado para fraçao inferior')
}
}
main()
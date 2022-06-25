const prompt = require('prompt-sync')()

function main(){

    const num1 = Number(prompt('valor do numero 1: '))
    const num2 = Number(prompt('valor do numero 2: '))
    const num3 = Number(prompt('valor do numero 3: '))

    if(num1 == num2){
        console.log('O primeiro numero e igual ao segundo')
    } else if(num2 == num3){
        console.log('O segundo numero e igual ao terceiro')
    } else if(num1 == num3){
        console.log('O primeiro numero e igual ao terceiro')
    } else if(num1 == num2 && num2 == num3){
        console.log('Os tres numeros sao iguais')
    }else{
        console.log('Nao ha numeros iguais')
    }
}
main()
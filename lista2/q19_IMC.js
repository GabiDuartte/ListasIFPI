const prompt = require('prompt-sync')()


function main(){
    console.log('### IMC DE UMA PESSOA ###')

    const peso = Number(prompt('Digite aqui seu peso(em Kg): '))
    const altura = Number(prompt('Digite aqui sua altura(em metros): '))
    const imc = (peso / Math.pow(altura), 2)

if(imc < 25){
    console.log('PESO NORMAL')
}else if(imc > 25 && imc <= 30){
    console.log('OBESO')
}else if(imc > 30){
    console.log('OBESO MÓRBIDO')
}else{
    console.log('Nenhuma das anteriores.')
}
}
main()
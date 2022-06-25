const prompt = require('prompt-sync')()

function main(){
    const n = Number(prompt('Valor de 1 a 10: '))


    if(n == 1){
        console.log('Domingo')
    }else if(n == 2){
        console.log('Segunda')
    }else if(n == 3){
        console.log('Terça')
    }else if(n == 4){
        console.log('Quarta')
    }else if (n == 5){
        console.log(' Quinta ')
    }else if(n == 6){
        console.log('Sexta')
    }else if(n == 7){
        console.log('Sabado')
    }else{
        console.log('Valor invalido')
    }


}
main()
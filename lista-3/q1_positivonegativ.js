const prompt = require('prompt-sync')()

function main(){

    const n = Number(prompt('Informe um valor: '))

    if(n >= 0){
        console.log('O numero e positivo')
    }else{
        console.log('O numero e negativo')
    }

}
main()
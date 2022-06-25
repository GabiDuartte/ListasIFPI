const prompt = require('prompt-sync')()

function main(){
    const n = Number(prompt('Valor: '))

    if (n == 'inteiro'){
        console.log('Inteiro')
    }else if(n == 'decimal'){
        console.log('Decimal')
    }else{
        console.log('Valor invalido')
    }

}
main()
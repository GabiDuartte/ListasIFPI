const prompt = require('prompt-sync')()

function main(){
    const n1 = Number(prompt('NUM1: '))
    const n2 = Number(prompt('Num2: '))
    const n3 = Number(prompt('NUM3: '))
    const op = Number(prompt('Opçao (1), (2) ou (3): '))
    
    let valor
    if(op == 1 ){
       valor = n1
    }else if( op == 2){
        valor = n2
    }else if (op == 3){
        valor = n3
    }else{
        console.log('Invalido')
    }
    console.log('Valor: ', valor)
}
main()
const prompt = require('prompt-sync')()

function main(){
const num_1 = Number(prompt('Num: '))
const num_2 = Number(prompt('Num2: '))
const op = Number(prompt('Escolha entre (1),(2), (3) e (4): '))

const soma = num_1 + num_2
const diferenca = num_1 - num_2
const multiplica = num_1 * num_2
const dv = num_1 / num_2

    if( op == 1){
      console.log('A soma e: ', soma)
    }else if(op == 2){
        console.log('A diferenca e: ', diferenca)
    }else if(op == 3){
        console.log('A multiplicaçao e: ', multiplica)
    }else if(op == 4){
        console.log('A divisao e: ', dv)
    }
}
main()

const prompt = require('prompt-sync')()

function main(){
    let n_i = Number(prompt('Identidade do boi: '))

    let mais_pesado = 0
    let mais_pesadon = 0
    let mais_leve = 0
    let mais_leven = 0
    console.log('Para encerrar o processo digite "0" ')
    
    while(n_i != 0){
        let peso = Number(prompt("Peso do boi (KGs): "))

        if(peso < mais_leve){
            mais_leve = peso
            mais_leven = n_i
        } else if (peso > mais_pesado){
            mais_pesado = peso
            mais_pesadon = n_i
        }
        n_i = Number(prompt('Identidade dp boi: '))
    }
    console.log('Boi mais leve: ', mais_leven, 'Peso: ', mais_leve)
    console.log('Boi mais pesado: ', mais_pesadon, 'Peso: ', mais_pesado)
}
main()
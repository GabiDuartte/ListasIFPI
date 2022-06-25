const prompt = require('prompt-sync')()

function main(){
    let x = Number(prompt('Numero  x: '))

    let anterior = x
    let atual = Number(prompt('Numero: '))
    let soma = anterior + atual

    while (!(soma == x)){
        atual =  Number(prompt('Número: '))
        anterior = atual
        soma = atual + anterior
        if(soma == x){
            console.log('Fim da lista')
        }else{
            console.log(soma)
        }
    }

}
main()
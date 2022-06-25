const prompt = require('prompt-sync')()

function main(){
    const n = Number(prompt('Informe um valor de 4 digitos: '))
    const u1 = Number(prompt('Digite os dois primeiros digitos desse valor: '))
    const u2 = Number(prompt('Informe os dois ultimos numeros do valor informado: '))

    const soma = u1 + u2
    const quad = soma*soma

    if (quad == n){
        console.log('Valor igual')
    }else{
        console.log('Valor diferente')
    }

}
main()
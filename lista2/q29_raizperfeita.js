const prompt = require('prompt-sync')()

function main(){
    const n = Number(prompt('Digite um numero de 4 digitos: '))
    const u1 = Number(prompt('dois primeiros digitos do valor: '))
    const u2 = Number(prompt('Dois ultimos digitos do valor: '))

    const soma = u1 + u2

    if(Math.sqrt(n, 2) == soma){
        console.log('QUADRADO PERFEITO')
    }else if( Math.sqrt(n) !== soma ){
        console.log('Nao e quadrado perfeito')
    }else{
        console.log('Valor invalido')
    }

}
main()
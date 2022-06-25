const prompt = require('prompt-sync')()

function main(){
    const num1 = Number(prompt('Digite um numero com dois digitos: '))

    const dezena = num1 * 10
    const resto = num1 % dezena
    const unidade = resto * 1

    console.log('valor da dezena: ', dezena)
    console.log('valor da unidade: ', unidade)

    if (dezena == unidade){
       console.log('O algarismo da dezena e igual ao da unidade')
    }else{
        console.log('O algarismo da dezena e diferente do da unidade')
    }

}
main()
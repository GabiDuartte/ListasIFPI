const prompt = require('prompt-sync')()

function main(){
    const angulo1 = Number(prompt('angulo 1: '))
    const angulo2 = Number(prompt('angulo 2: '))
    const angulo3 = Number(prompt('angulo 3: '))

    const soma = angulo1 + angulo2 + angulo3
    if( soma == 180){
        console.log('E triangulo')
    }

         if (angulo1 < 90 && angulo2 < 90 && angulo3 <90){
            console.log('É acutângulo')
        }else if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90){
            console.log('É retângulo')
        }else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90){
            console.log('É obtusângulo')
        }
    else{
        console.log('Não é um triangulo')
    }


}
main()
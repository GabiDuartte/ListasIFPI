const prompt = require('prompt-sync')()

function main(){
    const a = Number(prompt('Valor de A: '))
    const b = Number(prompt('Valor de B: '))
    const c = Number(prompt('Valor de C: '))

    const d = -(Math.pow(b,2)) - 4*a*c
    const x1 = (-b + Math.sqrt(d, 2))/2*a
    const x2 = (-b - Math.sqrt(d), 2)/2*a
    if(d > 0){
        console.log('Existem duas raizes')
    }else if( d == 0){
       console.log('Existe uma raiz')
    }else{
        console.log('Nao ha raiz')
    if(a == 0){
        console.log('INVALIDO')
    }else{
        console.log('valido')
    }
}
    console.log('O valor das raizes vai ser: ', x1, x2)
}
main()
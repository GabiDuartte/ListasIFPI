const prompt = require('prompt-sync')()

function main(){
    const x = Number(prompt('Valor de x: '))
    const y = Number(prompt('Valor de y: '))

    const area = x*y
    
    if (area == -(x*y)){
        console.log('INVALIDO')
    }else{
        console.log('Valido')
    }
    console.log('Area: ', area)

}
main()
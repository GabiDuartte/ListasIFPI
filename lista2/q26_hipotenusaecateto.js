const prompt = require('prompt-sync')()

function main(){
    const l1 = Number(prompt('Lado1: '))
    const l2 = Number(prompt('Lado2: '))
    const l3 = Number(prompt('Lado3: '))

    let hipotenusa, cateto1, cateto2
    if(l1 > l2 && l1 > l3){
        hipotenusa = l1
        cateto1 = l2
        cateto2 = l3
    }else if(l2>l1 && l2 > l3){
        hipotenusa = l2
        cateto1 = l1
        cateto2 = l3
    }else{
        hipotenusa = l3
        cateto1 = l1
        cateto2 = l2
    }
    console.log('Hipotenusa: ', hipotenusa)
    console.log('Cateto 1: ', cateto1)
    console.log('Cateto 2: ', cateto2)
}
main()
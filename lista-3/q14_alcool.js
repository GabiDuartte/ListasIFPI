const prompt = require('prompt-sync')()

function main(){
    console.log('##### A #### ---> ')
    const a = Number(prompt('Alcool litros: '))
    console.log('#### G #### --->')
    const g = Number(prompt('Gasolina litros: '))

    const p = a*1.90
    const p1 = g*2.50
    const dg1 = g*(4/100)
    const dg2 = g*(6/100)
    if(g <= 20){
        console.log('Com desconto na gasolina: ', dg1)
    }else{
        console.log('Com desconto na gasolina: ', dg2)
    }
function alcool(){
    const d1 = a*(3/100) - a
    const d2 = a*(5/100) - a
    if(a <= 20){
        console.log('Desconto de 3% sobre o alcool: ', d1)
    }else{
        console.log('Desconto 5% sobre o alcool: ', d2)
    }
}
 alcool()
 console.log('Preço do alcool: ', p)
 console.log('Preço da gasolina: ', p1)
}
main()
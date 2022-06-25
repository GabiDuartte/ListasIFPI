const prompt = require('prompt-sync')()

function main(){
    const e = Number(prompt('Quant.elementos: '))

    let t = Array(e)
    const v = t[e]
    let dec = 0
    let hex = 0

    for(let i = 0; i<e; i++){
        t[i] = Number(prompt(`Numero Binario ${i}: `))
    }
    dec = parseInt(v, 2)
    hex = t.toString(parseInt(v, 2), 16)
    
    console.log('O numero binario: ', t)
    console.log('Em Decimal: ', dec)
    console.log(' Em Hexadecimal: ', hex)

}
main()
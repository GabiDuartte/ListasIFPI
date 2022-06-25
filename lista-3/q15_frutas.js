const prompt = require('prompt-sync')()

function main(){
    const mo = Number(prompt('KG do morango: '))
    const ma = Number(prompt('KG maça: '))

    const a5 = mo*2.50
    const d5 = mo*2.20
    const m5 = ma*1.80
    const dm = ma*1.50
    const desc = mo*(10/100) - mo
    const dec1 = ma*(10/100) - ma
    if(mo > 8 ){
        console.log('Preço: ', desc)
    }else if( mo <= 5 ){
        console.log('Preço: ', a5)
    }else if (mo > 5){
        console.log('Preço: ', d5)
    }else{
        console.log('Erro')
    }
    if( ma > 8) {
        console.log('Preço: ', dec1)
    }else if(ma <= 5){
        console.log('Preço: ', m5)
    }else if(ma > 5){
        console.log('Preço: ', dm)
    }else{
        console.log('Erro')
    }
}
main()
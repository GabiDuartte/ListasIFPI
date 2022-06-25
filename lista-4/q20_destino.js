const prompt = require('prompt-sync')()

function main() {
    
    let d = Number(prompt('valor da distancia percorrida (KM): '))
    let c = Number(prompt('Quantidade de combustivel consumido (L): '))

    let dn = 600
    let max_c = 50
    let c_gasto = d/c
    
    while(c> max_c){
        console.log('Erro')
    }
    if(d >= dn){
        console.log('Você chegou ao seu destino')
    }else if(c == max_c){
        console.log('Falta de combustivel')
    }else{
        console.log('Ainda falta para chegar a seu destino')
    }
    
    console.log(`Consumo foi de ${c_gasto} KM/L`)
}

main()
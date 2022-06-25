const prompt = require('prompt-sync')()

function main(){
    let r = Number(prompt('Digite [1] para otimo, [2] para bom, [3] para regular e [4] para ruim'))
    let l1 = 0
    let l2 = 0
    let l3 = 0
    let l4 = 0
    let total = 0
    let m = 0
    console.log(' Digite "-1" para encerrar o programa')
    while(!( r == -1)){
        r = Number(prompt('Digite [1] para otimo, [2] para bom, [3] para regular e [4] para ruim'))
        let i = Number(prompt('Idade: '))
    
        if(r == '1'){
           l1++ 
           let m = i/r
        }else if(r == '2'){
            l2++
        }else if(r == '3'){
            l3++
        }else if( r == '4'){
            l4++
        }else{
            console.log('Invalido')
        }
    }
        let pl2 = (100*l2)/total
    console.log('Media da idade dos que responderam otimo: ', m)
    console.log('Quantidade dos que responderam regular: ', l3)
    console.log('Porcentagem dos que responderam bom: ', pl2)
    
}
main()
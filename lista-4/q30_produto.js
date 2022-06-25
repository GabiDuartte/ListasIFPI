const prompt = require('prompt-sync')()

function main(){
    let r = prompt('Produto: ')
    console.log('Digite "Fim" para encerrar')
    let d1 = 10/100
        let d2 = 20/100
        let d3 = 25/100
        let dec = 0

    while(!(r == 'fim')){
        r = prompt('Produto: ')
        let p = Number(prompt('Preço: '))
        let  q = Number(prompt('Quantidade comprada: '))
       
        if(q <= 10){
            console.log('Sem desconto')
            dec = 0
        }else if(q >= 11 && q <= 50 ){
            dec = d1*p - p
        }else if(q >= 21 && q <= 50){
            dec = d2*p - p
        }else if( q > 50){
            dec = d3*p - p
        }else{
            console.log('Erro')
        }
    }
        console.log('Produto comprado: ', r)
        console.log('Valor a ser pago: ', dec)  

}
main()
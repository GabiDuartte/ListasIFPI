const prompt = require('prompt-sync')()

function main(){
    let s = Number(prompt('Salario:  '))

    let sn = 0
    let p = 0
    let soma_reajuste = 0
    let soma = 0
    
    while (!(s == 0)){
        s = Number(prompt(('Salario: ')))
        if(s <= 2999.99){
            p = (25/100) * s
            sn = p + s
        }else if(s >= 3000 && s <= 5999){
            p = (20/100) * s
            sn = p + s
        }else if(s >= 6000 && s <= 9999.99){
            p = (15/100) * s
            sn = p + s
        }else if(s > 10000.00){
            p = (10/100) * s
            sn = p + s
        }
        soma += s
        soma_reajuste += sn
        
        console.log(`O novo salário é , ${sn}`)
    }
    let diferença = soma_reajuste - soma
    console.log(`Soma dos salários atuais R$ ${soma}`)
    console.log(`Soma dos salários reajustados R$ ${soma_reajuste}`)
    console.log(`O valor da diferença é R$ ${diferença}`)   
}

main()
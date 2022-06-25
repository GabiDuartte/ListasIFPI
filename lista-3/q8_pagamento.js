const prompt = require('prompt-sync')()

function main(){
    const valor_h = Number(prompt('Valor da hora trabalhada: '))
    const q_h = Number(prompt('Quantidade de horas trabalhadas no mes: '))
    
    const s_b = valor_h*q_h
    const d1 = s_b*(5/100) - s_b
    const d2 = s_b*(10/100) - s_b
    const d3 = s_b*(20/100) - s_b
    const s_l1 = s_b - d1
    const s_l2 = s_b - d2
    const sl_3 = s_b - d3
    const IRS = s_b*(5/100)
    const INSS = s_b*(10/100)
    const FGTS = s_b*(11/100)

    if(s_b <= 900){
        console.log('Insento')
    }else if(s_b <= 1500){
        console.log('Desconto 5%: ', d1)
        console.log('Salario liquido: ', s_l1)
    }else if(s_b <= 2500){
        console.log('Desconto 10%: ', d2)
        console.log('Salario liquido: ', s_l2)
    }else if(s_b > 2500){
        console.log('Desconto 20%: ', d3)
        console.log('Salario liquido: ', sl_3)
    }else{
        console.log('Erro')
    }
    console.log('IRS: ', IRS)
    console.log('INSS: ', INSS)
    console.log('FGTS: ', FGTS)
}
main()
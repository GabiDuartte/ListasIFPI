const prompt = require('prompt-sync')()

function main(){
    let n = Number(prompt('Total de funcionarios: '))
    let p = 0
    let pd = 0
    let s = 0
    let INSS = s*(8.5/100) 
    let IR = s*(5/100) 
    let sl = 0

    for(let i = 0; i <= n; i++){
        let c = Number(prompt('Codigo: '))
        let h = Number(prompt('Horas trabalhadas: '))
        let d = Number(prompt('Numero de dependentes: '))
        p = 12*h
        pd = 40*d
        s = pd + p
        sl = s - INSS - IR
    }
    console.log('Desconto do inss: ', INSS)
    console.log('Desconto do IR: ', IR)
    console.log('Salario liquido: ', sl)

}
main()
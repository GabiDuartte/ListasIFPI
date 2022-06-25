const prompt = require('prompt-sync')()

function main(){
    console.log('Calculo dos dias uteis -->')
    let emprestimo = Number(prompt('emprestimo: '))
    let c = 1
    let p = 0
    
    while (emprestimo !== 0){
        emprestimo = (emprestimo - 200)
        p = (0.85/100) * emprestimo
        c++
    }
    console.log(`A quantidade dias será de ${c}`)
}
main()
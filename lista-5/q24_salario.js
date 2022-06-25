const prompt = require('prompt-sync')()

function main(){
    let n = Number(prompt('Total de habitantes: '))
    let ms = 0
    let mf = 0
    let p = 0

    for(let i = 0; i <= n; i++){
        let s = Number(prompt('Salario: '))
        let f = Number(prompt('Numero de filhos: '))
        ms = s/n
        mf = f/n

        if(s <= 1000){
            p = s/n
        }
    }
    console.log('Media de salarios: ', ms)
    console.log('Media de filhos: ', mf)
    console.log('Percentual de pessoas com salario de ate 1000 R$: ', p)
}
main()
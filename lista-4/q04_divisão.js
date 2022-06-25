const prompt = require('prompt-sync')()

function main(){
    const n = Number(prompt('Valor: '))

    let r = n / 2
    let c = 1

    while (r > 1){
        r = r / 2
        c++

        if (r < 1){
            break
        }
    }
    console.log('Última divisão: ', r)
    console.log('Quantidade de divisões: ', c)

}
main()
const prompt = require('prompt-sync')()

function main(){
    const n1 = Number(prompt('Nota 1: '))
    const n2 = Number(prompt('Nota 2: '))

    const m = (n1+n2)/2
    const a = 'A'
    const b = 'B'
    const c = 'C'
    const d = 'D'
    const e = 'E'
    if(m > 9 && m == 10){
        console.log(a)
        console.log('APROVADO')
    }else if(m > 7.5 && m <= 9){
        console.log(b)
        console.log('APROVADO')
    }else if(m > 6 && m <= 7.5){
        console.log(c)
        console.log('APROVADO')
    }else if(m > 4 && m <= 6){
        console.log(d)
        console.log('Reprovado')
    }else{
        console.log(e)
        console.log('Reprovado')
    }
}
main()
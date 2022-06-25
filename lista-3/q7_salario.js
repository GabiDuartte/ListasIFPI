const prompt = require('prompt-sync')()

function main(){
    const s = Number(prompt('Salario: '))

    const a1 = s*(20/100) + s
    const a2 = s*(15/100) + s
    const a3 = s*(10/100) + s
    const a4 = s*(5/100) + s
    const v1 = s*(20/100)
    const v2 = s*(15/100)
    const v3 = s*(10/100)
    const v4 = s*(5/100)

    if (s <= 280){
        console.log('Salario antigo: ', s)
        console.log('Valor do aumento: ', v1)
        console.log('Novo salario: ', a1)
        console.log('O percentual de aumento foi de 20% ')
    }else if(s > 280 && s < 700){
        console.log('Salario antigo: ', s)
        console.log('Valor do aumento: ', v2)
        console.log('Percentual do aumento foi de 15%')
        console.log('Novo salario: ', a2)
    }else if(s > 700 && s < 1500){
        console.log('Salario antigo: ', s)
        console.log('Valor do aumento: ', v3)
        console.log('O percentual de aumento foi 10%')
        console.log('Novo salario: ', a3)
    }else if( s >= 1500 ){
        console.log('Salario antigo: ', s)
        console.log('Valor do aumento: ', v4)
        console.log('O percentual de aumento foi de 5%')
        console.log('Novo salario: ', a4)
    }else{
        console.log('Sem aumento')
    }

}
main()
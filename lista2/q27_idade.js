const prompt = require('prompt-sync')()

function main(){

    const ano_atual = Number(prompt('Ano atual: '))
    const mes_a = Number(prompt('Mes atual: '))
    const dia_a = Number(prompt('Dia atual: '))
    const ano_nasc = Number(prompt('Ano nascimento: '))
    const mes_n = Number(prompt('Mes de nascimento: '))
    const dia_n = Number(prompt('Dia do nascimento: '))


    const idade_a = ano_atual - ano_nasc
    const idade_m = idade_a * 48
    const idade_d = idade_a * 365

    if(dia_a > 31 || dia_n > 31){
        console.log('Invalido')
    }else if(mes_a > 12 || mes_n > 12){
        console.log('Invalido')
    }else{
        console.log('Data valida')
    }
    console.log('A idade em dias e: ', idade_d)
    console.log('A idade em meses e: ', idade_m)
    console.log('A idade em anos e: ', idade_a)

}
main()
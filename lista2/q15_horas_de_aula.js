const input = require('prompt-sync')()


function main(){

    
    console.log('Professor 1 -->')
    const hora = input('Quantidade de horas: ')
    const valor_h = input('Valor por hora: ')
    
    console.log('Professor 2 -->')
    const hora_2 = input('Quantidade de horas: ')
    const valor_h2 = input('Valor por hora: ')

    
    if ((hora * valor_h) > (hora_2 * valor_h2)){
        console.log('O professor 1 possui o maior salário.')
    }else if((hora * valor_h) < (hora_2 * valor_h2)){
        console.log('O professor 2 possui o maior salário.')
    }else{
        console.log('Os salários serão iguais.')
    }

}

main()
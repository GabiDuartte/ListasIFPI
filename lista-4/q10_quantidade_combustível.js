const prompt = require('prompt-sync')()

function main(){
    let passageiro_bil = Number(prompt('Numero do bilhete: '))
    let peso_decolagem = peso_carga + peso_combustivel + peso_passageiro
    while(!( passageiro_bil == 0)){
        passageiro_bil = Number(prompt('Num bilhete: '))
        var peso_container = Number(prompt('Peso do container: '))
        var quant_container = Number(prompt('Quantidade de containers: '))
        var passageiro_bag = Number(prompt('Quantidade de bagagens: '))
        var pass_quant = Number(prompt('Quantidade de passageiros: '))
        var peso_passageiro = 70*pass_quant + passageiro_bag*10
        var somatorio = peso_container + peso_container
        var peso_carga = somatorio
        var combustivel = Number(prompt('Valor do combutível (litros): '))
        var peso_combustivel = combustivel*1.5
        console.log('Quantidade de containers: ', quant_container)
        console.log('Peso passageiros: : ', peso_passageiro)
        console.log('Peso carga: ', peso_carga)
        console.log('Quantidade Combustivel: ')
        if(peso_decolagem == 500.000 && combustivel >= 10000){
            console.log('Decolagem liberada')
        }else {
            console.log('Decolagem nao foi liberada')
            break
        }
        if(passageiro_bil == 0){
            console.log('Fim')
        }
    }




}
main()
const prompt = require('prompt-sync')()

function main(){
    
    let r = prompt('quer encerrar? (s/n): ')
    let nome = prompt("Qual o nome da candidata?: ")
    let peso = Number(prompt("Qual o peso da candidata?(Kg): "))
    let altura = Number(prompt("Qual a altura da candidata?(Cm): "))
    
    let maior = 0
    let maior_nome = 0
    let menor = 0
    let menor_nome = 0
    let mais_magra = 0
    let mais_magra_nome = 0
    let mais_gorda = 0
    let mais_gorda_nome = 0

    while(r != 's'){
        nome = prompt("Qual o nome da candidata?: ")
        peso = Number(prompt("Qual o peso da candidata?(Kg): "))
        altura = Number(prompt("Qual a altura da candidata?(Cm): "))
        r = prompt(' que encerrar? ')
        if(maior > altura){
            console.log('Nome: ', nome)
           maior = altura
           maior = maior_nome
        }else if( menor < altura){
            console.log('Nome: ', nome)
            menor = altura
            menor = menor_nome
        }else if(mais_magra < peso){
            console.log('Nome: ', nome)
            mais_magra = peso
            mais_magra = mais_magra_nome
        }else if(mais_gorda > peso){
            console.log('Nome: ', nome)
            mais_gorda = peso
            mais_gorda = mais_gorda_nome
        }
    }
    console.log('Mais alta: ', maior_nome)
    console.log('Mais baixa: ', menor_nome)
    console.log('Mais magra: ', mais_magra_nome)
    console.log('Mais gorda: ', mais_gorda_nome)
}
main()
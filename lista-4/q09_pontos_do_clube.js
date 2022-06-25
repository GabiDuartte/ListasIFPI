const prompt = require('prompt-sync')()

function main(){
    const prova =  Number(prompt('Valor da prova: '))
    const quant_n = Number(prompt('Quantidade de nadadores: '))
    
    while(!(prova == 0 && quant_n == 0)){
        let nome = prompt('Nome: ')
        let t = Number(prompt('Tempo: '))
        let cl = prompt('Clube (a/b): ')
        let p = Number(prompt('Ponto(9/6/4/3): '))
        let total = 0
        if(p == 9){
            console.log('Nome: ', nome)
            console.log('Tempo: ', t)
            console.log('Clube: ', cl)
            console.log('Primeiro lugar')
        }else if(p == 6){
            console.log('Nome: ', nome)
            console.log('Tempo: ', t)
            console.log('Clube: ', cl)
            console.log('Segundo lugar')
        }else if(p == 4){
            console.log('Nome: ', nome)
            console.log('Tempo: ', t)
            console.log('Clube: ', cl)
            console.log('Terceiro lugar')
        }else if(p == 3){
            console.log('Nome: ', nome)
            console.log('Tempo: ', t)
            console.log('Clube: ', cl)
            console.log('Quarto lugar')
        }else{
            console.log('Invalido')
            break
        }
        if(cl == 'A' > cl == 'B'){
            console.log('Clube A e o vencedor')
        }else{
            console.log('Clube B e o vencedor')
        }
        total++
        console.log('Total de pontos: ', total)
        break
    }
  
}
main()
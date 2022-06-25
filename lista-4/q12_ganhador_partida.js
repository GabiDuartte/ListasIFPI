const prompt = require('prompt-sync')()

function main(){
    console.log('## PARTIDA GOLFE ## --> ')
    let p1 = Number(prompt('Pontos do jogador 1: '))
    let p2 = Number(prompt('Pontos do jogador 2: '))

    while(true){
        let j1 = prompt('jogador 1: ')
        let j2 = prompt('jogador 2: ')
        
        let vencedor = 0
        if (p1 > p2){
        vencedor = j1
    }   else if(p2 > p1) {
        vencedor = j2
    }   else{
        console.log('Empate')
    }
}
    console.log('Vencedor: ', vencedor)
}
main()
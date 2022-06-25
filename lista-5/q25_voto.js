const prompt = require('prompt-sync')()

function main(){
    let n1 = Number(prompt('Total de eleitores: '))
    let c1 = 0
    let c2 = 0
    let c3 = 0
    let n = 0
    let b = 0
    let ve

    for(let i = 0; i<= n1; i++){
        console.log('[1,2 e 3] para votar nos candidatos, [9] para nulo e [0] para em branco')
        let v = Number(prompt('Qual o seu voto? '))

        if(v == 1){
           c1++
        }else if(v == 2){
            c2++
        }else if(v == 3){
            c3++
        }else if(v == 9){
            n++
        }else if(v == 0){
            b++
        }else{
            console.log('Invalido')
        }
        if(c1 > c2 && c1 > c3){
            ve = c1
        }else if(c2 > c1 && c2 > c3){
            ve = c2
        }else{
            ve = c3
        }
    }
   console.log('Total de votos para o candidato 1: ', c1)
   console.log('Total de votos para o candidato 2: ', c2)
   console.log('Total de votos para o candidato 3: ', c3)
   console.log('Total de voto nulo: ', n)
   console.log('Total de voto em branco: ', b)
   console.log('Vencedor: ', ve)
}
main()
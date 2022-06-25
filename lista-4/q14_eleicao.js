const prompt = require('prompt-sync')()

function main(){
    let voto = Number(prompt('Voto: '))

    let s = 0
    let d = 0
    let c = 0
    let indeciso = 0
    let outros = 0
    let nulo = 0
    let total = 0
    while(voto != -1){
        console.log('Escolher 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então responder: indeciso=99, outros=98, nulo/branco=0, e caso queira encerrar a entrevista, digitar "-1" ')
        voto = prompt("Qual será seu voto?: ")
        if(voto == 45){
            s ++
        }else if(voto == 13){
            d ++
        }else if(voto == 23){
            c ++
        }else if(voto == 99){
            indeciso ++
        }else if(voto == 98){
            outros ++
        }else if(voto == 0){
            nulo ++
        }else if(voto == -1){
            console.log("Votação encerrada!")
            break
        }else{
            console.log("Opção inválida!")
        }
    }
        let ps = (100* s)/total
        let pd = (100* d)/total
        let pc = (100 * c)/total
        let p_indeciso = (100 * indeciso)/total
        let p_outros = (100* outros)/total
        let p_nulo = (100* nulo)/total
        total ++
    
console.log('Porcentagem Serra: ', ps)
console.log('Porcentagem Dilma: ', pd)
console.log('Porcentagem Ciro: ',pc)
console.log('Porcentagem indecisos: ', p_indeciso)
console.log('Porcentagem Nulo: ', p_nulo)
console.log('Outros: ', p_outros)
console.log('Total de votos: ', total)
    if((s/total*100)>50 || (d/total*100)>50|| (c/total*100)>50) {
        console.log('Sem segundo turno')
    }else{
        console.log('Com segundo turno')
    
}
}
main()
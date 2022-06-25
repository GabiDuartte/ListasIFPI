const prompt = require('prompt-sync')();

function main(){
    let im = Number(prompt("Investimento mensal: "))
    let tj = Number(prompt("Taxa de juros mensal: "))
    let p = tj/100
    let saldo = 0
    let mes = 0
    let ano = 1
    while(!( im == 12 )){
        saldo = (saldo + im)+(saldo + im)*p
        mes++
    }
    console.log("Saldo do investimento após 1 ano:",saldo.toFixed(2))
    let resposta = String(prompt("Deseja processar mais um ano?(S/N): "))
    while(resposta=="S"){
        let mes2 = 0
        while(mes2!=12){
            saldo = (saldo + inv_mens)+(saldo + inv_mens)*porctg
            mes2++
        }
        ano++
        console.log("Saldo do investimento após",ano,"anos:",saldo.toFixed(2))
        let resposta = String(prompt("Deseja processar mais um ano?(S/N): "))
    }if(resposta=="N"){
        console.log("Fim!")
    }else{
        console.log("Dado inválido!")
    }
    console.log(saldo.toFixed(2))
    ano++
}
main();
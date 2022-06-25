const prompt = require('prompt-sync')()

function main(){

    const s = Number(prompt('Digite a senha: '))
    const senha = 1234

    if(s == 1234){
        console.log('Acesso PERMITIDO')
        console.log('A senha e: ', senha)
    }else{
        console.log('Acesso NEGADO')
    }
}
main()
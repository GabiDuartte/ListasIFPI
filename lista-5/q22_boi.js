const prompt = require('prompt-sync')()

function main(){
    var n = Number(prompt('Numero de fichas: '))
    let ma = 0
    let g = 0
    let ng = 0
    let nm = 0

    for(let i = 0; i<= n; i++){
        var ni = Number(prompt('Numero de identificaçao: '))
        var nome = prompt('Nome do boi: ')
        var p = Number(prompt('Peso do boi: '))
        
        if(p > g){
            g = p
            p = ng
            ng = nome
        }else{
            ma = p
            p = nm
            nm = nome
        }
    }
    console.log('Mais magro: ', nm ,'Numero de identificaçao: ', ni)
    console.log('Mais gordo: ', ng, 'Numero de id: ', ni)
}
main()
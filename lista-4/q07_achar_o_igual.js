const prompt = require('prompt-sync')()

function main(){
    var n = Number(prompt('Número: '))
    console.log('### Lista --> ###')
    let l = 0
    
    while(l <= 10){
        let nu = Number(prompt('Num: '))
        while (!(nu == n)){
            nu++
            console.log('O ultimo numero e diferente do primeiro')
            if(nu == n){
                 console.log("Ultimo numero é igual ao primeiro") 
             }
    }
    }

}
main()